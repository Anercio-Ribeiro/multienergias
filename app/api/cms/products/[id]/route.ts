// app/api/cms/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Ctx = { params: Promise<{ id: string }> };

/* ─────────────────────────────────────────────
   GET  /api/cms/products/:id
─────────────────────────────────────────────── */
export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    if (!product) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (err) {
    console.error("[GET /api/cms/products/:id]", err);
    return NextResponse.json({ error: "Erro ao carregar produto" }, { status: 500 });
  }
}

/* ─────────────────────────────────────────────
   PATCH  /api/cms/products/:id
   Partial update — only provided fields are changed
─────────────────────────────────────────────── */
export async function PATCH(req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;
    const body = await req.json();

    // Whitelist of updatable fields
    const allowed = [
      "order", "slug", "name", "category", "desc", "longDesc",
      "color", "lightColor", "specs", "brands", "highlights",
      "iconIndex", "image", "active",
    ] as const;

    const data: Record<string, unknown> = {};
    for (const key of allowed) {
      if (key in body) data[key] = body[key];
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "Nenhum campo para actualizar" }, { status: 400 });
    }

    const product = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(product);
  } catch (err: unknown) {
    console.error("[PATCH /api/cms/products/:id]", err);
    if (
      typeof err === "object" && err !== null && "code" in err &&
      (err as { code: string }).code === "P2025"
    ) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }
    if (
      typeof err === "object" && err !== null && "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json({ error: "Slug já existe" }, { status: 409 });
    }
    return NextResponse.json({ error: "Erro ao actualizar produto" }, { status: 500 });
  }
}

/* ─────────────────────────────────────────────
   DELETE  /api/cms/products/:id
─────────────────────────────────────────────── */
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  try {
    const { id } = await params;
    await prisma.product.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[DELETE /api/cms/products/:id]", err);
    if (
      typeof err === "object" && err !== null && "code" in err &&
      (err as { code: string }).code === "P2025"
    ) {
      return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }
    return NextResponse.json({ error: "Erro ao eliminar produto" }, { status: 500 });
  }
}