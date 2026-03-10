// // ═══════════════════════════════════════════════════════════════
// // app/api/cms/services/route.ts
// // ═══════════════════════════════════════════════════════════════
// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET(req: NextRequest) {
//   const all = req.nextUrl.searchParams.get("all") === "1";
//   const items = await prisma.service.findMany({
//     orderBy: { order: "asc" },
//     ...(all ? {} : { where: { active: true } }),
//   });
//   return NextResponse.json(items);
// }

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const item = await prisma.service.create({ data });
//   return NextResponse.json(item, { status: 201 });
// }



import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const all = req.nextUrl.searchParams.get("all") === "1";
  const items = await prisma.service.findMany({
    orderBy: { order: "asc" },
    ...(all ? {} : { where: { active: true } }),
  });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const item = await prisma.service.create({ data });
  return NextResponse.json(item, { status: 201 });
}