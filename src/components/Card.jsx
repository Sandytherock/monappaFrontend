import { CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Card({
  bgColor,
  textColor,
  title,
  iconeColor,
  it,
  sit,
  onClick,
  subtitle,
  options,
  last,
}) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className={`relative flex-1 ${bgColor} flex ${
        show ? "flex-col" : "h-[100px]"
      } items-center ${textColor} rounded-bl-3xl py-7 pl-6 gap-5`}
      onClick={() => {
        if (onClick) navigate(onClick);
      }}
    >
      <span
        className={`max-w-[80%] text-${it} max-sm:text-${sit} font-semibol`}
      >
        {title}
      </span>
      <CircleChevronRight
        size={20}
        strokeWidth={0.75}
        color={iconeColor}
        className={`absolute right-3 w-8 h-8 top-12`}
        onClick={() => setShow((state) => !state)}
      />
      {show && subtitle && (
        <div className="flex flex-col gap-4 px-5">
          <p>{subtitle}</p>
          {options && (
            <ul className="flex flex-col gap-2 list-disc pl-5">
              {options.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}
          {last && <p>{last}</p>}
        </div>
      )}
    </div>
  );
}
