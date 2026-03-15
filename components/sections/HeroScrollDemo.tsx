"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-white">
              Built for teams that move fast <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Scroll to explore
              </span>
            </h2>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&q=75"
          alt="A modern dashboard interface showcasing Oudtech's platform"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
