import { useEffect, useState } from "react";
import { BookView } from "../components/BookView";
import { Card } from "../components/Card";
import { PageTopImage } from "../components/PageTopImage";
import axios from "axios";
import "./loader.css";
import logo1 from "../../public/3.svg";
import logo2 from "../../public/4.svg";
import logo3 from "../../public/Laploop.png";
import logo4 from "../../public/6.svg";

export function PublishConferenceProceeding() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState(null);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/getAllBooks`
      );

      if (response.status == 200) {
        setBooks(response.data.data);
      }
    } catch (error) {
      console.log("Something went wrong while getting books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);
  return (
    <div className="flex-1">
      <PageTopImage
        imageUrl={
          "https://media.springernature.com/full/springer-cms/rest/v1/content/15146266/data/v4"
        }
        text={"List of Published Books"}
      />

      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem]">
          <div className="mb-10">
            <p className="text-xl text-teal-900 my-5">
              Manappa is a leader in publishing proceedings, with over 200+
              titles available per year. You can benefit from our experience and
              services to turn your conference publication into worldwide
              accessible science.
            </p>
            <p className="text-xl  text-teal-900 my-5">
              At Monappa Publications, we believe in the power of ideas to
              transform workplaces and economies.{" "}
            </p>
            <p className="text-xl  text-teal-900 my-5">
              Our mission is to provide authoritative, research-driven content
              that bridges academia and industry.{" "}
            </p>
            <p className="text-xl  text-teal-900 my-5">
              With a focus on India’s evolving entrepreneurial landscape, our
              books are crafted by experts to support learning, innovation, and
              policy development.
            </p>

            <ol className="list-decimal text-teal-600 my-5 pl-12">
              {loading ? (
                <div className="loader"></div>
              ) : books ? (
                books.map((data) => <BookView key={data._id} data={data} />)
              ) : (
                <h2>No books found</h2>
              )}
            </ol>
          </div>
        </div>
      </div>

      <LearnMoreAboutPublishingSection />

      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem] py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
            <img src={logo1} alt="logo" className="w-[90%]" />
            <img src={logo2} alt="logo" className="w-[90%]" />
            <img src={logo3} alt="logo" className="w-[90%] pt-5" />
            <img src={logo4} alt="logo" className="w-[90%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LearnMoreAboutPublishingSection() {
  return (
    <div className="w-full flex justify-center px-10 py-10 bg-gray-200 ">
      <div className="w-full max-w-[76rem]">
        <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-6 mt-10">
          <Card
            bgColor={"bg-cyan-700"}
            textColor={"text-white"}
            title={"Author support for publishing"}
            subtitle={
              "At Monappa Publications, we are committed to providing comprehensive support to authors throughout their publishing journey. Our services are designed to ensure a smooth, efficient, and rewarding experience, from the initial concept to the final publication."
            }
            iconeColor={"white"}
            it={"3xl"}
            sit={"xl"}
            options={[
              "Manuscript Preparation Guidance: Detailed guidelines on structuring and formatting manuscripts to meet publishing standards.",
              "Professional Editing and Proofreading: Expert editing services to refine your manuscript for clarity, coherence, and accuracy.",
              "Translation Services: Reach a global audience with professional translation support in multiple languages.",
              "Data Presentation and Visualization: Enhance your book with clear, compelling data visuals and presentations.",
              "Formatting Assistance: Ensure your manuscript aligns with publishing requirements through expert formatting services.",
              "Open Access Publishing Support: Assistance with funding options and agreements to make your research accessible worldwide.",
              "Marketing and Promotion: Post-publication promotional strategies to maximize your book’s reach and impact.",
            ]}
          />
          <Card
            bgColor={"bg-cyan-700"}
            textColor={"text-white"}
            subtitle={
              "Monappa Publications offers a range of knowledge resources specifically tailored for scientists and researchers to support their academic and professional growth."
            }
            title={"Knowledge resources for scientists"}
            iconeColor={"white"}
            it={"3xl"}
            sit={"xl"}
            options={[
              "Research Tutorials: Step-by-step tutorials on writing, submitting, and publishing scientific work.",
              "Author Webinars: Interactive webinars with industry experts covering the latest trends and best practices in scientific publishing.",
              "Publication Ethics Guidelines: Comprehensive resources to ensure ethical compliance in research and publishing.",
              "Access to Research Databases: Explore relevant literature and stay updated with the latest advancements in your field.",
              "Scientific Writing Workshops: Specialized workshops focused on improving scientific writing skills for researchers at all levels.",
              "Open Access Resources: Insights on the benefits and processes of open-access publishing for broader research visibility.",
            ]}
            last={
              "With these resources, Monappa Publications empowers scientists and researchers to share their knowledge, contribute to their fields, and make a global impact."
            }
          />
        </div>
      </div>
    </div>
  );
}
