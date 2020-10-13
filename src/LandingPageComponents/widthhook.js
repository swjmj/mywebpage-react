import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));

    return () =>
      window.removeEventListener("resize", (e) =>
        setWidth(e.target.innerWidth)
      );
  });

  return width;
}
