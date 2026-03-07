// app/api/cms/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { order: "asc" },
    where: { active: true },
  });
  return NextResponse.json(products);
}

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const product = await prisma.product.create({ data });
//   return NextResponse.json(product, { status: 201 });
// }


export async function POST(req: NextRequest) {
  const data = await req.json();
  const { iconIndex, ...productData } = data; // strip the unknown field
  const product = await prisma.product.create({ data: productData });
  return NextResponse.json(product, { status: 201 });
}