// app/api/cms/[collection]/route.ts
// Rota genérica para CRUD de todas as coleções CMS

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Collection =
  | "hero-slides"
  | "products"
  | "services"
  | "clients"
  | "brands"
  | "presence-points"
  | "contact-offices"
  | "site-settings";

const modelMap: Record<Collection, keyof typeof prisma> = {
  "hero-slides":      "heroSlide",
  "products":         "product",
  "services":         "service",
  "clients":          "client",
  "brands":           "brand",
  "presence-points":  "presencePoint",
  "contact-offices":  "contactOffice",
  "site-settings":    "siteSetting",
};

function getModel(collection: string) {
  const key = modelMap[collection as Collection];
  if (!key) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (prisma as any)[key];
}

export async function GET(_: NextRequest, { params }: { params: { collection: string } }) {
  const model = getModel(params.collection);
  if (!model) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const items = await model.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest, { params }: { params: { collection: string } }) {
  const model = getModel(params.collection);
  if (!model) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const data = await req.json();
  const item = await model.create({ data });
  return NextResponse.json(item, { status: 201 });
}
