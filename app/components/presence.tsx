"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback } from "react";

declare global {
  interface Window { THREE: any } // eslint-disable-line @typescript-eslint/no-explicit-any
}

/* ── Types ─────────────────────────────────────────────────── */
interface Country {
  id: string; name: string; flag: string; capital: string;
  lat: number; lon: number; role: string; detail: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

/* ── Presence data ─────────────────────────────────────────── */
const PRESENCE: Country[] = [
  { id:"AO", name:"Angola",              flag:"🇦🇴", capital:"Luanda",   lat:-8.84,  lon: 13.23, role:"Sede Principal",    detail:"Centro de Logística de Talatona · espaço H\n(+244) 933 153 362 · (+244) 938 306 698" },
  { id:"PT", name:"Portugal",            flag:"🇵🇹", capital:"Lisboa",   lat: 38.72, lon: -9.14, role:"Escritório Europa",  detail:"Av. Almirante Gago Coutinho, Armazém 17\n(+351) 935 962 909" },
  { id:"CV", name:"Cabo Verde",          flag:"🇨🇻", capital:"Praia",    lat: 14.93, lon:-23.51, role:"Presença Comercial", detail:"Presença comercial activa\nno mercado cabo-verdiano" },
  { id:"ST", name:"São Tomé e Príncipe", flag:"🇸🇹", capital:"São Tomé", lat:  0.33, lon:  6.61, role:"Escritório Local",   detail:"Edifício Equador, 2 1ºA, Vila Maria\n(+239) 9 30 443" },
];

/* ── Continent polygons [lon, lat] ─────────────────────────── */
const CONTINENTS: [number,number][][] = [
  [[-5.4,35.9],[0,37.2],[7,37],[10.5,36.9],[12,37.3],[14,37.1],[15,36.8],[20,36.8],[25,34],[30,31.5],[32,31],[34,30],[34.5,27.5],[36,24],[38,22],[40,20],[42,16],[43,14],[44,11],[46,8],[50,12],[51.4,11.5],[50,10],[48,8],[44,4],[42,2],[41,-1],[40,-3],[40,-8],[40,-11],[36,-17],[35,-20],[35,-23],[32,-26],[29,-30],[27,-33],[20,-35],[18.4,-34.4],[17,-32.5],[16,-29],[15,-25],[14,-22],[13,-18],[13,-13],[12,-6],[10,-1],[8,3],[5,5],[2,5],[0,5],[-3,4],[-5,5],[-8,4.5],[-11,6],[-15,10],[-17.5,14.7],[-17,21],[-17,27],[-14,32],[-10,34],[-7,35.5],[-5.4,35.9]],
  [[-9.3,43.4],[3.3,43.4],[7.5,43.7],[9,44.5],[8,47.5],[10,48],[12,48],[14,48],[15,49],[17,48],[18,48],[19,48],[20,48.5],[22,48],[24,47.5],[25,46],[27,46],[29,46],[30,46.5],[31,48],[33,50],[32,52],[30.5,54],[25,54.5],[21,55],[18.5,55],[14,54.5],[10.5,54.8],[9.5,55.5],[10,57.5],[5,58],[4.5,57],[3,51.5],[2,50.5],[-1.5,49.5],[-2,47.5],[-5,48.5],[-4.8,47.5],[-2.5,47],[-1.5,43.5],[-9.3,43.4]],
  [[5,58],[5.5,58.3],[5,62],[6.5,62.5],[7,64],[14,65.5],[16,68.5],[18,69],[20,70],[24,70.9],[27,70.5],[28.5,69.8],[29,68.5],[28,65.5],[26,64],[26,61],[28,60],[31,61],[30,59.5],[25.5,59],[24,59.5],[22,59.5],[20,59],[18,58.5],[16,57],[15.5,56],[12.5,56],[10.5,57.5],[5,58]],
  [[-141,60],[-135,58],[-130,54],[-124,49],[-123,46],[-124,40],[-122,37],[-117,32.5],[-110,28],[-104,22],[-97,22],[-90,20],[-85,22],[-82,24],[-80,25],[-80,26],[-81,30],[-75,32],[-75,35],[-72,41],[-70,41.5],[-66,44],[-61,46],[-61,48],[-64,50],[-66,53],[-64,60],[-68,62],[-72,65],[-80,65],[-86,68],[-96,72],[-108,73],[-117,74],[-120,72],[-130,68],[-138,61],[-141,60]],
  [[-73,11],[-68,12],[-64,10],[-61,8],[-60,6],[-51,4],[-50,2],[-48,0],[-44,-3],[-36,-3],[-35,-5],[-35,-9],[-37,-13],[-39,-18],[-40,-21],[-43,-23],[-48,-26],[-50,-30],[-52,-33],[-54,-35],[-57,-38],[-63,-42],[-65,-45],[-66,-50],[-68,-54],[-68,-56],[-65,-55],[-64,-53],[-67,-47],[-66,-43],[-63,-40],[-60,-37],[-57,-35],[-57,-30],[-57,-25],[-57,-20],[-59,-16],[-60,-12],[-62,-8],[-64,-4],[-68,-2],[-72,-1],[-77,-2],[-80,-3],[-81,1],[-80,4],[-77,8],[-75,10],[-73,11]],
  [[26,68],[35,72],[45,75],[55,75],[65,73],[75,73],[90,75],[105,76],[115,74],[120,72],[135,70],[140,70],[145,68],[150,62],[145,55],[140,50],[135,48],[130,42],[128,38],[120,40],[115,38],[105,40],[100,44],[90,50],[80,52],[75,55],[70,55],[65,52],[60,55],[55,57],[50,60],[45,60],[40,62],[35,62],[32,64],[26,68]],
  [[35,62],[45,60],[55,57],[60,55],[65,52],[70,55],[75,55],[80,52],[90,50],[100,44],[105,40],[115,38],[128,38],[130,34],[125,32],[120,28],[115,28],[110,22],[110,18],[105,20],[100,22],[98,24],[95,26],[92,28],[90,26],[88,22],[84,22],[82,28],[78,34],[75,32],[72,34],[68,36],[68,40],[65,40],[62,38],[60,36],[58,34],[56,30],[54,32],[50,36],[46,38],[44,36],[40,36],[38,38],[36,42],[38,44],[40,46],[44,44],[48,44],[52,44],[56,42],[60,42],[62,44],[60,48],[58,50],[60,55],[65,52],[70,55],[75,55]],
  [[68,36],[72,34],[75,32],[78,34],[82,28],[84,22],[88,22],[90,26],[92,22],[90,18],[88,14],[84,10],[80,8],[78,8],[77,10],[76,14],[74,18],[72,22],[70,22],[68,20],[66,22],[62,24],[60,28],[60,36],[62,38],[65,40],[68,40],[68,36]],
  [[100,22],[105,20],[110,18],[110,22],[115,28],[120,28],[122,24],[124,22],[122,18],[118,16],[116,12],[110,10],[104,8],[102,4],[104,2],[106,0],[108,-4],[110,-8],[112,-8],[114,-4],[116,-2],[118,0],[120,2],[120,-4],[116,-8],[114,-8],[112,-6],[108,-6],[106,-4],[104,-2],[102,2],[100,4],[98,8],[96,16],[98,20],[100,22]],
  [[114,-22],[116,-20],[118,-18],[120,-18],[122,-18],[124,-18],[126,-16],[128,-14],[130,-12],[132,-12],[134,-12],[136,-14],[138,-16],[140,-18],[142,-18],[144,-18],[146,-18],[148,-20],[150,-22],[152,-24],[152,-26],[152,-28],[150,-30],[148,-32],[146,-34],[144,-36],[142,-38],[140,-38],[138,-36],[136,-34],[134,-34],[132,-34],[130,-34],[128,-34],[126,-34],[124,-32],[122,-30],[120,-28],[118,-26],[116,-24],[114,-22]],
  [[-50,76],[-42,78],[-32,82],[-22,84],[-18,78],[-16,72],[-20,66],[-24,62],[-30,60],[-36,62],[-42,64],[-46,68],[-50,72],[-52,76],[-50,76]],
  [[36,32],[38,34],[40,36],[44,36],[46,38],[50,36],[54,32],[56,30],[58,26],[58,22],[56,20],[54,18],[52,16],[50,14],[46,14],[44,14],[42,14],[40,16],[38,18],[36,22],[34,28],[36,32]],
];

/* ── Helpers ───────────────────────────────────────────────── */
function ll2xyz(lat: number, lon: number, r = 1): [number,number,number] {
  const phi   = (90 - lat)  * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -(r * Math.sin(phi) * Math.cos(theta)),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
  ];
}

// How far to ease to bring a point to front face of globe
function rotForLL(lat: number, lon: number) {
  return {
    x: Math.max(-0.52, Math.min(0.52, (lat * Math.PI) / 180 * 0.52)),
    y: -(lon * Math.PI) / 180,
  };
}

function buildGlobeCanvas(): HTMLCanvasElement {
  const W = 2048, H = 1024;
  const cv = document.createElement("canvas");
  cv.width = W; cv.height = H;
  const ctx = cv.getContext("2d");
  if (!ctx) return cv;

  ctx.fillStyle = "#04111c";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(18,70,100,0.45)";
  ctx.lineWidth = 0.7;
  for (let lat = -75; lat <= 75; lat += 15) {
    const y = (90 - lat) / 180 * H;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  for (let lon = -180; lon <= 180; lon += 15) {
    const x = (lon + 180) / 360 * W;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }

  const px = (lon: number, lat: number): [number,number] => [
    (lon + 180) / 360 * W,
    (90 - lat)  / 180 * H,
  ];
  CONTINENTS.forEach(poly => {
    ctx.beginPath();
    poly.forEach(([lon, lat], i) => {
      const [x, y] = px(lon, lat);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle   = "rgba(10,40,56,0.94)";
    ctx.fill();
    ctx.strokeStyle = "rgba(0,180,210,0.72)";
    ctx.lineWidth   = 1.5;
    ctx.stroke();
  });
  return cv;
}

/* ══════════════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════════════ */
export default function GlobePresence() {
  const mountRef   = useRef<HTMLDivElement>(null);
  const frameRef   = useRef<number>(0);
  const globeRef   = useRef<Any>(null);
  const rendRef    = useRef<Any>(null);
  const cameraRef  = useRef<Any>(null);
  // hit spheres for raycasting
  const hitMeshes  = useRef<{ mesh: Any; id: string }[]>([]);
  // active pulse ring (only 1 at a time)
  const pulseRef   = useRef<{ mesh: Any; mat: Any } | null>(null);
  // marker groups by id for quick lookup
  const markerGrps = useRef<{ grp: Any; id: string }[]>([]);

  const activeRef  = useRef<string | null>(null);

  // Rotation — inertia only, no auto-spin
  const curRot   = useRef({ x: 0.15, y: 0.4 });
  const tgtRot   = useRef({ x: 0.15, y: 0.4 });
  const vel      = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const wasDrag  = useRef(false);
  const prevPt   = useRef({ x: 0, y: 0 });

  // Tooltip: screen-% position derived from projecting 3D point
  const [active,     setActive]     = useState<string | null>(null);
  const [tipPos,     setTipPos]     = useState({ x: 50, y: 50 });
  const [loaded,     setLoaded]     = useState(false);

  /* Project a lat/lon on the globe to canvas-relative % coords */
  const project = useCallback((lat: number, lon: number) => {
    const T      = window.THREE;
    const cam    = cameraRef.current;
    const globe  = globeRef.current;
    const el     = mountRef.current;
    if (!T || !cam || !globe || !el) return { x: 50, y: 50 };

    const [lx, ly, lz] = ll2xyz(lat, lon, 1.0);
    const world = new T.Vector3(lx, ly, lz).applyMatrix4(globe.matrixWorld);
    const ndc   = world.clone().project(cam);
    return {
      x: ((ndc.x + 1) / 2) * 100,
      y: ((-ndc.y + 1) / 2) * 100,
    };
  }, []);

  /* Activate a country: rotate globe so it faces front, show tooltip */
  const focusCountry = useCallback((country: Country) => {
    vel.current    = { x: 0, y: 0 };
    tgtRot.current = rotForLL(country.lat, country.lon);
    const next     = activeRef.current === country.id ? null : country.id;
    activeRef.current = next;
    setActive(next);
    if (next) {
      // Delay tooltip position until rotation has mostly settled (~700ms)
      setTimeout(() => {
        setTipPos(project(country.lat, country.lon));
      }, 680);
    }
  }, [project]);

  /* Add/remove pulse ring when active country changes */
  const syncPulse = useCallback((newActive: string | null) => {
    const T = window.THREE;
    if (!T) return;

    // Remove old ring
    if (pulseRef.current) {
      pulseRef.current.mesh.parent?.remove(pulseRef.current.mesh);
      pulseRef.current = null;
    }
    if (!newActive) return;

    const entry = markerGrps.current.find(m => m.id === newActive);
    if (!entry) return;

    const pMat  = new T.MeshBasicMaterial({ color: 0x00e8ff, transparent: true, opacity: 0.75, side: T.DoubleSide, depthWrite: false });
    const pMesh = new T.Mesh(new T.RingGeometry(0.07, 0.09, 48), pMat);
    entry.grp.add(pMesh);
    pulseRef.current = { mesh: pMesh, mat: pMat };
  }, []);

  /* Build scene */
  const buildScene = useCallback(() => {
    const T  = window.THREE;
    const el = mountRef.current;
    if (!el || !T) return;

    const W = el.clientWidth  || 680;
    const H = el.clientHeight || 500;

    const renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    rendRef.current = renderer;

    const scene  = new T.Scene();
    const camera = new T.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.z = 2.65;
    cameraRef.current = camera;

    /* Stars */
    const sv: number[] = [];
    for (let i = 0; i < 2800; i++) {
      const r = 40 + Math.random() * 14;
      const p = Math.random() * Math.PI * 2, t2 = Math.random() * Math.PI;
      sv.push(r * Math.sin(t2) * Math.cos(p), r * Math.cos(t2), r * Math.sin(t2) * Math.sin(p));
    }
    const sg = new T.BufferGeometry();
    sg.setAttribute("position", new T.Float32BufferAttribute(sv, 3));
    scene.add(new T.Points(sg, new T.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.38 })));

    /* Globe with canvas texture */
    const texture = new T.CanvasTexture(buildGlobeCanvas());
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const globe = new T.Mesh(
      new T.SphereGeometry(1, 80, 80),
      new T.MeshPhongMaterial({ map: texture, specular: new T.Color(0x0a2535), shininess: 12 })
    );
    scene.add(globe);
    globeRef.current = globe;

    /* Markers — STATIC dots, no pulsing unless active */
    PRESENCE.forEach(country => {
      const [x, y, z] = ll2xyz(country.lat, country.lon, 1.003);
      const grp = new T.Group();
      grp.position.set(x, y, z);
      grp.lookAt(new T.Vector3(x * 3, y * 3, z * 3));

      // Outer static ring
      grp.add(new T.Mesh(
        new T.RingGeometry(0.052, 0.068, 48),
        new T.MeshBasicMaterial({ color: 0x00c8dc, transparent: true, opacity: 0.55, side: T.DoubleSide, depthWrite: false })
      ));
      // Inner white dot
      const dot = new T.Mesh(
        new T.CircleGeometry(0.02, 24),
        new T.MeshBasicMaterial({ color: 0xffffff, side: T.DoubleSide })
      );
      dot.position.z = 0.001;
      grp.add(dot);

      // Invisible hit sphere (generous size for easy clicking)
      const hitSphere = new T.Mesh(
        new T.SphereGeometry(0.1, 8, 8),
        new T.MeshBasicMaterial({ visible: false })
      );
      grp.add(hitSphere);
      hitMeshes.current.push({ mesh: hitSphere, id: country.id });

      globe.add(grp);
      markerGrps.current.push({ grp, id: country.id });
    });

    /* Atmosphere */
    scene.add(new T.Mesh(
      new T.SphereGeometry(1.18, 64, 64),
      new T.MeshPhongMaterial({ color: 0x00b8cc, transparent: true, opacity: 0.045, side: T.BackSide, depthWrite: false })
    ));

    /* Lights */
    scene.add(new T.AmbientLight(0x102030, 1.8));
    const sun = new T.DirectionalLight(0x88ddee, 1.9); sun.position.set(4, 2, 3); scene.add(sun);
    scene.add(Object.assign(new T.DirectionalLight(0x003050, 0.45), { position: new T.Vector3(-3, -1, -2) }));

    /* Raycaster */
    const raycaster = new T.Raycaster();
    const mouse     = new T.Vector2();

    const getNDC = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x =  ((clientX - rect.left) / rect.width)  * 2 - 1;
      mouse.y = -((clientY - rect.top)  / rect.height) * 2 + 1;
    };

    const handleClick = (clientX: number, clientY: number) => {
      if (wasDrag.current) return;
      getNDC(clientX, clientY);
      raycaster.setFromCamera(mouse, camera);
      const targets = hitMeshes.current.map(h => h.mesh);
      const hits    = raycaster.intersectObjects(targets, true);
      if (hits.length > 0) {
        const entry = hitMeshes.current.find(h => h.mesh === hits[0].object);
        if (entry) {
          const c = PRESENCE.find(p => p.id === entry.id)!;
          focusCountry(c);
        }
      } else {
        activeRef.current = null;
        setActive(null);
      }
    };

    /* Mouse events */
    const cvs = renderer.domElement as HTMLCanvasElement;
    const onDown = (x: number, y: number) => {
      dragging.current = true; wasDrag.current = false;
      prevPt.current = { x, y }; vel.current = { x: 0, y: 0 };
    };
    const onMove = (x: number, y: number) => {
      if (!dragging.current) return;
      const dx = x - prevPt.current.x, dy = y - prevPt.current.y;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) wasDrag.current = true;
      vel.current = { x: dy * 0.005, y: dx * 0.005 };
      tgtRot.current.y += dx * 0.005;
      tgtRot.current.x  = Math.max(-0.52, Math.min(0.52, tgtRot.current.x + dy * 0.005));
      prevPt.current = { x, y };
    };
    const onUp = (x: number, y: number) => {
      dragging.current = false;
      handleClick(x, y);
    };

    cvs.addEventListener("mousedown",  (e: MouseEvent) => onDown(e.clientX, e.clientY));
    cvs.addEventListener("mousemove",  (e: MouseEvent) => onMove(e.clientX, e.clientY));
    cvs.addEventListener("mouseup",    (e: MouseEvent) => onUp(e.clientX, e.clientY));
    cvs.addEventListener("mouseleave", () => { dragging.current = false; });
    cvs.addEventListener("touchstart", (e: TouchEvent) => onDown(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    cvs.addEventListener("touchmove",  (e: TouchEvent) => onMove(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    cvs.addEventListener("touchend",   (e: TouchEvent) => {
      dragging.current = false;
      handleClick(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    });

    /* Resize */
    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth, h = mountRef.current.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* Render loop — inertia only, no auto-rotate */
    let t = 0;
    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);
      t += 0.016;

      if (!dragging.current) {
        tgtRot.current.y += vel.current.y;
        tgtRot.current.x  = Math.max(-0.52, Math.min(0.52, tgtRot.current.x + vel.current.x));
        vel.current.x *= 0.88; vel.current.y *= 0.88;
      }
      const sp = dragging.current ? 0.28 : 0.06;
      curRot.current.x += (tgtRot.current.x - curRot.current.x) * sp;
      curRot.current.y += (tgtRot.current.y - curRot.current.y) * sp;
      globe.rotation.x = curRot.current.x;
      globe.rotation.y = curRot.current.y;

      // Pulse only active marker ring
      if (pulseRef.current) {
        const phase = ((t * 0.85) % 2.2) / 2.2;
        pulseRef.current.mesh.scale.setScalar(1 + phase * 1.8);
        pulseRef.current.mat.opacity = (1 - phase) * 0.65;
      }

      // Keep tooltip position synced while rotating
      if (activeRef.current) {
        const c = PRESENCE.find(p => p.id === activeRef.current);
        if (c) setTipPos(project(c.lat, c.lon));
      }

      renderer.render(scene, camera);
    };
    tick();
  }, [focusCountry, project]);

  /* Sync pulse ring whenever active changes */
  useEffect(() => {
    if (typeof window === "undefined" || !window.THREE) return;
    syncPulse(active);
  }, [active, syncPulse]);

  /* Load Three.js */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const run = () => {
      buildScene();
      requestAnimationFrame(() => setLoaded(true));
    };
    if (window.THREE) { run(); return; }
    const s = document.createElement("script");
    s.src    = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = run;
    document.head.appendChild(s);
    return () => {
      cancelAnimationFrame(frameRef.current);
      (rendRef.current as Any)?.dispose();
    };
  }, [buildScene]);

  const activeCountry = PRESENCE.find(p => p.id === active) ?? null;

  // Tooltip flip logic: if near right edge, show left; if near bottom, show above
  const flipX = tipPos.x > 62;
  const flipY = tipPos.y > 68;

  /* ══════════════════════════════════════════════════════════
     JSX
  ══════════════════════════════════════════════════════════ */
  return (
    <div style={{ width:"100%", background:"#ffffff", borderRadius:20, overflow:"hidden", fontFamily:"'Montserrat',sans-serif", boxShadow:"0 2px 20px rgba(0,0,0,.07)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        .gp-wrap  { display:flex; align-items:stretch; min-height:520px; }
        .gp-globe { flex:1; position:relative; min-height:520px; cursor:grab;
                    background:radial-gradient(ellipse 90% 90% at 44% 50%, #021624 0%, #010d16 60%, #000508 100%);
                    border-radius:20px 0 0 20px; overflow:hidden; }
        .gp-globe:active { cursor:grabbing; }
        .gp-side  { width:272px; flex-shrink:0; padding:26px 20px; background:#fff; border-left:1px solid #edf1f2; display:flex; flex-direction:column; }
        .ctab { display:flex; align-items:center; gap:9px; width:100%; padding:10px 12px; border-radius:9px; background:transparent; border:1px solid #eaeff0; cursor:pointer; transition:all .16s; font-family:inherit; text-align:left; }
        .ctab:hover { background:#f2fafb; border-color:#b5e2e8; }
        .ctab.on   { background:#e8f7fa; border-color:#0abcd4; box-shadow:0 0 0 3px rgba(0,188,212,.1); }
        .ctab-name { font-size:12px; font-weight:700; color:#0a2228; font-family:inherit; }
        .ctab-role { font-size:9px; color:#5a9aa4; font-weight:600; letter-spacing:.07em; text-transform:uppercase; margin-top:1px; font-family:inherit; }
        .ctab.on .ctab-name { color:#095b66; }
        .stat-box  { background:#f3fafb; border:1px solid #dceef1; border-radius:8px; padding:11px 8px; text-align:center; }
        .tip-card  { background:rgba(3,10,20,.93); backdrop-filter:blur(20px);
                     border:1px solid rgba(0,200,220,.3); border-radius:12px;
                     padding:16px 17px; width:230px;
                     box-shadow:0 10px 36px rgba(0,0,0,.6), 0 0 0 1px rgba(0,200,220,.07); }
        @keyframes tipIn { from{opacity:0;transform:scale(.94) translateY(4px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes spin   { to{transform:rotate(360deg)} }
        @media(max-width:700px){
          .gp-wrap { flex-direction:column; }
          .gp-globe { border-radius:20px 20px 0 0; min-height:380px; }
          .gp-side  { width:100%; border-left:none; border-top:1px solid #edf1f2; border-radius:0 0 20px 20px; }
        }
      `}</style>

      <div className="gp-wrap">

        {/* ─── GLOBE ─── */}
        <div className="gp-globe">
          <div ref={mountRef} style={{ width:"100%", height:"100%", minHeight:520 }}/>

          {/* Spinner */}
          {!loaded && (
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ width:40, height:40, border:"2px solid rgba(0,200,220,.12)", borderTop:"2px solid #00c8dc", borderRadius:"50%", animation:"spin .8s linear infinite" }}/>
            </div>
          )}

          {/* Title */}
          <div style={{ position:"absolute", top:22, left:24, pointerEvents:"none" }}>
            <p style={{ fontSize:9, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(0,210,230,.45)", marginBottom:4 }}>— Presença Internacional</p>
            <h2 style={{ fontSize:"clamp(16px,2vw,25px)", fontWeight:900, color:"#fff", lineHeight:1.05 }}>Onde Estamos</h2>
          </div>

          {/* Hint */}
          <div style={{ position:"absolute", bottom:16, left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:5, background:"rgba(0,0,0,.35)", border:"1px solid rgba(255,255,255,.06)", borderRadius:99, padding:"3px 12px", pointerEvents:"none" }}>
            <svg viewBox="0 0 20 20" fill="none" width="9" height="9"><circle cx="10" cy="10" r="7" stroke="rgba(255,255,255,.22)" strokeWidth="1.5"/><path d="M10 6v8M6 10h8" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span style={{ fontSize:7.5, color:"rgba(255,255,255,.22)", fontWeight:600, letterSpacing:".1em", textTransform:"uppercase" }}>Arraste · Clique nos pontos</span>
          </div>

          {/* ── HTML TOOLTIP on globe ── */}
          {activeCountry && (
            <div style={{
              position: "absolute",
              left: `${tipPos.x}%`,
              top:  `${tipPos.y}%`,
              transform: `translate(${flipX ? "calc(-100% - 16px)" : "16px"}, ${flipY ? "calc(-100% - 8px)" : "-50%"})`,
              zIndex: 20,
              pointerEvents: "auto",
              animation: "tipIn .22s cubic-bezier(.22,1,.36,1) both",
            }}>
              {/* Pointer dot */}
              <div style={{
                position: "absolute",
                [flipX ? "right" : "left"]: -5,
                top: "50%", transform: "translateY(-50%)",
                width: 10, height: 10, borderRadius: "50%",
                background: "#00e8ff",
                boxShadow: "0 0 0 3px rgba(0,232,255,.2), 0 0 12px rgba(0,232,255,.7)",
                pointerEvents: "none",
              }}/>

              <div className="tip-card">
                {/* Header */}
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:10 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                    <span style={{ fontSize:28, lineHeight:1, filter:"drop-shadow(0 0 7px rgba(0,200,220,.45))" }}>{activeCountry.flag}</span>
                    <div>
                      <div style={{ fontSize:14, fontWeight:900, color:"#fff", lineHeight:1.1, fontFamily:"Montserrat,sans-serif" }}>{activeCountry.name}</div>
                      <div style={{ fontSize:8, fontWeight:700, color:"#00cce0", letterSpacing:".12em", textTransform:"uppercase", marginTop:3 }}>{activeCountry.role}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => { activeRef.current = null; setActive(null); }}
                    style={{ background:"none", border:"none", color:"rgba(255,255,255,.28)", cursor:"pointer", fontSize:17, lineHeight:1, paddingLeft:6, flexShrink:0 }}
                  >×</button>
                </div>

                {/* Divider */}
                <div style={{ height:1, background:"linear-gradient(90deg,rgba(0,200,220,.22),transparent)", marginBottom:10 }}/>

                {/* Capital */}
                <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:9 }}>
                  <svg viewBox="0 0 16 16" fill="none" width="11" height="11">
                    <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#00c8dc" fillOpacity=".65"/>
                  </svg>
                  <span style={{ fontSize:11.5, color:"rgba(200,235,245,.8)", fontFamily:"Montserrat,sans-serif" }}>{activeCountry.capital}</span>
                </div>

                {/* Detail */}
                <div style={{ fontSize:10.5, color:"rgba(155,210,225,.58)", lineHeight:1.75, whiteSpace:"pre-line", fontFamily:"Montserrat,sans-serif", marginBottom:13 }}>
                  {activeCountry.detail}
                </div>

                {/* CTA */}
                <Link href="/#contacto" style={{
                  display:"flex", alignItems:"center", justifyContent:"center", gap:6,
                  background:"rgba(0,200,220,.12)", border:"1px solid rgba(0,200,220,.28)",
                  color:"#00e8ff", borderRadius:7, padding:"8px 0", width:"100%",
                  fontSize:9, fontWeight:700, letterSpacing:".09em", textTransform:"uppercase",
                  textDecoration:"none", fontFamily:"Montserrat,sans-serif",
                }}>
                  <svg viewBox="0 0 16 16" fill="none" width="9" height="9"><path d="M2 8h12M8 4l4 4-4 4" stroke="#00e8ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Falar connosco
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ─── SIDE PANEL ─── */}
        <div className="gp-side">

          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <div style={{ width:26, height:26, borderRadius:6, background:"#095b66", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg viewBox="0 0 24 24" fill="none" width="13" height="13"><path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#fff"/></svg>
            </div>
            <span style={{ fontWeight:900, fontSize:13, color:"#095b66" }}>
              Multi<span style={{ color:"#0a7a89" }}>energia</span>
            </span>
          </div>

          <p style={{ fontSize:11.5, fontWeight:700, color:"#0c1e22", marginBottom:3 }}>Presença Global</p>
          <p style={{ fontSize:10.5, color:"#6e8e94", lineHeight:1.65, marginBottom:18 }}>
            Clique num ponto do globo para ver os detalhes da localização.
          </p>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:7, marginBottom:18 }}>
            {([{v:"4",l:"Países"},{v:"25+",l:"Anos"},{v:"+50MW",l:"Solar"},{v:"+75",l:"Sistemas"}] as {v:string;l:string}[]).map(s=>(
              <div key={s.l} className="stat-box">
                <div style={{ fontSize:18, fontWeight:900, color:"#095b66", lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:8, color:"#7aadb3", marginTop:3, textTransform:"uppercase", letterSpacing:".08em" }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ height:1, background:"#edf1f2", marginBottom:14 }}/>

          <p style={{ fontSize:9, fontWeight:700, color:"#a0b8bc", letterSpacing:".1em", textTransform:"uppercase", marginBottom:10 }}>Localizações</p>

          {/* Country list */}
          <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
            {PRESENCE.map(c => (
              <button key={c.id} className={`ctab${active===c.id?" on":""}`} onClick={() => focusCountry(c)}>
                <span style={{ fontSize:20, lineHeight:1 }}>{c.flag}</span>
                <div style={{ flex:1 }}>
                  <div className="ctab-name">{c.name}</div>
                  <div className="ctab-role">{c.role}</div>
                </div>
                {active===c.id && (
                  <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                    <circle cx="6" cy="6" r="5.5" fill="#e8f7fa" stroke="#0abcd4" strokeWidth="1"/>
                    <path d="M3.5 6l1.8 1.8L8.5 4" stroke="#095b66" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}