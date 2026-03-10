import { prisma } from "@/lib/prisma";

// prisma/seed.ts  (adiciona ao seed existente ou cria novo)
await prisma.product.createMany({
  data: [
    { order: 0, slug: "solar",   name: "Sistemas de Energia Solar",  color: "#095b66", lightColor: "#e8f7f9", iconIndex: 0,
      specs: ["+50 MW instalados","Residencial · Industrial · Utility","Autoconsumo · Carports · Centrais"],
      brands: ["Huawei FusionSolar","SMA","Siemens","Nextracker"],
      desc: "Dimensionamos e instalamos sistemas fotovoltaicos completos. Do painel ao inversor, da ligação à rede ao armazenamento em bateria." },
    { order: 1, slug: "ecoflow", name: "EcoFlow PowerOcean",          color: "#0a7a89", lightColor: "#e6f5f7", iconIndex: 1,
      specs: ["5 kW a 29 kW","Até 45 kWh expansível","15 anos garantia · LFP"],
      brands: ["EcoFlow"],
      desc: "Inversor híbrido trifásico com armazenamento de energia expansível. Backup potente, instalação plug & play e monitorização remota." },
    { order: 2, slug: "quadros", name: "Quadros Elétricos BT",        color: "#064e58", lightColor: "#e5f4f6", iconIndex: 2,
      specs: ["Até 6300 A · Forma 1–4","Fabricação própria em Luanda","Parceiro Legrand · IEC 61439"],
      brands: ["Legrand"],
      desc: "Fabricamos quadros elétricos de baixa tensão com unidades industriais próprias em Luanda e Lisboa. Soluções padrão e à medida." },
    { order: 3, slug: "ups",     name: "UPS & Estabilizadores",       color: "#095b66", lightColor: "#e8f7f9", iconIndex: 3,
      specs: ["Salicru até 800 KVA","Socomec MODULYS 200–4800 KVA","Online dupla conversão"],
      brands: ["Salicru","Socomec"],
      desc: "Energia crítica ininterrupta para data centers, hospitais, indústrias e telecomunicações. Proteção contra cortes, surtos e variações." },
    { order: 4, slug: "mt",      name: "Postos de Transformação",     color: "#0a7a89", lightColor: "#e6f5f7", iconIndex: 4,
      specs: ["Toshiba TCSU 10–30 kV","500 a 2000 KVA","Plug & play · IP66 · Pré-montado"],
      brands: ["Toshiba T&D"],
      desc: "Postos compactos pré-montados para ligação de média tensão. Instalação rápida, segurança máxima (Class AB) e resistência climática." },
    { order: 5, slug: "ve",      name: "Mobilidade Elétrica",         color: "#064e58", lightColor: "#e5f4f6", iconIndex: 5,
      specs: ["11 kW · 22 kW · 50 kW","Doméstico e via pública","Avaliação técnica incluída"],
      brands: ["Huawei","Tesla","Circutor"],
      desc: "Soluções completas para carregamento de veículos elétricos. Aconselhamento, instalação certificada e manutenção contínua." },
  ],
  skipDuplicates: true,
});