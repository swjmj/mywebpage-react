import { useState, useEffect } from "react";

export default function useToggle() {
  const [mobileNavStat, setmobileNavStat] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => setmobileNavStat(false));
    return document.body.removeEventListener("click", () =>
      setmobileNavStat(false)
    );
  }, [mobileNavStat]);

  return [mobileNavStat, setmobileNavStat];
}
