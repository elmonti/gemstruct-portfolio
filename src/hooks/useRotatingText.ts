import { useEffect, useState } from "react";

export function useRotatingText(items: string[], interval = 1000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);

    return () => clearInterval(id);
  }, [items, interval]);

  return items[index] ?? "";
}
