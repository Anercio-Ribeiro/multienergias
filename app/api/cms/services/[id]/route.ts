// // ═══════════════════════════════════════════════════════════════
// // app/api/cms/services/[id]/route.ts
// // ═══════════════════════════════════════════════════════════════
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function PUT(
//   req: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const data = await req.json();
//   const item = await prisma.service.update({ where: { id: +id }, data });
//   return NextResponse.json(item);
// }

// export async function DELETE(
//   _: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   await prisma.service.delete({ where: { id: +id } });
//   return NextResponse.json({ ok: true });
// }


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();
  const item = await prisma.service.update({ where: { id: +id }, data });
  return NextResponse.json(item);
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.service.delete({ where: { id: +id } });
  return NextResponse.json({ ok: true });
}