import { CircleCheckBig } from "lucide-react";
import { Card } from "../components/Card";
import { LiInfo } from "../components/LiInfo";
import { PageTopImage } from "../components/PageTopImage";
import { useNavigate } from "react-router-dom";

const stepsforPublishBook = [
  {
    title: "Shape Your Concept",
    checks: [
      "Investigate existing literature in your field and identify how your work can bring a unique angle or fresh perspective.",
    ],
  },
  {
    title: "Explore Publishing Pathways",
    checks: [
      "Learn about our range of book types, imprints, series, and available formats.",
      "Understand the key players in the process and their responsibilities.",
      "Connect with our editorial team at monappapublications@gmail.com  to discuss your idea and determine the best imprint for your project.",
      "Consider integrating digital enhancements like in-book tutorials, interactive elements, or multimedia content.",
      "Review our editorial policies and visit our Diversity, Equity, and Inclusion (DEI) Hub to ensure your work is inclusive and representative.",
    ],
  },
  {
    title: "Submit Your Proposal",
    checks: [
      "If your idea sparks interest, prepare and submit a proposal via monappapublications@gmail.com .",
      "For more complex submissions, a detailed proposal may be requested—find tips for crafting it on our website.",
      "Include a thorough description, target audience, co-author details (if applicable), and projected timeline.",
      "After signing your contract, receive a complimentary Research Round-up—a curated literature review featuring up to 30 relevant Monappa Publications articles or chapters tailored to your topic.",
    ],
  },
  {
    title: "Proposal Evaluation",
    checks: [
      "Our editors, and potentially external reviewers, will assess your proposal, a process typically spanning a few weeks.",
      "If declined, we’ll provide constructive feedback; if approved, you’ll sign a publishing contract—details available on our site.",
    ],
  },
  {
    title: "Weigh Open Access Options",
    checks: [
      "Opting for open access requires a publication fee; check funding availability through your institution or external grants—see our funding support section for assistance.",
    ],
  },
  {
    title: "Submit Your Manuscript",
    checks: [
      "Follow our manuscript preparation guidelines, tailored to your book type or series.",
      "Ensure all required components are included—learn more about submission requirements on our website.",
      "Email your completed manuscript to monappapublications@gmail.com .",
    ],
  },
  {
    title: "Manuscript Assessment",
    checks: [
      "Your manuscript will undergo review by one or more subject experts, averaging 60 days.",
      "Our team will inform you if it’s ready for publication or share feedback for revisions.",
    ],
  },
  {
    title: "Proofreading and Production",
    checks: [
      "Receive a draft of your book with a 10-day window to proofread; we’re flexible to accommodate your schedule.",
      "Learn more about the production process on our post-submission page.",
    ],
  },
  {
    title: "Post-Publication",
    checks: [
      "We’ll promote your book across multiple channels and campaigns to maximize its reach and influence.",
      "Your book will be available in our online store.",
      "Boost its visibility with our SEO tips and promotional strategies—details provided upon publication.",
      "Production typically takes 2 to 6 months from final manuscript acceptance.",
    ],
  },
  {
    title: "Submit Your Book Idea",
    checks: [
      "Pitch your concept to our publishing editors by emailing monappapublications@gmail.com .",
    ],
  },
];
export function PublishABook() {
  return (
    <div className="w-full flex-1">
      <PageTopImage
        imageUrl={
          "https://media.springernature.com/full/springer-cms/rest/v1/content/16725982/data/v4"
        }
        text={" Publishing a Book with Monappa Publications"}
      />

      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem]">
          <div className="mb-10">
            <p className="text-xl my-5 text-teal-800">
              Publishing a book is a pivotal achievement in a researcher’s
              career, enhancing your visibility, credibility, and professional
              standing. By authoring a book with Monappa Publications, you can
              delve deeply into your ideas, expand on your research, and present
              your insights comprehensively.
            </p>
            <p className="text-xl text-teal-800">
              Curious about what it takes to publish your work as a book?
              Explore our detailed guide, which outlines each step, offers
              practical tips, templates, author perks, and more.
            </p>
          </div>
        </div>
      </div>

      <SetpBySetpSection />
      <OpenAcessVsSubscriptionSection />
      <GetHelpWithFindingSection />
      <ChooseWhereToPublishSection />
      <div className="w-full flex justify-center px-10 py-10 bg-gray-200 ">
        <div className="w-full max-w-[76rem]">
          <p className="text-4xl font-light">
            Learn more about publishing with us
          </p>
          <hr className="my-4 h-0.5 bg-white border-0" />
          <p className="text-cyan-900 text-xl my-4">
            At Monappa Publications, we are committed to providing extensive
            support to our authors throughout the publishing process. From
            manuscript preparation to post-publication promotion, we offer a
            range of professional services designed to ensure the highest
            quality of published work.
          </p>
          <p className="text-cyan-900 text-xl my-4">Our Services Include:</p>
          <ul className="list-disc flex flex-col gap-3">
            <li>
              Editing and Proofreading: Our professional editing services help
              refine your manuscript, ensuring clarity, coherence, and
              grammatical accuracy. We focus on enhancing the quality of your
              content while maintaining your unique voice and style.
            </li>
            <li>
              Translation Services: To reach a global audience, we offer expert
              translation services. This ensures that your work is accessible to
              readers across different linguistic backgrounds, increasing its
              international impact.
            </li>
            <li>
              Data Presentation: We assist in creating clear and compelling data
              visuals, making complex information easier to understand. Our team
              ensures that data is presented accurately and effectively to
              support your research findings.
            </li>
            <li>
              Formatting Assistance: Proper formatting is essential for a
              professional presentation. We provide formatting services that
              align with publishing standards, ensuring that your manuscript
              meets all technical requirements.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center px-10 py-10 bg-gray-200 ">
        <div className="w-full max-w-[76rem]">
          <p className="text-4xl font-light">
            Why Publish with Monappa Publications?
          </p>
          <hr className="my-4 h-0.5 bg-white border-0" />
          <p className="text-cyan-900 text-xl my-4">
            Publishing a book is a significant achievement in any researcher’s
            career. At Monappa Publications, we provide a platform that not only
            amplifies your academic contributions but also enhances your
            visibility, credibility, and recognition within your field. Our
            rigorous editorial process, combined with global distribution
            channels, ensures that your book reaches the widest possible
            audience.
          </p>
          <p className="text-cyan-900 text-xl my-4">
            Our commitment to open access publishing means that your work will
            be more discoverable and accessible, resulting in higher readership,
            increased citations, and greater academic impact.
          </p>
          <p className="text-cyan-900 text-xl my-4">
            Start your publishing journey with Monappa Publications today and
            share your knowledge with readers around the world.
          </p>
        </div>
      </div>
      <LearnMoreAboutPublishingSection />
    </div>
  );
}

function SetpBySetpSection() {
  return (
    <div className="w-full flex justify-center px-10 py-10 bg-gray-200">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Step-by-Step Guide to Publishing a Book with Monappa Publications
        </p>
        <hr className="my-4 h-0.5 bg-white border-0" />
        <div className="grid md:grid-cols-3 max-md:grid-rows-3 gap-5">
          <div className="md:col-span-2 max-md:row-span-2">
            <ol className="list-decimal pl-10 text-cyan-900 text-xl">
              {stepsforPublishBook.map((data) => (
                <LiInfo title={data.title} checks={data.checks} />
              ))}
            </ol>
            <p className="font-thin">
              It usually takes 2 to 6 months to produce your book once we've
              accepted your final manuscript.
            </p>
          </div>
          <div>
            <Card
              bgColor={"bg-cyan-900"}
              textColor={"text-white"}
              title={"Submit your book idea"}
              iconeColor={"white"}
              it={"3xl"}
              sit={"2xl"}
            />
          </div>
        </div>
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
          Open Access Publishing with Monappa Publications
        </p>
        <hr className="my-4 h-0.5 bg-gray-300 border-0" />
        <div className="grid md:grid-cols-4 max-md:grid-rows-3 gap-5">
          <div className="md:col-span-2 max-md:row-span-2">
            <p className="text-cyan-900 text-xl my-4">
              Our books can be fully open access, subscription-based, or hybrid,
              blending open-access and paid chapters.
            </p>
            <p className="text-lg my-4 font-thin">
              Publishing your book open access amplifies its impact:
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3  text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Free for all readers to access.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Reaches 61% more countries
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Garners 2.4 times more citations.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Achieves 10 times more downloads.
                </p>
              </div>
              <div className="flex gap-3 text-black my-2 ml-4">
                <CircleCheckBig className="w-6 h-6" />
                <p className="max-w-[85%] font-thin">
                  Receives 10 times more online mentions.
                </p>
              </div>
            </div>
            <p className="text-lg my-3 font-thin">
              While publishing a subscription-based book is free for authors,
              open-access publication incurs a fee. Refer to the specific
              imprint’s guidelines for details. Contact
              monappapublications@gmail.com to learn more about open access
              options.
            </p>
            <p className="text-lg my-3 font-thin">
              Embark on your publishing journey with Monappa Publications and
              elevate your research to new heights!
            </p>
          </div>
          <div
            className="md:col-span-2 max-md:row-span-1"
            onClick={() => navigate("/moreinfo/LMAOAT3")}
          >
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
  return (
    <div className="w-full flex justify-center px-10 py-10 bg-gray-200 ">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Get Help with Funding at Monappa Publications
        </p>
        <hr className="my-4 h-0.5 bg-white border-0" />
        <div>
          <p className="text-cyan-900 text-xl my-4">
            At Monappa Publications, we recognize that funding is a vital
            component in the journey of book publishing. Many institutions and
            research organizations encourage or require authors to publish their
            work as open access to ensure broader accessibility and impact.
            Therefore, it is essential to consult with your supervisor,
            colleagues, or institutional representatives to understand your
            organization’s approach toward open access publishing. In many
            cases, your institution may offer financial support to cover open
            access publishing fees.
          </p>
          <p className="text-lg my-4 font-thin">
            To further support our authors, Monappa Publications provides a
            range of book agreements designed specifically to assist with open
            access fees. These agreements are aimed at making the publishing
            process more accessible and affordable for authors from diverse
            backgrounds.
          </p>
          <p className="text-lg my-4 font-thin">
            Authors are encouraged to explore our available funding agreements
            to determine if their open access fees can be covered through
            institutional collaborations or external funding sources. Our team
            is available to provide guidance on accessing these opportunities
            and ensuring that financial considerations do not become a barrier
            to sharing your research with the world.
          </p>
        </div>
      </div>
    </div>
  );
}

function ChooseWhereToPublishSection() {
  return (
    <div className="w-full flex justify-center px-10 py-10 ">
      <div className="w-full max-w-[76rem]">
        <p className="text-4xl font-light">
          Choose the Right Book Series at Monappa Publications
        </p>
        <hr className="my-4 h-0.5 bg-gray-300 border-0" />
        <p className="text-cyan-900 text-xl my-4">
          Monappa Publications offers an extensive selection of book series,
          each tailored to specific academic and professional fields. Our series
          are designed to cater to a wide range of topics, ensuring that authors
          can find the perfect platform for their work.
        </p>
        <div className="grid md:grid-cols-2 max-md:grid-rows-5">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="text-lg my-4 font-thin">
                <span className="font-medium">
                  Monappa Science & Technology Series
                </span>{" "}
                This series focuses on groundbreaking research in the fields of
                science, technology, engineering, and medicine. It is an ideal
                choice for researchers aiming to publish technical content with
                significant global relevance. Books in this series often explore
                the latest advancements, innovations, and applications in
                various scientific and technological domains, providing a
                platform for impactful research contributions.
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Learn more about Monappa Science & Technology
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Contact a Monappa Science Editor
              </p>
            </div>
            {/* <div>
              <img
                src="https://media.springernature.com/full/springer-cms/rest/v1/content/12266706/data/v2"
                alt="logo"
                className="w-[70%]"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="text-lg my-4 font-thin">
                <span className="font-medium">
                  Monappa Business & Economics Series
                </span>{" "}
                Specializing in business strategies, financial markets,
                management practices, and economic theories, this series is
                perfect for authors targeting professionals, academics, and
                policymakers. The series covers a broad range of topics,
                including entrepreneurship, corporate governance, international
                trade, and economic development, offering insights that bridge
                theoretical knowledge and practical applications.
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Learn more about Monappa Business & Economics Series
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Contact a Monappa Business Editor
              </p>
            </div>
            {/* <div>
              <img
                src="https://media.springernature.com/full/springer-cms/rest/v1/content/12266702/data/v4"
                alt="logo"
                className="w-[70%]"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="text-lg my-4 font-thin">
                <span className="font-medium">
                  Monappa Social Sciences & Humanities Series
                </span>{" "}
                This series covers diverse topics within the social sciences and
                humanities, including sociology, psychology, political science,
                history, cultural studies, and more. It provides a platform for
                authors to present deep, insightful analyses and engage in
                interdisciplinary discussions that contribute to the
                understanding of human behavior, society, and culture.
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Learn more about Monappa Social Sciences & Humanities Series
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Contact a Monappa Humanities Editor
              </p>
            </div>
            {/* <div>
              <img
                src="https://media.springernature.com/full/springer-cms/rest/v1/content/26012204/data/v3"
                alt="logo"
                className="w-[70%]"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="text-lg my-4 font-thin">
                <span className="font-medium">Monappa Technology Series</span>{" "}
                Focused on technology-related content, this series is designed
                for IT professionals, developers, and technology enthusiasts.
                Topics include artificial intelligence, blockchain technology,
                quantum computing, cybersecurity, and data science. The series
                serves as a comprehensive resource for readers seeking knowledge
                and expertise in emerging technological fields.
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Learn more about Monappa Technology Series
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Contact a Monappa Technology Editor
              </p>
            </div>
            {/* <div>
              <img
                src="https://media.springernature.com/full/springer-cms/rest/v1/content/12266692/data/v2"
                alt="logo"
                className="w-[70%]"
              />
            </div> */}
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <p className="text-lg my-4 font-thin">
                <span className="font-medium">
                  Monappa Arts & Literature Series
                </span>{" "}
                Dedicated to the exploration of arts, literature, media studies,
                and languages, this series brings together creative thinkers and
                academics. Authors can delve into diverse cultural expressions,
                literary criticism, visual arts, performing arts, and media
                analysis. The series aims to foster a deeper appreciation for
                artistic and literary contributions across different cultures
                and time periods.
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Learn more about Monappa Arts & Literature Series
              </p>
              <p className="text-cyan-900 text-xl my-4">
                Contact a Monappa Arts Editor
              </p>
            </div>
            {/* <div>
              <img
                src="https://media.springernature.com/full/springer-cms/rest/v1/content/12266696/data/v2"
                alt="logo"
                className="w-[70%]"
              />
            </div> */}
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
          At Monappa Publications, we are committed to supporting authors at
          every stage of their publishing journey. Our comprehensive services,
          resources, and expert guidance ensure that your book reaches its full
          potential, achieving both academic impact and global visibility.
        </p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mt-10">
          <Card
            bgColor={"bg-cyan-900"}
            textColor={"text-white"}
            title={"Book author services"}
            subtitle={
              "We offer a complete suite of services designed to streamline the publishing process and enhance the quality of your work:"
            }
            iconeColor={"white"}
            it={"2xl"}
            sit={"xl"}
            options={[
              "Editing and Proofreading: Our professional editors refine your manuscript to ensure clarity, coherence, and grammatical precision while preserving your unique writing style.",
              "Translation Services: Reach a global audience with expert translation services, ensuring your research is accessible to readers across different languages.",
              "Data Presentation: Present complex information with clear and engaging data visuals that support your research findings effectively.",
              "Formatting Assistance: Our team ensures that your manuscript meets all technical and publishing standards, providing a professional and polished final product.",
            ]}
          />
          <Card
            bgColor={"bg-cyan-700"}
            textColor={"text-white"}
            title={"Book author benefits"}
            subtitle={
              "Publishing with Monappa Publications comes with numerous advantages designed to maximize the reach and impact of your work:"
            }
            iconeColor={"white"}
            it={"2xl"}
            sit={"xl"}
            options={[
              "Global Distribution: Your book will be distributed through various international channels, ensuring it reaches a wide audience.",
              "Increased Visibility: Open access options make your book more discoverable, leading to higher citations and downloads.",
              "Expert Support: Work closely with our editorial and production teams, who provide guidance and feedback throughout the publishing process.",
              "Customized Marketing Campaigns: We promote your book through targeted campaigns, online platforms, and academic networks to enhance its reach.",
              "Flexible Publishing Models: Choose from traditional or open access publishing options that best suit your goals and funding availability.",
            ]}
          />
          <Card
            bgColor={"bg-green-800"}
            textColor={"text-white"}
            title={"Knowledge resources for scientists"}
            iconeColor={"white"}
            subtitle={
              "We provide access to a range of resources to support authors in developing and refining their work:"
            }
            it={"2xl"}
            sit={"xl"}
            options={[
              "Research Round-ups: In-depth literature reviews on your chosen topic, offering comprehensive insights and background information.",
              "Publishing Guides: Step-by-step instructions covering the entire publishing process, from proposal submission to post-publication promotion.",
              "Editorial Policies and Best Practices: Detailed guidelines to help you align your manuscript with our publishing standards.",
              "Diversity, Equity, and Inclusion (DEI) Resources: Tools and guidance to ensure your published work is inclusive and representative.",
            ]}
          />
          <Card
            bgColor={" bg-purple-700"}
            textColor={"text-white"}
            title={"Author tutorials"}
            iconeColor={"white"}
            subtitle={
              "Our collection of tutorials is designed to equip authors with essential knowledge and skills for successful publishing:"
            }
            it={"2xl"}
            sit={"xl"}
            options={[
              "Proposal Writing Workshops: Learn how to draft compelling book proposals that capture editorial interest.",
              "Manuscript Preparation Tutorials: Get tips on structuring your manuscript, enhancing readability, and adhering to academic standards.",
              "Open Access Publishing Insights: Understand the benefits of open access publishing, funding options, and how to maximize reach.",
              "Post-Publication Strategies: Explore techniques for promoting your book, increasing online visibility, and engaging with readers.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
