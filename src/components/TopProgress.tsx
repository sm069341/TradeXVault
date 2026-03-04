import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TopProgress() {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 600);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="fixed left-0 top-0 z-[9998] h-[3px] w-full">
      <div
        className={[
          "h-full bg-blue-500 transition-all duration-500 ease-out",
          active ? "w-[85%] opacity-100" : "w-full opacity-0",
        ].join(" ")}
      />
    </div>
  );
}