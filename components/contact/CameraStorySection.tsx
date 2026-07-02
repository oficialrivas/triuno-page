"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CameraSequenceCanvas } from "./CameraSequenceCanvas";
import { ScrollStoryOverlays } from "./ScrollStoryOverlays";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CameraStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh]"
      data-camera-story
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <CameraSequenceCanvas progress={progress} />
        <ScrollStoryOverlays progress={progress} />
      </div>
    </section>
  );
}
