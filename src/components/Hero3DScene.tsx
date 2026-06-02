import { useEffect, useRef, useState } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  color: string;
}

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoverText, setHoverText] = useState("Cyber-mesh Live");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    // 3D coordinates system centered on the canvas
    const cx = width / 2;
    const cy = height / 2;
    const fov = Math.max(width, height) * 0.7; // focal length

    let angleX = 0.005; // initial rotation speed around X axis
    let angleY = 0.007; // initial rotation speed around Y axis
    let currentAngleX = 0;
    let currentAngleY = 0;

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Set up a collection of 3D objects
    // 1. Constellation nodes
    const nodes: Node3D[] = [];
    const nodeCount = 45;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 350,
        y: (Math.random() - 0.5) * 350,
        z: (Math.random() - 0.5) * 350,
        color: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#06b6d4" : "#22c55e",
      });
    }

    // 2. Translucent floating glass cuboids
    interface Cube3D {
      centerX: number;
      centerY: number;
      centerZ: number;
      size: number;
      vertices: { x: number; y: number; z: number }[];
      color: string;
      accentColor: string;
    }

    const cubes: Cube3D[] = [
      // Full Stack Cube (Cyber-blue)
      {
        centerX: -110,
        centerY: -40,
        centerZ: 50,
        size: 55,
        color: "rgba(6, 182, 212, 0.15)",
        accentColor: "rgba(6, 182, 212, 0.95)",
        vertices: [],
      },
      // Security Cube (Purple)
      {
        centerX: 120,
        centerY: 60,
        centerZ: -80,
        size: 50,
        color: "rgba(168, 85, 247, 0.15)",
        accentColor: "rgba(168, 85, 247, 0.95)",
        vertices: [],
      },
      // Marketing Cube (Green Glow)
      {
        centerX: 30,
        centerY: -100,
        centerZ: -30,
        size: 40,
        color: "rgba(34, 197, 94, 0.15)",
        accentColor: "rgba(34, 197, 94, 0.95)",
        vertices: [],
      },
    ];

    // Define standard vertices for a unit cube (size = 1) centered at 0
    const unitVertices = [
      { x: -0.5, y: -0.5, z: -0.5 },
      { x: 0.5, y: -0.5, z: -0.5 },
      { x: 0.5, y: 0.5, z: -0.5 },
      { x: -0.5, y: 0.5, z: -0.5 },
      { x: -0.5, y: -0.5, z: 0.5 },
      { x: 0.5, y: -0.5, z: 0.5 },
      { x: 0.5, y: 0.5, z: 0.5 },
      { x: -0.5, y: 0.5, z: 0.5 },
    ];

    // Define edges of a cube
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7], // Connector edges
    ];

    // Helper to rotate vectors
    const rotate3D = (x: number, y: number, z: number, ax: number, ay: number) => {
      // Rotation around X-axis
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotation around Y-axis
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      return { x: x2, y: y1, z: z2 };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse-influenced easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust rotation speed depending on mouse position
      currentAngleY += angleY + mouse.x * 0.0001;
      currentAngleX += angleX + mouse.y * 0.0001;

      // Draw background grid lines (tech grid)
      ctx.strokeStyle = "rgba(147, 51, 234, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw mathematical projection nodes
      const projectedNodes = nodes.map((node) => {
        const rotated = rotate3D(node.x, node.y, node.z, currentAngleX, currentAngleY);
        const zDepth = rotated.z + 400; // translate Z to avoid division by zero
        const scale = fov / zDepth;
        const screenX = cx + rotated.x * scale;
        const screenY = cy + rotated.y * scale;

        return {
          sx: screenX,
          sy: screenY,
          depth: zDepth,
          color: node.color,
          scale: scale,
        };
      });

      // Draw connections first
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.sx - n2.sx;
          const dy = n1.sy - n2.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect cluster segments
          if (dist < 85 && Math.abs(n1.depth - n2.depth) < 120) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - dist / 85)})`;
            ctx.beginPath();
            ctx.moveTo(n1.sx, n1.sy);
            ctx.lineTo(n2.sx, n2.sy);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach((p) => {
        if (p.sx < 0 || p.sx > width || p.sy < 0 || p.sy > height) return;
        const radius = Math.max(0.5, p.scale * 1.5);
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw Glass Cubes
      cubes.forEach((cube) => {
        // Find rotated cube center coordinates
        const rotCenter = rotate3D(cube.centerX, cube.centerY, cube.centerZ, currentAngleX * 0.7, currentAngleY * 0.7);
        const czDepth = rotCenter.z + 400;

        // Draw rotated vertices
        const rotatedVertices = unitVertices.map((v) => {
          // Scale unit vertex size and offset centered
          const vx = v.x * cube.size + rotCenter.x;
          const vy = v.y * cube.size + rotCenter.y;
          const vz = v.z * cube.size + rotCenter.z;

          const r = rotate3D(vx, vy, vz, currentAngleX * 0.4, currentAngleY * 0.4);
          const depth = r.z + 400;
          const scale = fov / depth;

          return {
            x: cx + r.x * scale,
            y: cy + r.y * scale,
          };
        });

        // Fill faces dynamically
        // Draw bottom, top, left, right faces
        ctx.fillStyle = cube.color;
        ctx.beginPath();
        ctx.moveTo(rotatedVertices[0].x, rotatedVertices[0].y);
        for (let k = 1; k < 4; k++) ctx.lineTo(rotatedVertices[k].x, rotatedVertices[k].y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(rotatedVertices[4].x, rotatedVertices[4].y);
        for (let k = 5; k < 8; k++) ctx.lineTo(rotatedVertices[k].x, rotatedVertices[k].y);
        ctx.closePath();
        ctx.fill();

        // Draw structural wireframe outlines
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = cube.accentColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = cube.accentColor;

        cubeEdges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(rotatedVertices[i].x, rotatedVertices[i].y);
          ctx.lineTo(rotatedVertices[j].x, rotatedVertices[j].y);
          ctx.stroke();
        });
        
        ctx.shadowBlur = 0; // reset glow
      });

      animId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - cx;
      const y = e.clientY - rect.top - cy;
      mouse.targetX = x;
      mouse.targetY = y;
      
      // Dynamic subtitle text
      const statusOptions = [
        "Resolving Full-Stack Pipelines...",
        "Tracing Sandbox Vectors...",
        "Compiling Glassmorphic Nodes...",
        "SamiUbaidi Dev Hub Active",
      ];
      setHoverText(statusOptions[Math.floor((e.clientX % 4))]);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = containerRef.current?.clientWidth || 600;
      height = canvas.height = containerRef.current?.clientHeight || 450;
    };

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) observer.observe(containerRef.current);

    canvas.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-3d-scene-container"
      className="relative w-full h-full min-h-[380px] lg:min-h-[480px] flex items-center justify-center p-2 rounded-2xl overflow-hidden glass-morph border border-cyan-500/10 shadow-2xl bg-black/40 group feedback-3d"
    >
      {/* Absolute positioning overlays */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 border border-purple-500/20 text-[10px] font-mono tracking-wider text-purple-400 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {hoverText}
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-400/40 text-right uppercase tracking-[0.2em]">
        Interactive 3D Grid<br />Drag / Move Cursor To Rotate
      </div>

      <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair max-w-full" />
    </div>
  );
}
