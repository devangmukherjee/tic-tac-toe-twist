import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="select-none min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center px-4 sm:px-8 md:px-0">
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient"></div>
      <div className="text-center">
        <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 py-8">
          Tic Tac Toe Twist
        </h1>
        <div className="relative z-20 bg-gradient-to-b from-neutral-300 to-neutral-500 rounded-lg max-w-md mx-auto p-4 sm:p-6">
          <p className="text-black font-bold text-sm sm:text-base text-center">
            Tic Tac Toe with a twist: after every third turn, the first X or O
            disappears. Plan your moves to outsmart your opponent!
          </p>
        </div>

        <div className="m-10 flex justify-center text-center">
          <Link href="/game">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-neutral-300 flex items-center"
            >
              <span>Start Game ➡</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}
