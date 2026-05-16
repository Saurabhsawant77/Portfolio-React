import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + "px";
        dot.current.style.top  = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX + "px";
        ring.current.style.top  = ringY + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    // Hover effect on interactive elements
    const addHover = () => {
      ring.current?.classList.add("hovered");
      dot.current?.classList.add("hovered");
    };
    const removeHover = () => {
      ring.current?.classList.remove("hovered");
      dot.current?.classList.remove("hovered");
    };

    const targets = document.querySelectorAll("a, button, .card, .skill-card");
    targets.forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: "fixed", width: 6, height: 6,
        background: "#4FFFA0", borderRadius: "50%",
        pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%,-50%)",
        transition: "width 0.2s, height 0.2s, background 0.2s",
      }} />
      <div ref={ring} style={{
        position: "fixed", width: 32, height: 32,
        border: "1px solid rgba(79,255,160,0.5)",
        borderRadius: "50%",
        pointerEvents: "none", zIndex: 9998,
        transform: "translate(-50%,-50%)",
        transition: "width 0.3s, height 0.3s, border-color 0.3s",
      }} />
    </>
  );
}