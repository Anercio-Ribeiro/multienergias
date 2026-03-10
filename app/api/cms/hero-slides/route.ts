// app/api/cms/hero-slides/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const slides = await prisma.heroSlide.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(slides);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const slide = await prisma.heroSlide.create({ data });
  return NextResponse.json(slide, { status: 201 });
}
