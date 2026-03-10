"use client";
import React from "react";

export interface Client {
  id: number;
  order: number;
  name: string;
  active: boolean;
}

export default function ClientsSection({ clients }: { clients: Client[] }) {
  if (!clients.length) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {clients.map((c) => (
        <div key={c.id} className="client-chip">
          {c.name}
        </div>
      ))}
    </div>
  );
}