import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:       "Multienergia — Soluções Eléctricas e Energéticas",
  description: "Instalações eléctricas, sistemas solares fotovoltaicos, quadros BT/MT, mobilidade eléctrica e protecção atmosférica. Angola · Portugal.",
  keywords:    "energia solar, instalações eléctricas, quadros eléctricos, EcoFlow, Huawei, Angola, Luanda",
  openGraph: {
    title:       "Multienergia",
    description: "Soluções eléctricas e energéticas para Angola e Portugal.",
    type:        "website",
    locale:      "pt_PT",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0, fontFamily: "'Montserrat', sans-serif" }}
      >
        <Navbar />
        
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>


  );
}








// import type { Metadata } from "next";
// import Navbar from "@/components/Navbar";
// import "./globals.css"; // ajustar ao caminho real do projecto

// export const metadata: Metadata = {
//   title:       "Multienergia — Soluções Eléctricas e Energéticas",
//   description: "Instalações eléctricas, sistemas solares fotovoltaicos, quadros BT/MT, mobilidade eléctrica e protecção atmosférica. Angola · Portugal.",
//   keywords:    "energia solar, instalações eléctricas, quadros eléctricos, EcoFlow, Huawei, Angola, Luanda",
//   openGraph: {
//     title:       "Multienergia",
//     description: "Soluções eléctricas e energéticas para Angola e Portugal.",
//     type:        "website",
//     locale:      "pt_PT",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="pt">
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body style={{ margin: 0, padding: 0, fontFamily: "'Montserrat', sans-serif" }}>
//         {/* ── Navbar partilhado por todas as páginas ── */}
//         <Navbar />

//         {/* ── Conteúdo da página ── */}
//         <main>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }