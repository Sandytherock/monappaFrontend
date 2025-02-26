import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookView({ data }) {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

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
      <p className="text-xl font-thin text-cyan-800">
        {data?.firstSection?.headings?.title}
      </p>
      {showInfo && (
        <div className="flex flex-col gap-5 my-5">
          <div className="grid md:grid-cols-3">
            <div>
              <p>
                Title:{" "}
                <span className="text-black">
                  {data?.firstSection?.headings?.title}
                </span>
              </p>
              <p>
                Author:{" "}
                <span className="text-black">
                  {data?.aboutAuthors
                    ?.map((auth) => auth.author_name)
                    .join(",")}
                </span>
              </p>
              <p>
                Pages:
                <span className="text-black">{data?.bookDetails?.Pages}</span>
              </p>
              <p>
                Language:{" "}
                <span className="text-black">
                  {data?.bookDetails?.Language}
                </span>
              </p>
            </div>
            <div>
              <p>
                ASIN:{" "}
                <span className="text-black">{data?.bookDetails?.ASIN}</span>
              </p>
              <p>
                ISBN-10:{" "}
                <span className="text-black">{data?.bookDetails?.ISBN10}</span>
              </p>
              <p>
                Country:{" "}
                <span className="text-black">{data?.bookDetails?.Country}</span>
              </p>
            </div>
            <div>
              <button
                className="text-white bg-cyan-700 rounded-lg py-2 px-4"
                onClick={() => navigate(`/book/${data._id}`)}
              >
                View
              </button>
            </div>
          </div>
        </div>
      )}
      <hr className="my-3 text-gray-400" />
    </li>
  );
}
