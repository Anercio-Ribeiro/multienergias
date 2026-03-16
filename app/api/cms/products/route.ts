// app/api/cms/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


/* ─────────────────────────────────────────────
   GET  /api/cms/products
   Query params:
     ?active=true|false|all   (default: all)
     ?category=<string>
─────────────────────────────────────────────── */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const activeParam  = searchParams.get("active");   // "true" | "false" | null
    const categoryParam = searchParams.get("category");

    const where: Record<string, unknown> = {};
    if (activeParam === "true")  where.active = true;
    if (activeParam === "false") where.active = false;
    if (categoryParam)           where.category = categoryParam;

    const products = await prisma.product.findMany({
      where,
      orderBy: { order: "asc" },
    });

    return NextResponse.json(products);
  } catch (err) {
    console.error("[GET /api/cms/products]", err);
    return NextResponse.json({ error: "Erro ao carregar produtos" }, { status: 500 });
  }
}

/* ─────────────────────────────────────────────
   POST  /api/cms/products
   Body: ProductCreateInput
─────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      order, slug, name, category = "", desc, longDesc = "",
      color = "#095b66", lightColor = "#e8f7f9",
      specs = [], brands = [], highlights = [],
      iconIndex = 0, image = null, active = true,
    } = body;

    // Basic validation
    if (!slug || !name || !desc) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta: slug, name, desc" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        order:      order ?? 0,
        slug,
        name,
        category,
        desc,
        longDesc,
        color,
        lightColor,
        specs,
        brands,
        highlights,
        iconIndex,
        image,
        active,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (err: unknown) {
    console.error("[POST /api/cms/products]", err);
    // Unique constraint on slug
    if (
      typeof err === "object" && err !== null &&
      "code" in err && (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json({ error: "Slug já existe" }, { status: 409 });
    }
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
  }
}