import axios from "axios";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./loader.css";

export function BookShowCasePage() {
  const [Loading, setLoading] = useState(true);
  const [book, setBooks] = useState(null);
  const { id } = useParams();

  let topReview = [];
  let otherReview = [];

  if (book) {
    topReview = book?.reviews?.slice(0, 4);
    otherReview = book?.reviews?.slice(4);
  }

  const fetchSingleBook = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/getOneBooks/${id}`
      );
      if (response.status == 200) {
        setBooks(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  if (Loading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <FirstSection
        data={book?.firstSection}
        hardcovers={book.hardcovers}
        ebooks={book.ebooks}
      />
      <ThirdSection reviews={topReview} />
      <div className="w-full flex justify-center px-5 py-10  bg-gray-200">
        <div className="w-full max-w-[45rem]">
          <h3 className="text-4xl font-extrabold my-5">ABOUT THE BOOK</h3>
          <div className="flex flex-col gap-3">
            {book?.aboutTheBook?.map((text) => (
              <p key={text} className="text-xl text-black/80">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-5 py-10  bg-gray-200">
        <div className="w-full max-w-[45rem]">
          <h3 className="text-4xl font-extrabold my-5">BOOK DETAILS</h3>
          <div className="flex flex-col gap-3">
            <p>
              <span className="text-black font-bold">ASIN :</span>{" "}
              {book?.bookDetails?.ASIN}
            </p>
            <p>
              <span className="text-black font-bold">Publisher :</span>{" "}
              {book?.bookDetails?.Publisher}
            </p>
            <p>
              <span className="text-black font-bold">Language :</span>{" "}
              {book?.bookDetails?.Language}
            </p>
            <p>
              <span className="text-black font-bold">Hardcover :</span>{" "}
              {book?.bookDetails?.Pages}
              pages
            </p>
            <p>
              <span className="text-black font-bold">ISBN-10 :</span>{" "}
              {book?.bookDetails?.ISBN10}
            </p>
            <p>
              <span className="text-black font-bold">ISBN-13 :</span>
              {book?.bookDetails?.ISBN13}
            </p>
            <p>
              <span className="text-black font-bold">Dimensions :</span>{" "}
              {book?.bookDetails?.dimensions?.width} x
              {book?.bookDetails?.dimensions?.length} x{" "}
              {book?.bookDetails?.dimensions?.height} cm
            </p>
          </div>
        </div>
      </div>

      <ForthSection data={book.aboutAuthors} />
      {otherReview != [] && <FifthSection reviews={otherReview} />}
    </div>
  );
}

function FirstSection({ data, hardcovers, ebooks }) {
  return (
    <div className="w-full flex justify-center px-5 py-10  bg-gray-200">
      <div className="w-full max-w-[76rem]">
        <div className="w-full grid md:grid-cols-3 max-md:grid-rows-2">
          <div className="md:col-span-1 max-md:row-span-1 max-md:pl-15 flex items-center">
            <img
              src="https://www.superagency.ai/wp-content/uploads/2025/02/book-cover-1600-alt-2.png"
              alt="book image"
              className="w-[90%] max-md:w-[80%]"
            />
          </div>
          <div className="md:col-span-2 max-md:row-span-1 flex flex-col px-5 gap-12 w-full">
            <div>
              <h2 className="text-5xl font-bold max-md:text-4xl">
                {data?.headings?.title}
              </h2>
              <h3 className="text-2xl font-bold max-md:text-xl">
                {data?.headings?.subtitle}
              </h3>
              <p className="text-black/60">{data?.headings?.info}</p>
            </div>

            {hardcovers && (
              <div>
                <h4 className="font-bold py-2">HARDCOVER</h4>
                <div className="flex gap-2">
                  {hardcovers.map((d) => (
                    <a href={d.link}>
                      <button
                        key={d.siteName}
                        className="text-black bg-white py-1 px-2  hover:bg-black hover:text-white"
                      >
                        {d.siteName}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {ebooks && (
              <div>
                <h4 className="font-bold py-2">EBOOKS</h4>
                <div className="flex gap-2">
                  {ebooks.map((d) => (
                    <a href={d.link}>
                      <button
                        key={d.siteName}
                        className="text-black bg-white py-1 px-2  hover:bg-black hover:text-white"
                      >
                        {d.siteName}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSection({ reviews }) {
  return (
    <div className="w-full flex justify-center px-10 py-10">
      <div className="w-full max-w-[76rem]  flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          {reviews.map((r) => (
            <div key={r.reviewer_Name} className="flex  justify-between gap-8">
              <Quote className="w-8 h-8" />
              <div className="flex flex-col gap-3 w-[90%]">
                <p className="text-black/60 text-xl">{r.text}</p>
                <h4 className="text-black/80 font-bold text-xl">
                  —{r.reviewer_Name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <button className="font-bold py-4 border-2 w-[200px]">
          More Review
        </button>
      </div>
    </div>
  );
}

function ForthSection({ data }) {
  return (
    <div className="w-full flex justify-center px-5 py-10  bg-gray-200">
      <div className="w-full max-w-[45rem]">
        <h3 className="text-4xl font-extrabold text-black/80">
          ABOUT THE AUTHORS
        </h3>
        {data &&
          data.map((auth) => (
            <div>
              <h4 className="text-xl font-bold text-black/80 my-6">
                {auth?.author_name}
              </h4>
              <div className="grid grid-cols-4 gap-7">
                <img src={auth?.authors_image} alt="" className="col-span-1" />
                <div className="col-span-3 flex flex-col gap-5 text-black/70">
                  {auth?.author_details?.map((text) => (
                    <p>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function FifthSection({ reviews }) {
  return (
    <div className="w-full flex justify-center px-10 py-10">
      <div className="w-full max-w-[76rem]  flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          {reviews.map((r) => (
            <div key={r.reviewer_Name} className="flex  justify-between gap-8">
              <Quote className="w-8 h-8" />
              <div className="flex flex-col gap-3 w-[90%]">
                <p className="text-black/60 text-xl">{r.text}</p>
                <h4 className="text-black/80 font-bold text-xl">
                  —{r.reviewer_Name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
