// app/api/cms/hero-slides/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
//   const data = await req.json();
//   const slide = await prisma.heroSlide.update({ where: { id: +params.id }, data });
//   return NextResponse.json(slide);
// }


export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const slide = await prisma.heroSlide.update({
    where: { id: +id },
    data,
  });
  return NextResponse.json(slide);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  await prisma.heroSlide.delete({ where: { id: +params.id } });
  return NextResponse.json({ ok: true });
}
