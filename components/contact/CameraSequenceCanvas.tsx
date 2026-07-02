"use client";

import React, { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 240;
const FRAME_PATH = "/camara1/ezgif-frame-";
const FRAME_PADDING = 3;

function padFrameNumber(num: number): string {
  return String(num).padStart(FRAME_PADDING, "0");
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const clamped = Math.max(inMin, Math.min(inMax, value));
  return lerp(outMin, outMax, (clamped - inMin) / (inMax - inMin));
}

function getFrameFromProgress(progress: number): number {
  if (progress < 0.15) {
    return 0;
  }
  if (progress < 0.65) {
    return Math.round(mapRange(progress, 0.15, 0.65, 0, TOTAL_FRAMES - 1));
  }
  if (progress < 0.85) {
    return TOTAL_FRAMES - 1;
  }
  return Math.round(mapRange(progress, 0.85, 1, TOTAL_FRAMES - 1, 0));
}

interface CameraSequenceCanvasProps {
  progress?: number;
}

export function CameraSequenceCanvas({ progress = 0 }: CameraSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const animFrameRef = useRef<number>(0);
  const progressRef = useRef(progress);
  const renderLoopRef = useRef<() => void>(() => {});

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];

    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const canvasW = canvas.clientWidth;
    const canvasH = canvas.clientHeight;

    if (canvas.width !== canvasW * dpr || canvas.height !== canvasH * dpr) {
      canvas.width = canvasW * dpr;
      canvas.height = canvasH * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvasW, canvasH);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;

    let drawW: number, drawH: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    } else {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }, []);

  useEffect(() => {
    renderLoopRef.current = () => {
      const targetFrame = getFrameFromProgress(progressRef.current);
      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        drawFrame(targetFrame);
      }
      animFrameRef.current = requestAnimationFrame(renderLoopRef.current);
    };
  }, [drawFrame]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${FRAME_PATH}${padFrameNumber(i)}.jpg`;
      img.loading = "eager";
      images.push(img);
    }

    imagesRef.current = images;

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === 1) {
        drawFrame(0);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onLoad();
      } else {
        img.onload = onLoad;
        img.onerror = onLoad;
      }
    });

    animFrameRef.current = requestAnimationFrame(renderLoopRef.current);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawFrame]);

  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{ background: "#050505" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
