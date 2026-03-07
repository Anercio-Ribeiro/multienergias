// app/api/cms/[collection]/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const modelMap: Record<string, string> = {
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
  const key = modelMap[collection];
  if (!key) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (prisma as any)[key];
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { collection: string; id: string } }
) {
  const model = getModel(params.collection);
  if (!model) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const data = await req.json();
  // site-settings uses key as unique id, others use numeric id
  const where = params.collection === "site-settings"
    ? { key: params.id }
    : { id: +params.id };

  const item = await model.update({ where, data });
  return NextResponse.json(item);
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { collection: string; id: string } }
) {
  const model = getModel(params.collection);
  if (!model) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const where = params.collection === "site-settings"
    ? { key: params.id }
    : { id: +params.id };

  await model.delete({ where });
  return NextResponse.json({ ok: true });
}
