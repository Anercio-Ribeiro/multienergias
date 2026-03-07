// app/api/cms/products/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// export async function GET(
//   _: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const product = await prisma.product.findUnique({ where: { id: +id } });
//   if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
//   return NextResponse.json(product);
// }

// app/api/cms/products/route.ts  — substitui o GET
export async function GET(req: NextRequest) {
  const all = req.nextUrl.searchParams.get("all") === "1";
  const products = await prisma.product.findMany({
    orderBy: { order: "asc" },
    ...(all ? {} : { where: { active: true } }),
  });
  return NextResponse.json(products);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const product = await prisma.product.update({
    where: { id: +id },
    data,
  });
  return NextResponse.json(product);
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.product.delete({ where: { id: +id } });
  return NextResponse.json({ ok: true });
}