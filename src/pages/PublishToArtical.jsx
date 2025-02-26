import { PageTopImage } from "../components/PageTopImage";
import { CircleCheckBig } from "lucide-react";
import { Card } from "../components/Card";
import { LiInfo } from "../components/LiInfo";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Chapter Preparation",
    checks: [
      "Ensure your chapter aligns with the submission guidelines detailed for the selected book project.",
      "Choose a fitting title from our portfolio of book projects welcoming chapter submissions.",
      "Obtain formal permissions for any images, diagrams, or third-party content you intend to include.",
      "Present all data or research clearly, ensuring it is reproducible where applicable.",
      "Disclose any previously published content with appropriate citations and transparency.",
      "Comply with our stringent policies on plagiarism, ethical practices, and authorship standards.",
      "Enhance your submission with our professional services, such as English polishing, technical review, or formatting support—explore available options for assistance.",
    ],
  },
  {
    title: "Cover Letter Composition",
    checks: [
      "Draft a concise 1-page cover letter introducing your chapter, summarizing its content or research, and emphasizing its relevance to the book’s theme.",
    ],
  },
  {
    title: "Manuscript Submission",
    checks: [
      "Begin the process by visiting the book project’s dedicated page on our website.",
      "Submit your chapter by emailing it to our official submission address: monappapublications@gmail.com .",
      "Note that only one chapter per book project may be submitted at a time; multiple simultaneous submissions will be declined.",
    ],
  },
  {
    title: "Technical Assessment",
    checks: [
      "Our editorial team will verify that your chapter adheres to formatting standards, ethical guidelines, plagiarism policies, contributor requirements, and permission protocols.",
    ],
  },
  {
    title: "Editorial and Peer Evaluation",
    checks: [
      "The book editor will review your chapter to assess its suitability for inclusion.",
      "If approved for further consideration, it may be evaluated by two or more field experts during peer review.",
      "Be ready to respond to questions or requests from editors or reviewers at this stage.",
    ],
  },
  {
    title: "Final Determination",
    checks: [
      "Upon acceptance, you will need to sign a publishing agreement to proceed.",
      "If your chapter is not selected, our transfer desk team will assist in identifying alternative book projects within our catalog.",
    ],
  },
  {
    title: "Payment (If Applicable)",
    checks: [
      "Open-access chapters require a publication fee upon acceptance—consult the specific book project page for detailed fee information, as costs vary.",
      "Explore funding possibilities to help cover the applicable payment—see our resources for support options.",
    ],
  },
  {
    title: "Publication Process",
    checks: [
      "We will provide chapter proofs for your review and approval before finalization.",
      "Once approved, your chapter will be published as part of the book.",
      "Monitor your chapter’s reach and impact through your author account.",
    ],
  },
  {
    title: "Additional Guidance",
    checks: [
      "Streamline your preparation with our chapter submission checklist.",
      "Check the specific guidelines for each book project, as requirements may vary.",
    ],
  },
];

export function PublishToArtical() {
  return (
    <div className="w-full flex-1">
      <PageTopImage
        imageUrl={
          "https://media.springernature.com/full/springer-cms/rest/v1/content/16668868/data/v2"
        }
        text={"Publish an Chapter"}
      />

      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem]">
          <div className="mb-10">
            <p className="text-xl">
              Join thousands of authors worldwide who have published their books
              with Monappa Publications, contributing to a global community of
              knowledge and innovation.
            </p>
          </div>
        </div>
      </div>

      <SetpBySetpSection />
      <OpenAcessVsSubscriptionSection />
      <GetHelpWithFindingSection />
      <ChooseAJournalSection />
      <LearnMoreAboutPublishingSection />
    </div>
  );
}

function SetpBySetpSection() {
  return (
    <div className="w-full flex justify-center px-10 py-10 bg-gray-200">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Step-by-Step Guide to Publishing a Book Chapter with Monappa
          Publications
        </p>
        <hr className="my-4 h-0.5 bg-white border-0" />
        <ol className="list-decimal pl-10 text-cyan-600 text-xl">
          {steps.map((data) => (
            <LiInfo title={data.title} checks={data.checks} />
          ))}
        </ol>
        <p className="font-thin">
          Monappa Publications is dedicated to guiding you through a
          professional and impactful book chapter publishing experience. Submit
          your work to monappapublications@gmail.com and join our esteemed
          community of authors!
        </p>
      </div>
    </div>
  );
}

function OpenAcessVsSubscriptionSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center px-10 py-10 ">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Open Access vs. Subscription Publishing for Book Chapters with Monappa
          Publications
        </p>
        <hr className="my-4 h-0.5 bg-gray-300 border-0" />
        <div className="grid md:grid-cols-4 max-md:grid-rows-3 gap-5">
          <div className="md:col-span-3 max-md:row-span-3">
            <p className="text-cyan-900 text-xl my-4">
              Each of our book projects has its own policies, options, and fees
              for publishing chapters.
            </p>
            <p className="text-lg my-4 font-thin">
              Several of our titles are fully open access, while others adopt a
              hybrid model where readers pay to access certain chapters.
            </p>
            <p className="text-lg my-4 font-thin">
              Opting to publish your book chapter as open access offers numerous
              advantages:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3  text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Freely accessible and downloadable to all readers.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Expands your work’s reach to a broader global audience.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Achieves 1.6 times more citations on average.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Garners 6 times more downloads.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Receives an average Altmetric attention score of 4.9 (compared
                  to 2.1 for subscription-based chapters).
                </p>
              </div>
            </div>
            <p className="text-lg my-3 font-thin">
              Publishing your chapter in a subscription-based book is free of
              charge for authors. However, open-access chapters require a
              publication fee, which varies by project. To confirm the
              applicable open-access fees, please refer to the specific book
              project page you are submitting to via
              monappapublications@gmail.com .
            </p>
          </div>
          <div onClick={() => navigate("/moreinfo/LMAOAT")}>
            <Card
              bgColor={"bg-cyan-900"}
              textColor={"text-white"}
              title={"Learn more about open access"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GetHelpWithFindingSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center px-10 py-10 bg-gray-200 ">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Get Support with Publishing Fees at Monappa Publications{" "}
        </p>
        <hr className="my-4 h-0.5 bg-white border-0" />
        <div className="grid md:grid-cols-4 max-md:grid-rows-3 gap-5">
          <div className="md:col-span-3 max-md:row-span-3">
            <p className="text-cyan-900 text-xl my-4">
              At Monappa Publications, we understand that funding is an
              essential part of your publishing journey. Many organizations
              encourage or require researchers to publish their work as open
              access. We recommend checking with your supervisor and colleagues
              to understand your institution's open access policies.
            </p>
            <p className="text-lg my-4 font-thin">
              To make publishing more accessible, we collaborate with various
              funders and institutions that may cover your open access
              publishing fees. Explore our funding agreements to see if you are
              eligible for full or partial coverage.
            </p>
            <p className="text-lg my-4 font-thin">
              Additionally, we offer special discounts for researchers from
              select geographical regions. Visit our Reduced Fees section to see
              if you qualify for these discounts and make your work accessible
              to a global audience with Monappa Publications.
            </p>
          </div>
          <div onClick={() => navigate("/moreinfo/LMAOAT2")}>
            <Card
              bgColor={"bg-lime-500"}
              textColor={"text-white"}
              title={"Learn more about open access"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChooseAJournalSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center px-10 py-10 ">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Choose the Right Book for Your Chapter Publication at Monappa
          Publications
        </p>
        <hr className="my-4 h-0.5 bg-gray-300 border-0" />
        <div className="grid md:grid-cols-4 max-md:grid-rows-3 gap-5">
          <div className="md:col-span-3 max-md:row-span-3">
            <p className="text-cyan-900 text-xl my-4">
              At Monappa Publications, we offer a diverse collection of books
              across various disciplines, providing the perfect platform for
              your book chapter. The best way to find the most relevant book for
              your chapter is to search by keyword or explore our subject
              categories.
            </p>
            <p className="text-lg my-4 font-thin">
              Once you’ve selected a suitable book, review the submission
              guidelines carefully to understand the open access options and
              associated fees.
            </p>
            <p className="text-lg my-3 font-thin">
              Publishing your chapter in a standard book is free; however, open
              access chapters may involve a publication fee. Be sure to check
              the open access fees specific to the book you choose, and explore
              potential funding options available through your institution or
              funding partners.
            </p>
          </div>
          <div onClick={() => navigate("/moreinfo/SAJ")}>
            <Card
              bgColor={"bg-cyan-600"}
              textColor={"text-white"}
              title={"Find all Books"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
            />
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
        <p className="text-4xl font-light">
          Learn More About Publishing with Monappa Publications
        </p>
        <hr className="my-4 h-0.5 bg-white border-0" />
        <p className="text-cyan-900 text-xl my-4">
          We provide comprehensive support, including editing, translation, data
          visualization, and formatting services, to guide you through every
          stage of the publishing process.
        </p>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-10">
          <Card
            bgColor={"bg-cyan-900"}
            textColor={"text-white"}
            title={"Author Support for Publishing"}
            iconeColor={"white"}
            it={"2xl"}
            sit={"xl"}
            subtitle={
              "At Monappa Publications, Author Support for Publishing means hands-on help from our Publications Team. We review your manuscript, offer feedback, and guide you through standard or open access options—explaining fees and suggesting funding like institutional grants. Need contract advice or submission tips? Email us at support@monappapublications.com for quick, tailored support."
            }
          />
          <Card
            bgColor={"bg-green-800"}
            textColor={"text-white"}
            title={"Knowledge Resources for Researchers"}
            iconeColor={"white"}
            it={"2xl"}
            sit={"xl"}
            subtitle={
              "Knowledge Resources for Researchers is your go-to online toolkit at Monappa Publications. Find writing guides, publishing trend articles, and sample chapters to inspire your work across our categories. Updated regularly, it offers research ideas and citation tips to strengthen your submission."
            }
          />
          <Card
            bgColor={" bg-purple-700"}
            textColor={"text-white"}
            title={"Publication Process"}
            iconeColor={"white"}
            it={"2xl"}
            sit={"xl"}
            subtitle={
              "At Monappa Publications, book publishing is a streamlined process designed to bring your work to a global audience."
            }
          />
        </div>
        <p className="text-lg my-4 font-thin">
          For questions about a specific book project, refer to its submission
          guidelines. If you need further assistance, feel free to contact us at
          monappapublications@gmail.com .
        </p>
      </div>
    </div>
  );
}
