import generateNoiseMap from "@/lib/map-functions";
import scale from "@/lib/map-functions/scale";
import { useEffect, useRef } from "react";

const color = (v: number) => {
  if (v < 0.1) return "rgb(13, 2, 107)";
  if (v < 0.2) return "rgb(39, 24, 171)";
  if (v < 0.25) return "rgb(69, 133, 237)";
  if (v < 0.3) return "rgba(245, 243, 196)";
  if (v < 0.35) return "rgb(107, 88, 58)";
  if (v < 0.4) return "rgb(66, 53, 31)";
  if (v < 0.5) return "rgb(38, 66, 31)";
  if (v < 0.6) return "rgb(147, 204, 116)";
  if (v < 0.7) return "rgb(88, 133, 77)";
  if (v < 0.8) return "rgb(36, 28, 7)";
  if (v < 0.9) return "rgb(43, 32, 5)";
  if (v < 0.98) return "rgb(163, 163, 162)";
  return `rgb(255, 255, 255)`;
};

const paintMap = (
  ctx: CanvasRenderingContext2D,
  size: number,
  freq: number
) => {
  const { map } = generateNoiseMap(size, freq, 200, 1, 6, 0.5, 2);
  const scaleFn = scale([-1, 1], [0, 1]);
  const scaledMap = map.map((vx) => vx.map((vy) => scaleFn(vy)));
  scaledMap.forEach((yArr, xIx) => {
    yArr.forEach((v, yIx) => {
      ctx.fillStyle = color(v);
      ctx.fillRect(xIx, yIx, 1, 1);
    });
  });
};

export default function NoiseMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    paintMap(ctx, 512, 1);
  }, [canvasRef]);

  return (
    <main className="w-9/12 h-screen">
      <canvas ref={canvasRef} className="w-full	h-full"/>
    </main>
  );
}
