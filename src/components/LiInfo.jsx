import { ChevronDown, ChevronRight, CircleCheckBig } from "lucide-react";
import { useState } from "react";

export function LiInfo({ title, checks }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <li
        className="relative my-2"
        onClick={() => setShowInfo((state) => !state)}
      >
        {showInfo ? (
          <ChevronDown className="absolute -left-11 top-1" />
        ) : (
          <ChevronRight className="absolute -left-11 top-1" />
        )}
        <p className="text-xl font-thin text-cyan-800">{title}</p>
        {showInfo && (
          <div className="flex flex-col gap-5 my-5">
            {checks.map((text) => (
              <div className="flex gap-3 text-black">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-light">{text}</p>
              </div>
            ))}
          </div>
        )}
        <hr className="my-3 text-gray-400" />
      </li>
    );
  }