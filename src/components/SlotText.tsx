import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type Props = {
  items: string[];
  intervalMs?: number;
  spinMs?: number;
  className?: string;
};

export default function SlotText({
  items,
  intervalMs = 3000,
  spinMs = 900,
  className,
}: Props) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  const measureRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // 🔹 Measure widest text once
  useLayoutEffect(() => {
    if (!measureRef.current || safeItems.length === 0) return;

    const spans = Array.from(
      measureRef.current.querySelectorAll("span"),
    ) as HTMLSpanElement[];

    const max = Math.max(...spans.map((s) => s.offsetWidth));
    setWidth(max);
  }, [safeItems]);

  // 🔹 Spin logic
  useEffect(() => {
    if (safeItems.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      const ni = (index + 1) % safeItems.length;
      setNextIndex(ni);
      setSpinning(true);

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setIndex(ni);
        setSpinning(false);
      }, spinMs);
    }, intervalMs);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [safeItems.length, intervalMs, spinMs, index]);

  return (
    <>
      {/* Hidden measurer */}
      <span
        ref={measureRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        {safeItems.map((t) => (
          <span key={t} style={{ display: "inline-block", marginRight: 8 }}>
            {t}
          </span>
        ))}
      </span>

      {/* Visible slot */}
      <span
        className={`slot ${className ?? ""}`}
        style={{
          width: width ? `${width}px` : "auto",
          ["--spin-ms" as any]: `${spinMs}ms`,
        }}
      >
        <span className={`slot__reel ${spinning ? "is-spinning" : ""}`}>
          <span className="slot__line">{safeItems[index]}</span>
          <span className="slot__line">{safeItems[nextIndex]}</span>
        </span>
      </span>
    </>
  );
}
