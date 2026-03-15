"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** ms before the first character is typed */
  initialDelay?: number;
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while erasing */
  eraseSpeed?: number;
  /** ms pause after fully typed before erasing */
  pauseAfterType?: number;
  /** ms pause after fully erased before re-typing */
  pauseAfterErase?: number;
}

export default function TypewriterText({
  text,
  className,
  style,
  initialDelay = 900,
  typeSpeed = 75,
  eraseSpeed = 40,
  pauseAfterType = 1800,
  pauseAfterErase = 500,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let idx = 0;
    let erasing = false;
    let started = false;

    function tick() {
      if (!erasing) {
        setDisplayed(text.slice(0, idx));
        if (idx < text.length) {
          idx++;
          timeout = setTimeout(tick, typeSpeed);
        } else {
          // fully typed — pause then erase
          timeout = setTimeout(() => {
            erasing = true;
            tick();
          }, pauseAfterType);
        }
      } else {
        setDisplayed(text.slice(0, idx));
        if (idx > 0) {
          idx--;
          timeout = setTimeout(tick, eraseSpeed);
        } else {
          // fully erased — pause then retype
          timeout = setTimeout(() => {
            erasing = false;
            tick();
          }, pauseAfterErase);
        }
      }
    }

    // Honour initial delay only on first run
    timeout = setTimeout(() => {
      started = true;
      tick();
    }, initialDelay);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <>
      {/* gradient text — cursor must be a sibling so it isn't clipped */}
      <span className={className} style={style}>
        {displayed}
      </span>
      <span
        aria-hidden
        style={{ color: "#ffffff", opacity: cursorOn ? 1 : 0, userSelect: "none" }}
      >
        |
      </span>
    </>
  );
}
