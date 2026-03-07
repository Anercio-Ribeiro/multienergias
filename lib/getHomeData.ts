// lib/getHomeData.ts
import { prisma } from "./prisma";

export async function getHomeData() {
  const [heroSlides, products, services, clients, brands, presencePoints, contactOffices, settingsArr] = await Promise.all([
    prisma.heroSlide.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.product.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.service.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.client.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.brand.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.presencePoint.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.contactOffice.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.siteSetting.findMany(),
  ]);

  const settings = Object.fromEntries(
    settingsArr.map((s: { key: string; value: string }) => [s.key, s.value])
  );

  return { heroSlides, products, services, clients, brands, presencePoints, contactOffices, settings };
}