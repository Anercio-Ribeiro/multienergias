// hooks/useHomeData.ts
// Carrega todos os dados dinâmicos da Home a partir da API CMS

import { useEffect, useState } from "react";

type HeroSlide    = { id: number; order: number; tag: string; line1: string; line2: string; line3: string; sub: string; active: boolean };
type Product      = { id: number; slug: string; order: number; name: string; desc: string; color: string; lightColor: string; specs: string[]; brands: string[]; active: boolean };
type Service      = { id: number; order: number; title: string; short: string; iconIndex: number; active: boolean };
type Client       = { id: number; order: number; name: string; active: boolean };
type Brand        = { id: number; order: number; name: string; role: string; logoUrl?: string; active: boolean };
type PresencePoint = { id: number; order: number; name: string; lon: number; lat: number; isMain: boolean; detail: string; active: boolean };
type ContactOffice = { id: number; order: number; country: string; flag: string; address: string; phones: string[]; email: string; active: boolean };
type SiteSetting  = { key: string; value: string };

export type HomeData = {
  heroSlides:     HeroSlide[];
  products:       Product[];
  services:       Service[];
  clients:        Client[];
  brands:         Brand[];
  presencePoints: PresencePoint[];
  contactOffices: ContactOffice[];
  settings:       Record<string, string>;
  loading:        boolean;
  error:          string | null;
};

const API = (col: string) => `/api/cms/${col}`;

export function useHomeData(): HomeData {
  const [state, setState] = useState<HomeData>({
    heroSlides: [], products: [], services: [], clients: [],
    brands: [], presencePoints: [], contactOffices: [],
    settings: {}, loading: true, error: null,
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [heroSlides, products, services, clients, brands, presencePoints, contactOffices, settingsArr] = await Promise.all([
          fetch(API("hero-slides")).then(r => r.json()),
          fetch(API("products")).then(r => r.json()),
          fetch(API("services")).then(r => r.json()),
          fetch(API("clients")).then(r => r.json()),
          fetch(API("brands")).then(r => r.json()),
          fetch(API("presence-points")).then(r => r.json()),
          fetch(API("contact-offices")).then(r => r.json()),
          fetch(API("site-settings")).then(r => r.json()),
        ]);

        const settings = Object.fromEntries(
          (settingsArr as SiteSetting[]).map(s => [s.key, s.value])
        );

        setState({
          heroSlides: heroSlides.filter((s: HeroSlide) => s.active),
          products: products.filter((p: Product) => p.active),
          services: services.filter((s: Service) => s.active),
          clients: clients.filter((c: Client) => c.active),
          brands: brands.filter((b: Brand) => b.active),
          presencePoints: presencePoints.filter((p: PresencePoint) => p.active),
          contactOffices: contactOffices.filter((o: ContactOffice) => o.active),
          settings,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState(s => ({ ...s, loading: false, error: String(err) }));
      }
    };

    fetchAll();
  }, []);

  return state;
}
