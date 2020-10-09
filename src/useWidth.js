import { useRef, useEffect, useState } from "react";

export default function useWidth() {
  const myRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (myRef.current) {
      setWidth(myRef.current.offsetWidth);
    }
  });

  return width;
}
