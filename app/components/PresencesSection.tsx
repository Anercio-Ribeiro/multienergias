// "use client";
// import React, { useState } from "react";

// export interface PresenceItem {
//   id: number;
//   order: number;
//   name: string;
//   lon: number;
//   lat: number;
//   main: boolean;
//   detail: string;
//   flag: string;
//   active: boolean;
// }

// /* ── Web Mercator projection ── */
// function merc(lon: number, lat: number): [number, number] {
//   const x = (lon + 180) / 360 * 1000;
//   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
//   return [+x.toFixed(1), +y.toFixed(1)];
// }

// const LAND: Record<string, string> = {
//   NORTH_AMERICA: `M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8 L 183.3,88.6 L 200,88.6 L 222.2,93.8 L 244.4,88.6 L 261.1,88.6 L 277.8,88.6 L 291.7,93.8 L 305.6,98.7 L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2 L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9 L 291.7,198 L 286.1,210 L 277.8,214.1 L 263.9,218.7 L 250,221.6 L 230.6,214.1 L 208.3,214.1 L 194.4,217.2 L 175,202.2 L 161.1,194.6 L 155.6,189.3 L 158.3,177.9 L 155.6,171.7 L 138.9,160.5 L 125,150.6 L 108.3,145.2 Z`,
//   ALASKA: `M 0,148 L 16.7,139.5 L 27.8,130.1 L 33.3,119.7 L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5 L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6 L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7 L 11.1,152 Z`,
//   GREENLAND: `M 355.6,83.1 L 375,56.1 L 400,27.6 L 427.8,22.8 L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9 L 433.3,130.1 L 416.7,145.2 L 400,139.5 L 383.3,130.1 L 372.2,111.9 Z`,
//   C_AMERICA: `M 230.6,214.1 L 244.4,210 L 255.6,214.1 L 263.9,224.6 L 272.2,236 L 277.8,250 L 263.9,247.2 L 255.6,241.7 L 247.2,233.2 L 238.9,224.6 Z`,
//   SOUTH_AMERICA: `M 277.8,250 L 288.9,247.2 L 300,247.2 L 316.7,243 L 333.3,241.7 L 347.2,241.7 L 361.1,247.2 L 375,252.8 L 388.9,257 L 402.8,257 L 405.6,262.6 L 397.2,271.1 L 388.9,279.8 L 377.8,285.9 L 366.7,290.5 L 355.6,300.3 L 344.4,307.1 L 330.6,316.3 L 319.4,330.4 L 316.7,344.3 L 311.1,344.3 L 305.6,336.5 L 297.2,323.7 L 291.7,310.7 L 291.7,297 L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,
//   EUROPE: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 494.4,174.8 L 495.8,182.8 L 508.3,183 L 516.7,182.4 L 525,180.8 L 536.1,179.9 L 541.7,181.8 L 550,181.8 L 558.3,179.9 L 566.7,179.9 L 575,181.8 L 583.3,181.8 L 591.7,169.6 L 588.9,165.2 L 575,159.4 L 561.1,158.1 L 547.2,158.1 L 536.1,159.4 L 527.8,151.9 L 513.9,150.6 L 508.3,158.1 L 502.8,165.2 L 497.2,168.5 L 491.7,173.8 L 486.1,173.8 L 477.8,181.8 Z M 583.3,181.8 L 591.7,181.8 L 600,185.6 L 602.8,192.9 L 597.2,198 L 586.1,196.3 L 577.8,196.3 L 575,190.5 Z`,
//   IBERIA: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 491.7,173.8 L 495.8,182.8 L 508.3,183 L 509.4,186 L 502.8,188.1 L 500.6,192.9 L 497.2,195 L 486.1,197 L 481.9,195.2 L 475.6,195 L 473.9,192.5 Z`,
//   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1 L 502.8,162.9 L 497.2,167.4 L 488.9,169.6 L 480.6,167.4 Z M 469.4,158.1 L 477.8,152 L 483.3,155.7 L 480.6,165.2 L 472.2,165.2 Z`,
//   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7 L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,
//   SCANDINAVIA: `M 513.9,150.6 L 527.8,151.9 L 536.1,158.1 L 543.1,155.7 L 547.2,152 L 552.8,149.3 L 558.3,147.9 L 566.7,146.6 L 572.2,142.4 L 577.8,128.5 L 580.6,117.8 L 575,109.8 L 566.7,107.7 L 555.6,107.7 L 550,115.9 L 544.4,117.8 L 538.9,128.5 L 525,133.3 L 519.4,133.3 L 513.9,139.5 Z`,
//   RUSSIA: `M 544.4,117.8 L 558.3,107.7 L 583.3,98.7 L 611.1,93.8 L 638.9,93.8 L 666.7,93.8 L 694.4,86.1 L 722.2,83.1 L 750,83.1 L 777.8,86.1 L 805.6,93.8 L 833.3,98.7 L 861.1,98.7 L 888.9,111.9 L 916.7,119.7 L 944.4,119.7 L 966.7,107.7 L 980.6,98.7 L 1000,98.7 L 1000,145.2 L 972.2,158.1 L 944.4,158.1 L 916.7,145.2 L 900,165.2 L 888.9,169.6 L 875,177.9 L 861.1,185.6 L 847.2,185.6 L 833.3,185.6 L 819.4,177.9 L 805.6,175.9 L 791.7,175.9 L 777.8,175.9 L 763.9,171.7 L 750,169.6 L 736.1,165.2 L 722.2,165.2 L 708.3,158.1 L 694.4,158.1 L 680.6,165.2 L 666.7,158.1 L 652.8,152 L 638.9,145.2 L 625,145.2 L 611.1,139.5 L 597.2,139.5 L 588.9,133.3 L 577.8,119.7 L 566.7,117.8 Z`,
//   C_ASIA: `M 538.9,181.8 L 555.6,179.9 L 566.7,179.9 L 575,181.8 L 586.1,177.9 L 600,185.6 L 616.7,185.6 L 630.6,181.8 L 644.4,181.8 L 658.3,185.6 L 666.7,185.6 L 680.6,181.8 L 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 722.2,196.3 L 713.9,203 L 700,206.3 L 686.1,206.3 L 672.2,203 L 655.6,206.3 L 638.9,206.3 L 622.2,206.3 L 611.1,200 L 600,192.9 L 591.7,181.8 L 577.8,181.8 L 566.7,185.6 L 552.8,185.6 L 541.7,185.6 Z`,
//   MIDDLE_EAST: `M 563.9,192.9 L 577.8,181.8 L 586.1,181.8 L 600,185.6 L 611.1,185.6 L 622.2,185.6 L 636.1,192.9 L 650,203 L 658.3,212.6 L 663.9,218.7 L 655.6,228.9 L 644.4,234.6 L 627.8,238.9 L 616.7,238.9 L 608.3,232.2 L 597.2,224.6 L 591.7,215.6 L 577.8,212.6 L 566.7,206.3 L 558.3,196.3 Z`,
//   AFRICA: `M 447.2,194.6 L 461.1,190.6 L 475,190.6 L 488.9,192.9 L 502.8,194.6 L 516.7,194.6 L 530.6,194.6 L 544.4,194.6 L 558.3,196.3 L 572.2,203 L 583.3,209.5 L 594.4,209.5 L 608.3,215.6 L 616.7,224.6 L 622.2,234.6 L 625,241.7 L 619.4,250 L 613.9,258.3 L 611.1,265.4 L 605.6,274 L 600,285.9 L 594.4,296.3 L 588.9,302 L 575,305.4 L 558.3,302 L 547.2,298.6 L 541.7,285.9 L 536.1,271.1 L 530.6,258.3 L 522.2,247.2 L 513.9,244.4 L 505.6,244.4 L 494.4,244.4 L 483.3,244.4 L 472.2,244.4 L 461.1,241.7 L 450,234.6 L 444.4,227.5 L 444.4,218.7 L 447.2,207 Z M 444.4,227.5 L 436.1,230.4 L 425,238.9 L 422.2,250 L 427.8,259.3 L 438.9,258.3 L 447.2,250 L 447.2,238.9 Z`,
//   MADAGASCAR: `M 616.7,262.6 L 622.2,262.6 L 633.3,265.4 L 641.7,268.2 L 641.7,282.8 L 633.3,291.7 L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,
//   INDIA: `M 663.9,196.3 L 677.8,189.3 L 688.9,189.3 L 700,192.9 L 711.1,200 L 719.4,199.7 L 730.6,209.5 L 736.1,218.7 L 747.2,221.6 L 750,228.9 L 744.4,236 L 733.3,241.7 L 722.2,244.4 L 713.9,241.7 L 705.6,230.4 L 694.4,221.6 L 688.9,224.6 L 683.3,221.6 L 672.2,218.7 L 663.9,209.5 Z`,
//   CHINA: `M 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 736.1,181.8 L 750,175.9 L 763.9,171.7 L 777.8,168.5 L 791.7,165.2 L 805.6,162.9 L 819.4,162.9 L 833.3,162.9 L 850,169.6 L 861.1,181.8 L 858.3,192.9 L 852.8,196.3 L 847.2,192.9 L 833.3,192.9 L 819.4,196.3 L 808.3,209.5 L 800,221.6 L 791.7,221.6 L 780.6,218.7 L 769.4,215.6 L 755.6,221.6 L 747.2,221.6 L 736.1,218.7 L 730.6,209.5 L 719.4,199.7 L 711.1,200 L 700,192.9 Z`,
//   SE_ASIA: `M 777.8,218.7 L 791.7,221.6 L 800,218.7 L 808.3,209.5 L 819.4,209.5 L 833.3,209.5 L 844.4,218.7 L 838.9,228.9 L 827.8,234.6 L 816.7,234.6 L 808.3,241.7 L 800,250 L 808.3,258.3 L 816.7,258.3 L 822.2,252.8 L 833.3,252.8 L 833.3,263.9 L 816.7,263.9 L 808.3,258.3 L 797.2,255.6 L 786.1,250 L 780.6,244.4 L 772.2,238.9 L 769.4,228.9 L 769.4,221.6 Z`,
//   JAPAN: `M 855.6,192.9 L 861.1,185.6 L 872.2,181.8 L 883.3,181.8 L 886.1,185.6 L 880.6,192.9 L 872.2,196.3 L 861.1,199.7 Z M 877.8,199.7 L 883.3,192.9 L 894.4,189.3 L 900,192.9 L 897.2,203 L 886.1,206.3 L 877.8,203 Z`,
//   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9 L 855.6,203 L 847.2,206.3 L 836.1,203 Z`,
//   AUSTRALIA: `M 808.3,278.4 L 819.4,272.5 L 833.3,268.2 L 850,265.4 L 866.7,263.9 L 880.6,265.4 L 894.4,269.6 L 908.3,272.5 L 916.7,281.3 L 925,290.5 L 925,303.7 L 916.7,311.1 L 905.6,311.1 L 894.4,311.1 L 883.3,307.7 L 869.4,303.7 L 855.6,307.7 L 841.7,311.1 L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z M 916.7,281.3 L 930.6,275.4 L 941.7,281.3 L 938.9,293.7 L 925,296.3 Z`,
//   NEW_ZEALAND: `M 966.7,318.2 L 977.8,311.1 L 988.9,315.4 L 988.9,326 L 977.8,329 L 966.7,322.1 Z M 972.2,329 L 983.3,318.2 L 994.4,322.1 L 994.4,337 L 983.3,341 L 972.2,334 Z`,
//   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,
//   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// };
// const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// function WorldMap({
//   points, activePoint, onHover,
// }: {
//   points: PresenceItem[];
//   activePoint: number | null;
//   onHover: (i: number) => void;
// }) {
//   const dots = points.map((p) => { const [cx, cy] = merc(p.lon, p.lat); return { ...p, cx, cy }; });
//   const yEq = merc(0, 0)[1];
//   const yCanc = merc(0, 23.5)[1];
//   const yCap = merc(0, -23.5)[1];

//   return (
//     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
//       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "auto", display: "block" }}>
//         <rect width="1000" height="500" fill="#dff0f3" rx="8" />
//         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8" />
//         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
//         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
//         {Object.entries(LAND).map(([k, d]) => (
//           <path key={k} d={d} fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"} stroke="#7ab8c0" strokeWidth="0.7" strokeLinejoin="round" strokeLinecap="round" />
//         ))}
//         {(() => {
//           const m = dots.filter((p) => p.main);
//           return m.length >= 2 ? (
//             <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55" />
//           ) : null;
//         })()}
//         {dots.map((p, i) => (
//           <g key={p.id} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
//             {p.main && (
//               <>
//                 <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
//                   <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite" />
//                   <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1" />
//               </>
//             )}
//             <circle
//               cx={p.cx} cy={p.cy}
//               r={activePoint === i ? 9 : 6}
//               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
//               stroke="#fff" strokeWidth="2.5"
//               style={{ transition: "r .2s, fill .2s" }}
//             />
//           </g>
//         ))}
//       </svg>

//       {activePoint !== null && (() => {
//         const d = dots[activePoint];
//         const px = (d.cx / 1000) * 100;
//         const py = (d.cy / 500) * 100;
//         return (
//           <div style={{
//             position: "absolute", left: `${px}%`, top: `${py}%`,
//             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
//             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
//             padding: "12px 16px", minWidth: 222,
//             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
//           }}>
//             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
//             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
//           </div>
//         );
//       })()}
//     </div>
//   );
// }

// export default function PresenceSection({ presence }: { presence: PresenceItem[] }) {
//   const [activePoint, setActivePoint] = useState<number | null>(null);

//   if (!presence.length) return null;

//   return (
//     <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
//       {/* Map */}
//       <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
//         <WorldMap
//           points={presence}
//           activePoint={activePoint}
//           onHover={(i) => setActivePoint(activePoint === i ? null : i)}
//         />
//       </div>

//       {/* Sidebar buttons */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//         {presence.map((p, i) => (
//           <button
//             key={p.id}
//             onClick={() => setActivePoint(activePoint === i ? null : i)}
//             style={{
//               background: activePoint === i ? "#095b66" : "#fff",
//               border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
//               borderRadius: 12, padding: "16px 20px",
//               display: "flex", gap: 14, alignItems: "flex-start",
//               cursor: "pointer", transition: "all .25s", textAlign: "left",
//             }}
//           >
//             <div style={{
//               width: 36, height: 36, borderRadius: 8,
//               background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontSize: 18, flexShrink: 0,
//             }}>
//               {p.flag || "🌍"}
//             </div>
//             <div>
//               <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>
//                 {p.name}
//               </div>
//               <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>
//                 {p.detail}
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




// "use client";
// import React, { useState } from "react";

// /* ─────────────────────────────────────────────
//    STATIC DATA
// ───────────────────────────────────────────── */
// const PRESENCE = [
//   { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  flag: "🇦🇴", detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
//   { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  flag: "🇵🇹", detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
//   { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, flag: "🇨🇻", detail: "Presença comercial activa" },
//   { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, flag: "🇸🇹", detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
// ];

// /* ── Web Mercator projection ── */
// function merc(lon: number, lat: number): [number, number] {
//   const x = (lon + 180) / 360 * 1000;
//   const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
//   return [+x.toFixed(1), +y.toFixed(1)];
// }

// const LAND: Record<string, string> = {
//   NORTH_AMERICA: `M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8 L 183.3,88.6 L 200,88.6 L 222.2,93.8 L 244.4,88.6 L 261.1,88.6 L 277.8,88.6 L 291.7,93.8 L 305.6,98.7 L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2 L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9 L 291.7,198 L 286.1,210 L 277.8,214.1 L 263.9,218.7 L 250,221.6 L 230.6,214.1 L 208.3,214.1 L 194.4,217.2 L 175,202.2 L 161.1,194.6 L 155.6,189.3 L 158.3,177.9 L 155.6,171.7 L 138.9,160.5 L 125,150.6 L 108.3,145.2 Z`,
//   ALASKA: `M 0,148 L 16.7,139.5 L 27.8,130.1 L 33.3,119.7 L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5 L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6 L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7 L 11.1,152 Z`,
//   GREENLAND: `M 355.6,83.1 L 375,56.1 L 400,27.6 L 427.8,22.8 L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9 L 433.3,130.1 L 416.7,145.2 L 400,139.5 L 383.3,130.1 L 372.2,111.9 Z`,
//   C_AMERICA: `M 230.6,214.1 L 244.4,210 L 255.6,214.1 L 263.9,224.6 L 272.2,236 L 277.8,250 L 263.9,247.2 L 255.6,241.7 L 247.2,233.2 L 238.9,224.6 Z`,
//   SOUTH_AMERICA: `M 277.8,250 L 288.9,247.2 L 300,247.2 L 316.7,243 L 333.3,241.7 L 347.2,241.7 L 361.1,247.2 L 375,252.8 L 388.9,257 L 402.8,257 L 405.6,262.6 L 397.2,271.1 L 388.9,279.8 L 377.8,285.9 L 366.7,290.5 L 355.6,300.3 L 344.4,307.1 L 330.6,316.3 L 319.4,330.4 L 316.7,344.3 L 311.1,344.3 L 305.6,336.5 L 297.2,323.7 L 291.7,310.7 L 291.7,297 L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,
//   EUROPE: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 494.4,174.8 L 495.8,182.8 L 508.3,183 L 516.7,182.4 L 525,180.8 L 536.1,179.9 L 541.7,181.8 L 550,181.8 L 558.3,179.9 L 566.7,179.9 L 575,181.8 L 583.3,181.8 L 591.7,169.6 L 588.9,165.2 L 575,159.4 L 561.1,158.1 L 547.2,158.1 L 536.1,159.4 L 527.8,151.9 L 513.9,150.6 L 508.3,158.1 L 502.8,165.2 L 497.2,168.5 L 491.7,173.8 L 486.1,173.8 L 477.8,181.8 Z M 583.3,181.8 L 591.7,181.8 L 600,185.6 L 602.8,192.9 L 597.2,198 L 586.1,196.3 L 577.8,196.3 L 575,190.5 Z`,
//   IBERIA: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 491.7,173.8 L 495.8,182.8 L 508.3,183 L 509.4,186 L 502.8,188.1 L 500.6,192.9 L 497.2,195 L 486.1,197 L 481.9,195.2 L 475.6,195 L 473.9,192.5 Z`,
//   UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1 L 502.8,162.9 L 497.2,167.4 L 488.9,169.6 L 480.6,167.4 Z M 469.4,158.1 L 477.8,152 L 483.3,155.7 L 480.6,165.2 L 472.2,165.2 Z`,
//   ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7 L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,
//   SCANDINAVIA: `M 513.9,150.6 L 527.8,151.9 L 536.1,158.1 L 543.1,155.7 L 547.2,152 L 552.8,149.3 L 558.3,147.9 L 566.7,146.6 L 572.2,142.4 L 577.8,128.5 L 580.6,117.8 L 575,109.8 L 566.7,107.7 L 555.6,107.7 L 550,115.9 L 544.4,117.8 L 538.9,128.5 L 525,133.3 L 519.4,133.3 L 513.9,139.5 Z`,
//   RUSSIA: `M 544.4,117.8 L 558.3,107.7 L 583.3,98.7 L 611.1,93.8 L 638.9,93.8 L 666.7,93.8 L 694.4,86.1 L 722.2,83.1 L 750,83.1 L 777.8,86.1 L 805.6,93.8 L 833.3,98.7 L 861.1,98.7 L 888.9,111.9 L 916.7,119.7 L 944.4,119.7 L 966.7,107.7 L 980.6,98.7 L 1000,98.7 L 1000,145.2 L 972.2,158.1 L 944.4,158.1 L 916.7,145.2 L 900,165.2 L 888.9,169.6 L 875,177.9 L 861.1,185.6 L 847.2,185.6 L 833.3,185.6 L 819.4,177.9 L 805.6,175.9 L 791.7,175.9 L 777.8,175.9 L 763.9,171.7 L 750,169.6 L 736.1,165.2 L 722.2,165.2 L 708.3,158.1 L 694.4,158.1 L 680.6,165.2 L 666.7,158.1 L 652.8,152 L 638.9,145.2 L 625,145.2 L 611.1,139.5 L 597.2,139.5 L 588.9,133.3 L 577.8,119.7 L 566.7,117.8 Z`,
//   C_ASIA: `M 538.9,181.8 L 555.6,179.9 L 566.7,179.9 L 575,181.8 L 586.1,177.9 L 600,185.6 L 616.7,185.6 L 630.6,181.8 L 644.4,181.8 L 658.3,185.6 L 666.7,185.6 L 680.6,181.8 L 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 722.2,196.3 L 713.9,203 L 700,206.3 L 686.1,206.3 L 672.2,203 L 655.6,206.3 L 638.9,206.3 L 622.2,206.3 L 611.1,200 L 600,192.9 L 591.7,181.8 L 577.8,181.8 L 566.7,185.6 L 552.8,185.6 L 541.7,185.6 Z`,
//   MIDDLE_EAST: `M 563.9,192.9 L 577.8,181.8 L 586.1,181.8 L 600,185.6 L 611.1,185.6 L 622.2,185.6 L 636.1,192.9 L 650,203 L 658.3,212.6 L 663.9,218.7 L 655.6,228.9 L 644.4,234.6 L 627.8,238.9 L 616.7,238.9 L 608.3,232.2 L 597.2,224.6 L 591.7,215.6 L 577.8,212.6 L 566.7,206.3 L 558.3,196.3 Z`,
//   AFRICA: `M 447.2,194.6 L 461.1,190.6 L 475,190.6 L 488.9,192.9 L 502.8,194.6 L 516.7,194.6 L 530.6,194.6 L 544.4,194.6 L 558.3,196.3 L 572.2,203 L 583.3,209.5 L 594.4,209.5 L 608.3,215.6 L 616.7,224.6 L 622.2,234.6 L 625,241.7 L 619.4,250 L 613.9,258.3 L 611.1,265.4 L 605.6,274 L 600,285.9 L 594.4,296.3 L 588.9,302 L 575,305.4 L 558.3,302 L 547.2,298.6 L 541.7,285.9 L 536.1,271.1 L 530.6,258.3 L 522.2,247.2 L 513.9,244.4 L 505.6,244.4 L 494.4,244.4 L 483.3,244.4 L 472.2,244.4 L 461.1,241.7 L 450,234.6 L 444.4,227.5 L 444.4,218.7 L 447.2,207 Z M 444.4,227.5 L 436.1,230.4 L 425,238.9 L 422.2,250 L 427.8,259.3 L 438.9,258.3 L 447.2,250 L 447.2,238.9 Z`,
//   MADAGASCAR: `M 616.7,262.6 L 622.2,262.6 L 633.3,265.4 L 641.7,268.2 L 641.7,282.8 L 633.3,291.7 L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,
//   INDIA: `M 663.9,196.3 L 677.8,189.3 L 688.9,189.3 L 700,192.9 L 711.1,200 L 719.4,199.7 L 730.6,209.5 L 736.1,218.7 L 747.2,221.6 L 750,228.9 L 744.4,236 L 733.3,241.7 L 722.2,244.4 L 713.9,241.7 L 705.6,230.4 L 694.4,221.6 L 688.9,224.6 L 683.3,221.6 L 672.2,218.7 L 663.9,209.5 Z`,
//   CHINA: `M 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 736.1,181.8 L 750,175.9 L 763.9,171.7 L 777.8,168.5 L 791.7,165.2 L 805.6,162.9 L 819.4,162.9 L 833.3,162.9 L 850,169.6 L 861.1,181.8 L 858.3,192.9 L 852.8,196.3 L 847.2,192.9 L 833.3,192.9 L 819.4,196.3 L 808.3,209.5 L 800,221.6 L 791.7,221.6 L 780.6,218.7 L 769.4,215.6 L 755.6,221.6 L 747.2,221.6 L 736.1,218.7 L 730.6,209.5 L 719.4,199.7 L 711.1,200 L 700,192.9 Z`,
//   SE_ASIA: `M 777.8,218.7 L 791.7,221.6 L 800,218.7 L 808.3,209.5 L 819.4,209.5 L 833.3,209.5 L 844.4,218.7 L 838.9,228.9 L 827.8,234.6 L 816.7,234.6 L 808.3,241.7 L 800,250 L 808.3,258.3 L 816.7,258.3 L 822.2,252.8 L 833.3,252.8 L 833.3,263.9 L 816.7,263.9 L 808.3,258.3 L 797.2,255.6 L 786.1,250 L 780.6,244.4 L 772.2,238.9 L 769.4,228.9 L 769.4,221.6 Z`,
//   JAPAN: `M 855.6,192.9 L 861.1,185.6 L 872.2,181.8 L 883.3,181.8 L 886.1,185.6 L 880.6,192.9 L 872.2,196.3 L 861.1,199.7 Z M 877.8,199.7 L 883.3,192.9 L 894.4,189.3 L 900,192.9 L 897.2,203 L 886.1,206.3 L 877.8,203 Z`,
//   KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9 L 855.6,203 L 847.2,206.3 L 836.1,203 Z`,
//   AUSTRALIA: `M 808.3,278.4 L 819.4,272.5 L 833.3,268.2 L 850,265.4 L 866.7,263.9 L 880.6,265.4 L 894.4,269.6 L 908.3,272.5 L 916.7,281.3 L 925,290.5 L 925,303.7 L 916.7,311.1 L 905.6,311.1 L 894.4,311.1 L 883.3,307.7 L 869.4,303.7 L 855.6,307.7 L 841.7,311.1 L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z M 916.7,281.3 L 930.6,275.4 L 941.7,281.3 L 938.9,293.7 L 925,296.3 Z`,
//   NEW_ZEALAND: `M 966.7,318.2 L 977.8,311.1 L 988.9,315.4 L 988.9,326 L 977.8,329 L 966.7,322.1 Z M 972.2,329 L 983.3,318.2 L 994.4,322.1 L 994.4,337 L 983.3,341 L 972.2,334 Z`,
//   CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,
//   SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
// };
// const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

// function WorldMap({ activePoint, onHover }: { activePoint: number | null; onHover: (i: number) => void; }) {
//   const dots = PRESENCE.map((p) => { const [cx, cy] = merc(p.lon, p.lat); return { ...p, cx, cy }; });
//   const yEq = merc(0, 0)[1];
//   const yCanc = merc(0, 23.5)[1];
//   const yCap = merc(0, -23.5)[1];

//   return (
//     <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
//       <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "auto", display: "block" }}>
//         <rect width="1000" height="500" fill="#dff0f3" rx="8" />
//         <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8" />
//         <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
//         <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
//         {Object.entries(LAND).map(([k, d]) => (
//           <path key={k} d={d} fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"} stroke="#7ab8c0" strokeWidth="0.7" strokeLinejoin="round" strokeLinecap="round" />
//         ))}
//         {(() => {
//           const m = dots.filter((p) => p.main);
//           return m.length >= 2
//             ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55" />
//             : null;
//         })()}
//         {dots.map((p, i) => (
//           <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
//             {p.main && (
//               <>
//                 <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
//                   <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite" />
//                   <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
//                 </circle>
//                 <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1" />
//               </>
//             )}
//             <circle cx={p.cx} cy={p.cy} r={activePoint === i ? 9 : 6}
//               fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
//               stroke="#fff" strokeWidth="2.5"
//               style={{ transition: "r .2s, fill .2s" }}
//             />
//           </g>
//         ))}
//       </svg>

//       {activePoint !== null && (() => {
//         const d = dots[activePoint];
//         const px = (d.cx / 1000) * 100;
//         const py = (d.cy / 500) * 100;
//         return (
//           <div style={{
//             position: "absolute", left: `${px}%`, top: `${py}%`,
//             transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
//             background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
//             padding: "12px 16px", minWidth: 222,
//             boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
//           }}>
//             <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
//             <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
//           </div>
//         );
//       })()}
//     </div>
//   );
// }

// export default function PresenceSection() {
//   const [activePoint, setActivePoint] = useState<number | null>(null);

//   return (
//     <div className="two" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "center" }}>
//       {/* Map */}
//       <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
//         <WorldMap
//           activePoint={activePoint}
//           onHover={(i) => setActivePoint(activePoint === i ? null : i)}
//         />
//       </div>

//       {/* Sidebar */}
//       <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
//         {PRESENCE.map((p, i) => (
//           <button key={i} onClick={() => setActivePoint(activePoint === i ? null : i)}
//             style={{
//               background: activePoint === i ? "#095b66" : "#fff",
//               border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
//               borderRadius: 12, padding: "16px 20px",
//               display: "flex", gap: 14, alignItems: "flex-start",
//               cursor: "pointer", transition: "all .25s", textAlign: "left",
//             }}
//           >
//             <div style={{
//               width: 36, height: 36, borderRadius: 8,
//               background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa",
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontSize: 18, flexShrink: 0,
//             }}>
//               {p.flag}
//             </div>
//             <div>
//               <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>
//                 {p.name}
//               </div>
//               <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>
//                 {p.detail}
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";
import React, { useState } from "react";

const PRESENCE = [
  { name: "Angola · Luanda",     lon: 13.23,  lat: -8.84, main: true,  flag: "🇦🇴", detail: "Centro de Logística de Talatona · espaço H\n(+244) 933 153 362" },
  { name: "Portugal · Lisboa",   lon: -9.14,  lat: 38.72, main: true,  flag: "🇵🇹", detail: "Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
  { name: "Cabo Verde · Praia",  lon: -23.51, lat: 14.93, main: false, flag: "🇨🇻", detail: "Presença comercial activa" },
  { name: "São Tomé e Príncipe", lon:  6.61,  lat:  0.33, main: false, flag: "🇸🇹", detail: "Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
];

function merc(lon: number, lat: number): [number, number] {
  const x = (lon + 180) / 360 * 1000;
  const y = 250 - (250 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
  return [+x.toFixed(1), +y.toFixed(1)];
}

const LAND: Record<string, string> = {
  NORTH_AMERICA: `M 111.1,145.2 L 138.9,119.7 L 155.6,111.9 L 166.7,93.8 L 183.3,88.6 L 200,88.6 L 222.2,93.8 L 244.4,88.6 L 261.1,88.6 L 277.8,88.6 L 291.7,93.8 L 305.6,98.7 L 316.7,88.6 L 319.4,107.7 L 316.7,119.7 L 322.2,145.2 L 316.7,162.9 L 311.1,158.1 L 305.6,186.5 L 300,192.9 L 291.7,198 L 286.1,210 L 277.8,214.1 L 263.9,218.7 L 250,221.6 L 230.6,214.1 L 208.3,214.1 L 194.4,217.2 L 175,202.2 L 161.1,194.6 L 155.6,189.3 L 158.3,177.9 L 155.6,171.7 L 138.9,160.5 L 125,150.6 L 108.3,145.2 Z`,
  ALASKA: `M 0,148 L 16.7,139.5 L 27.8,130.1 L 33.3,119.7 L 50,119.7 L 66.7,130.1 L 77.8,139.5 L 88.9,139.5 L 100,139.5 L 108.3,145.2 L 100,150.6 L 88.9,150.6 L 77.8,155.7 L 61.1,158.1 L 44.4,158.1 L 27.8,155.7 L 11.1,152 Z`,
  GREENLAND: `M 355.6,83.1 L 375,56.1 L 400,27.6 L 427.8,22.8 L 452.8,27.6 L 466.7,56.1 L 461.1,83.1 L 450,111.9 L 433.3,130.1 L 416.7,145.2 L 400,139.5 L 383.3,130.1 L 372.2,111.9 Z`,
  C_AMERICA: `M 230.6,214.1 L 244.4,210 L 255.6,214.1 L 263.9,224.6 L 272.2,236 L 277.8,250 L 263.9,247.2 L 255.6,241.7 L 247.2,233.2 L 238.9,224.6 Z`,
  SOUTH_AMERICA: `M 277.8,250 L 288.9,247.2 L 300,247.2 L 316.7,243 L 333.3,241.7 L 347.2,241.7 L 361.1,247.2 L 375,252.8 L 388.9,257 L 402.8,257 L 405.6,262.6 L 397.2,271.1 L 388.9,279.8 L 377.8,285.9 L 366.7,290.5 L 355.6,300.3 L 344.4,307.1 L 330.6,316.3 L 319.4,330.4 L 316.7,344.3 L 311.1,344.3 L 305.6,336.5 L 297.2,323.7 L 291.7,310.7 L 291.7,297 L 288.9,284.4 L 280.6,271.1 L 275,257 Z`,
  EUROPE: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 494.4,174.8 L 495.8,182.8 L 508.3,183 L 516.7,182.4 L 525,180.8 L 536.1,179.9 L 541.7,181.8 L 550,181.8 L 558.3,179.9 L 566.7,179.9 L 575,181.8 L 583.3,181.8 L 591.7,169.6 L 588.9,165.2 L 575,159.4 L 561.1,158.1 L 547.2,158.1 L 536.1,159.4 L 527.8,151.9 L 513.9,150.6 L 508.3,158.1 L 502.8,165.2 L 497.2,168.5 L 491.7,173.8 L 486.1,173.8 L 477.8,181.8 Z M 583.3,181.8 L 591.7,181.8 L 600,185.6 L 602.8,192.9 L 597.2,198 L 586.1,196.3 L 577.8,196.3 L 575,190.5 Z`,
  IBERIA: `M 472.2,196.3 L 477.8,181.8 L 486.1,173.8 L 491.7,173.8 L 495.8,182.8 L 508.3,183 L 509.4,186 L 502.8,188.1 L 500.6,192.9 L 497.2,195 L 486.1,197 L 481.9,195.2 L 475.6,195 L 473.9,192.5 Z`,
  UK: `M 477.8,162.9 L 486.1,158.1 L 497.2,158.1 L 502.8,162.9 L 497.2,167.4 L 488.9,169.6 L 480.6,167.4 Z M 469.4,158.1 L 477.8,152 L 483.3,155.7 L 480.6,165.2 L 472.2,165.2 Z`,
  ICELAND: `M 427.8,126.8 L 438.9,120.6 L 455.6,119.7 L 461.1,124.1 L 452.8,130.1 L 438.9,133.3 Z`,
  SCANDINAVIA: `M 513.9,150.6 L 527.8,151.9 L 536.1,158.1 L 543.1,155.7 L 547.2,152 L 552.8,149.3 L 558.3,147.9 L 566.7,146.6 L 572.2,142.4 L 577.8,128.5 L 580.6,117.8 L 575,109.8 L 566.7,107.7 L 555.6,107.7 L 550,115.9 L 544.4,117.8 L 538.9,128.5 L 525,133.3 L 519.4,133.3 L 513.9,139.5 Z`,
  RUSSIA: `M 544.4,117.8 L 558.3,107.7 L 583.3,98.7 L 611.1,93.8 L 638.9,93.8 L 666.7,93.8 L 694.4,86.1 L 722.2,83.1 L 750,83.1 L 777.8,86.1 L 805.6,93.8 L 833.3,98.7 L 861.1,98.7 L 888.9,111.9 L 916.7,119.7 L 944.4,119.7 L 966.7,107.7 L 980.6,98.7 L 1000,98.7 L 1000,145.2 L 972.2,158.1 L 944.4,158.1 L 916.7,145.2 L 900,165.2 L 888.9,169.6 L 875,177.9 L 861.1,185.6 L 847.2,185.6 L 833.3,185.6 L 819.4,177.9 L 805.6,175.9 L 791.7,175.9 L 777.8,175.9 L 763.9,171.7 L 750,169.6 L 736.1,165.2 L 722.2,165.2 L 708.3,158.1 L 694.4,158.1 L 680.6,165.2 L 666.7,158.1 L 652.8,152 L 638.9,145.2 L 625,145.2 L 611.1,139.5 L 597.2,139.5 L 588.9,133.3 L 577.8,119.7 L 566.7,117.8 Z`,
  C_ASIA: `M 538.9,181.8 L 555.6,179.9 L 566.7,179.9 L 575,181.8 L 586.1,177.9 L 600,185.6 L 616.7,185.6 L 630.6,181.8 L 644.4,181.8 L 658.3,185.6 L 666.7,185.6 L 680.6,181.8 L 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 722.2,196.3 L 713.9,203 L 700,206.3 L 686.1,206.3 L 672.2,203 L 655.6,206.3 L 638.9,206.3 L 622.2,206.3 L 611.1,200 L 600,192.9 L 591.7,181.8 L 577.8,181.8 L 566.7,185.6 L 552.8,185.6 L 541.7,185.6 Z`,
  MIDDLE_EAST: `M 563.9,192.9 L 577.8,181.8 L 586.1,181.8 L 600,185.6 L 611.1,185.6 L 622.2,185.6 L 636.1,192.9 L 650,203 L 658.3,212.6 L 663.9,218.7 L 655.6,228.9 L 644.4,234.6 L 627.8,238.9 L 616.7,238.9 L 608.3,232.2 L 597.2,224.6 L 591.7,215.6 L 577.8,212.6 L 566.7,206.3 L 558.3,196.3 Z`,
  AFRICA: `M 447.2,194.6 L 461.1,190.6 L 475,190.6 L 488.9,192.9 L 502.8,194.6 L 516.7,194.6 L 530.6,194.6 L 544.4,194.6 L 558.3,196.3 L 572.2,203 L 583.3,209.5 L 594.4,209.5 L 608.3,215.6 L 616.7,224.6 L 622.2,234.6 L 625,241.7 L 619.4,250 L 613.9,258.3 L 611.1,265.4 L 605.6,274 L 600,285.9 L 594.4,296.3 L 588.9,302 L 575,305.4 L 558.3,302 L 547.2,298.6 L 541.7,285.9 L 536.1,271.1 L 530.6,258.3 L 522.2,247.2 L 513.9,244.4 L 505.6,244.4 L 494.4,244.4 L 483.3,244.4 L 472.2,244.4 L 461.1,241.7 L 450,234.6 L 444.4,227.5 L 444.4,218.7 L 447.2,207 Z M 444.4,227.5 L 436.1,230.4 L 425,238.9 L 422.2,250 L 427.8,259.3 L 438.9,258.3 L 447.2,250 L 447.2,238.9 Z`,
  MADAGASCAR: `M 616.7,262.6 L 622.2,262.6 L 633.3,265.4 L 641.7,268.2 L 641.7,282.8 L 633.3,291.7 L 622.2,291.7 L 613.9,282.8 L 611.1,271.1 Z`,
  INDIA: `M 663.9,196.3 L 677.8,189.3 L 688.9,189.3 L 700,192.9 L 711.1,200 L 719.4,199.7 L 730.6,209.5 L 736.1,218.7 L 747.2,221.6 L 750,228.9 L 744.4,236 L 733.3,241.7 L 722.2,244.4 L 713.9,241.7 L 705.6,230.4 L 694.4,221.6 L 688.9,224.6 L 683.3,221.6 L 672.2,218.7 L 663.9,209.5 Z`,
  CHINA: `M 694.4,175.9 L 708.3,172.2 L 716.7,175.9 L 722.2,185.6 L 736.1,181.8 L 750,175.9 L 763.9,171.7 L 777.8,168.5 L 791.7,165.2 L 805.6,162.9 L 819.4,162.9 L 833.3,162.9 L 850,169.6 L 861.1,181.8 L 858.3,192.9 L 852.8,196.3 L 847.2,192.9 L 833.3,192.9 L 819.4,196.3 L 808.3,209.5 L 800,221.6 L 791.7,221.6 L 780.6,218.7 L 769.4,215.6 L 755.6,221.6 L 747.2,221.6 L 736.1,218.7 L 730.6,209.5 L 719.4,199.7 L 711.1,200 L 700,192.9 Z`,
  SE_ASIA: `M 777.8,218.7 L 791.7,221.6 L 800,218.7 L 808.3,209.5 L 819.4,209.5 L 833.3,209.5 L 844.4,218.7 L 838.9,228.9 L 827.8,234.6 L 816.7,234.6 L 808.3,241.7 L 800,250 L 808.3,258.3 L 816.7,258.3 L 822.2,252.8 L 833.3,252.8 L 833.3,263.9 L 816.7,263.9 L 808.3,258.3 L 797.2,255.6 L 786.1,250 L 780.6,244.4 L 772.2,238.9 L 769.4,228.9 L 769.4,221.6 Z`,
  JAPAN: `M 855.6,192.9 L 861.1,185.6 L 872.2,181.8 L 883.3,181.8 L 886.1,185.6 L 880.6,192.9 L 872.2,196.3 L 861.1,199.7 Z M 877.8,199.7 L 883.3,192.9 L 894.4,189.3 L 900,192.9 L 897.2,203 L 886.1,206.3 L 877.8,203 Z`,
  KOREA: `M 836.1,192.9 L 847.2,189.3 L 855.6,192.9 L 855.6,203 L 847.2,206.3 L 836.1,203 Z`,
  AUSTRALIA: `M 808.3,278.4 L 819.4,272.5 L 833.3,268.2 L 850,265.4 L 866.7,263.9 L 880.6,265.4 L 894.4,269.6 L 908.3,272.5 L 916.7,281.3 L 925,290.5 L 925,303.7 L 916.7,311.1 L 905.6,311.1 L 894.4,311.1 L 883.3,307.7 L 869.4,303.7 L 855.6,307.7 L 841.7,311.1 L 827.8,307.7 L 816.7,300.3 L 808.3,290.5 Z M 916.7,281.3 L 930.6,275.4 L 941.7,281.3 L 938.9,293.7 L 925,296.3 Z`,
  NEW_ZEALAND: `M 966.7,318.2 L 977.8,311.1 L 988.9,315.4 L 988.9,326 L 977.8,329 L 966.7,322.1 Z M 972.2,329 L 983.3,318.2 L 994.4,322.1 L 994.4,337 L 983.3,341 L 972.2,334 Z`,
  CAPE_VERDE: `M 424,236 L 432,229 L 442,232 L 439,241 L 428,244 Z`,
  SAO_TOME: `M 516,252 L 523,245 L 530,248 L 528,257 L 519,260 Z`,
};
const ACCENT = new Set(["AFRICA", "IBERIA", "CAPE_VERDE", "SAO_TOME"]);

function WorldMap({ activePoint, onHover }: { activePoint: number | null; onHover: (i: number) => void }) {
  const dots = PRESENCE.map((p) => { const [cx, cy] = merc(p.lon, p.lat); return { ...p, cx, cy }; });
  const yEq   = merc(0, 0)[1];
  const yCanc = merc(0, 23.5)[1];
  const yCap  = merc(0, -23.5)[1];

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
      <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "auto", display: "block" }}>
        <rect width="1000" height="500" fill="#dff0f3" rx="8" />
        <line x1="0" y1={yEq}   x2="1000" y2={yEq}   stroke="#b8dfe8" strokeWidth="0.8" strokeDasharray="6 8" />
        <line x1="0" y1={yCanc} x2="1000" y2={yCanc} stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
        <line x1="0" y1={yCap}  x2="1000" y2={yCap}  stroke="#c8e8ee" strokeWidth="0.5" strokeDasharray="3 10" />
        {Object.entries(LAND).map(([k, d]) => (
          <path key={k} d={d} fill={ACCENT.has(k) ? "#8ecdd6" : "#b2d8e0"} stroke="#7ab8c0" strokeWidth="0.7" strokeLinejoin="round" strokeLinecap="round" />
        ))}
        {(() => {
          const m = dots.filter(p => p.main);
          return m.length >= 2
            ? <line x1={m[0].cx} y1={m[0].cy} x2={m[1].cx} y2={m[1].cy} stroke="#095b66" strokeWidth="1.3" strokeDasharray="5 5" opacity="0.55" />
            : null;
        })()}
        {dots.map((p, i) => (
          <g key={i} style={{ cursor: "pointer" }} onClick={() => onHover(i)}>
            {p.main && (
              <>
                <circle cx={p.cx} cy={p.cy} r="6" fill="#095b66" opacity="0.15">
                  <animate attributeName="r" values="6;20;6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={p.cx} cy={p.cy} r="10" fill="#095b66" opacity="0.1" />
              </>
            )}
            <circle cx={p.cx} cy={p.cy} r={activePoint === i ? 9 : 6}
              fill={activePoint === i ? "#095b66" : (p.main ? "#0a7a89" : "#5cb8c0")}
              stroke="#fff" strokeWidth="2.5"
              style={{ transition: "r .2s, fill .2s" }}
            />
          </g>
        ))}
      </svg>

      {activePoint !== null && (() => {
        const d = dots[activePoint];
        const px = (d.cx / 1000) * 100;
        const py = (d.cy / 500) * 100;
        return (
          <div style={{
            position: "absolute", left: `${px}%`, top: `${py}%`,
            transform: `translate(${px > 62 ? "-108%" : "14px"}, ${py > 58 ? "-118%" : "14px"})`,
            background: "#fff", border: "1.5px solid #b8dde2", borderRadius: 10,
            padding: "12px 16px", minWidth: 222,
            boxShadow: "0 10px 36px rgba(9,91,102,.2)", zIndex: 10, pointerEvents: "none",
          }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: "#095b66", marginBottom: 5 }}>{d.name}</div>
            <div style={{ fontSize: 11.5, color: "#4a7275", lineHeight: 1.65, whiteSpace: "pre-line" }}>{d.detail}</div>
          </div>
        );
      })()}
    </div>
  );
}

export default function PresenceSection() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div
      className="presence-grid"
      style={{
        display: "grid",
        /*
          ── Proporção ajustada ──
          Antes:  "1fr 340px"  → mapa largo, sidebar estreita
          Agora:  "3fr 5fr"    → mapa mais estreito, sidebar mais larga
          Pode ajustar os valores (ex: "2fr 5fr", "1fr 2fr") conforme necessário.
        */
        gridTemplateColumns: "5fr 5fr",
        gap: 48,
        alignItems: "center",
      }}
    >
      {/* Mapa — coluna mais estreita */}
      <div style={{ background: "#f0f9fa", borderRadius: 20, padding: "8px", border: "1.5px solid #c8e8eb" }}>
        <WorldMap
          activePoint={activePoint}
          onHover={(i) => setActivePoint(activePoint === i ? null : i)}
        />
      </div>

      {/* Sidebar — coluna mais larga */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {PRESENCE.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePoint(activePoint === i ? null : i)}
            style={{
              background: activePoint === i ? "#095b66" : "#fff",
              border: `1.5px solid ${activePoint === i ? "#095b66" : "#dde8ea"}`,
              borderRadius: 12,
              padding: "16px 20px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              cursor: "pointer",
              transition: "all .25s",
              textAlign: "left",
            }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: activePoint === i ? "rgba(255,255,255,.15)" : "#f0f9fa",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, flexShrink: 0,
            }}>
              {p.flag}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: activePoint === i ? "#fff" : "#0a1c1e", marginBottom: 3 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 11, color: activePoint === i ? "rgba(255,255,255,.65)" : "#6a9598", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                {p.detail}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}