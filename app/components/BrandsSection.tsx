"use client";
import React from "react";

export interface Brand {
  id: number;
  order: number;
  name: string;
  role: string;
  active: boolean;
}

export default function BrandsSection({ brands }: { brands: Brand[] }) {
  if (!brands.length) return null;

  return (
    <div className="three" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }}>
      {brands.map((b) => (
        <div key={b.id} className="brand-card">
          <div style={{ fontSize: 13, fontWeight: 900, color: "#0a1c1e", marginBottom: 4 }}>
            {b.name}
          </div>
          <div
            style={{
              fontSize: 10, fontWeight: 700, color: "#095b66",
              letterSpacing: ".08em", textTransform: "uppercase",
            }}
          >
            {b.role}
          </div>
        </div>
      ))}
    </div>
  );
}