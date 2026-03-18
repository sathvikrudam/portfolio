import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    document.addEventListener("mousemove", move);

    const targets = document.querySelectorAll("a, button");
    targets.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach(el => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* MAIN CURSOR */}
      <div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-150 ${
          hover ? "scale-125" : "scale-100"
        }`}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`
        }}
      >
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-2 bg-terminal-green/20 blur-md rounded-sm" />

          {/* Cursor Block */}
          <div className="w-2.5 h-5 bg-terminal-green animate-pulse" />

        </div>
      </div>

      {/* HOVER TEXT */}
      {hover && (
        <div
          className="fixed z-[9999] pointer-events-none text-terminal-green font-mono text-xs"
          style={{
            transform: `translate(${pos.x + 10}px, ${pos.y + 10}px)`
          }}
        >
          &gt;_
        </div>
      )}
    </>
  );
};

export default Cursor;
