import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./loader.css";
import { BookView } from "../components/BookView";

export function SearchResult() {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const { search } = useParams();
  console.log(loading, searchResult);

  console.log(search);

  const findResult = async () => {
    if (!search) return;
    try {
      const resutl = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/searchBooks/${search}`
      );

      if (resutl.status == 200) {
        setSearchResult(resutl.data.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    setSearchResult(null);
    const search = () => {
      findResult();
    };
    search();
  }, [search]);
  return (
    <div className="flex-1">
      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem] flex flex-col justify-center">
          <h1 className="my-5 text-3xl text-center">Search Result</h1>
          <hr className="my-5" />
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : (searchResult == null || searchResult.length == 0) && !loading ? (
            <div className="flex justify-center items-center">
              <h1 className="my-20">No Result Found</h1>
            </div>
          ) : (
            !loading &&
            searchResult != null &&
            searchResult.length > 0 && (
              <div>
                <ol className="list-decimal text-teal-600 my-5 pl-12">
                  {searchResult.map((data) => (
                    <BookView key={data._id} data={data} />
                  ))}
                </ol>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
