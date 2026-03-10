// import { NextRequest, NextResponse } from "next/server";
// import { writeFile, mkdir } from "fs/promises";
// import path from "path";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("file") as File;

//     if (!file) {
//       return NextResponse.json({ error: "Nenhum ficheiro enviado" }, { status: 400 });
//     }

//     // Valida tipo
//     if (!file.type.startsWith("image/")) {
//       return NextResponse.json({ error: "Apenas imagens são permitidas" }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Garante que o directório existe
//     const uploadDir = path.join(process.cwd(), "public", "img");
//     await mkdir(uploadDir, { recursive: true });

//     // Nome único para evitar colisões
//     const ext = file.name.split(".").pop();
//     const filename = `hero-${Date.now()}.${ext}`;
//     const filepath = path.join(uploadDir, filename);

//     await writeFile(filepath, buffer);

//     return NextResponse.json({ url: `/img/${filename}` });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Erro ao fazer upload" }, { status: 500 });
//   }
// }



// app/api/cms/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Nenhum ficheiro enviado" }, { status: 400 });
    }

    // Valida tipo MIME
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Apenas imagens são permitidas (JPG, PNG, WEBP…)" }, { status: 400 });
    }

    // Valida tamanho (máx. 8 MB)
    const MAX_SIZE = 8 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "Imagem demasiado grande (máx. 8 MB)" }, { status: 400 });
    }

    const bytes  = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Garante que o directório public/img existe
    const uploadDir = path.join(process.cwd(), "public", "img");
    await mkdir(uploadDir, { recursive: true });

    // Gera nome único  →  hero-<timestamp>-<random>.<ext>
    const ext      = (file.name.split(".").pop() || "jpg").toLowerCase();
    const filename = `hero-${Date.now()}-${Math.random().toString(36).slice(2, 7)}.${ext}`;
    const filepath = path.join(uploadDir, filename);

    await writeFile(filepath, buffer);

    // Devolve o path público que o Next.js serve directamente
    return NextResponse.json({ url: `/img/${filename}` });

  } catch (err) {
    console.error("[upload] Erro:", err);
    return NextResponse.json({ error: "Erro interno ao fazer upload" }, { status: 500 });
  }
}