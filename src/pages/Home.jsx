import { PageTopImage } from "../components/PageTopImage";
import { Card } from "../components/Card";

export function Home() {
  return (
    <div className="flex-1">
      <PageTopImage
        imageUrl={
          "https://media.springernature.com/full/springer-cms/rest/v1/content/16668868/data/v2"
        }
        text={"Amplify Your Impact. Expand Your Reach. Publish with Purpose."}
        ih={10}
        lih={17}
        sih={10}
      />

      <div className="w-full flex justify-center px-5 py-10">
        <div className="w-full max-w-[76rem]">
          <p className="text-xl">
            <span className="font-bold">Monappa Publications </span> is a
            progressive publisher focused on delivering high-quality book
            content spanning a wide array of disciplines.
          </p>
          <p className="text-xl mt-3 text-justify">
            {" "}
            We offer authors the flexibility of standard publication cost or
            open access with transparent fees, supported by our skilled
            Publications Team. Featuring diverse categories such as Business and
            Management and Interdisciplinary Studies, our books are designed to
            engage global readers with impactful, well-crafted content.
          </p>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-10">
            <Card
              bgColor={"bg-cyan-950"}
              textColor={"text-white"}
              title={"Publish an Chapter"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
              onClick={"/artical"}
            />
            <Card
              bgColor={"bg-cyan-600"}
              textColor={"text-white"}
              title={"Publish a Book"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
              onClick={"/books"}
            />
            <Card
              bgColor={"bg-cyan-900"}
              textColor={"text-white"}
              title={"List of Books"}
              iconeColor={"white"}
              it={"2xl"}
              sit={"xl"}
              onClick={"/conference"}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-5 py-10 bg-gray-200">
        <div className="w-full max-w-[76rem]">
          <p className="text-4xl font-light">
            Learn more about publishing with us
          </p>
          <hr className="my-4 h-0.5 bg-white border-0" />
          <div className="grid grid-cols-5 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-6 mt-6">
            <Card
              bgColor={"bg-white"}
              textColor={"text-black/80"}
              title={"Submission Received"}
              iconeColor={"black"}
              it={"xl"}
              sit={"md"}
              subtitle={
                "Your manuscript has been successfully submitted to Monappa Publications, marking the start of our evaluation process."
              }
            />
            <Card
              bgColor={"bg-white"}
              textColor={"text-black/80"}
              title={"Review by Submissions Editor"}
              iconeColor={"black"}
              it={"xl"}
              sit={"md"}
              subtitle={
                "Our Submissions Editor, based in our London office, will carefully review your manuscript to assess its suitability for publication."
              }
            />
            <Card
              bgColor={"bg-white"}
              textColor={"text-black/80"}
              title={"Feedback Provided"}
              iconeColor={"black"}
              it={"xl"}
              sit={"md"}
              subtitle={
                "You will receive feedback from the Submissions Editor, detailing their thoughts and any recommendations based on their review."
              }
            />
            <Card
              bgColor={"bg-white"}
              textColor={"text-black/80"}
              title={"Contract Offer (If Successful)"}
              iconeColor={"black"}
              it={"xl"}
              sit={"md"}
              subtitle={
                "If your manuscript is accepted, we will extend a formal contract offer outlining the terms for publishing with Monappa Publications."
              }
            />
            <Card
              bgColor={"bg-white"}
              textColor={"text-black/80"}
              title={"Next Steps"}
              iconeColor={"black"}
              it={"xl"}
              sit={"md"}
              subtitle={
                "Upon signing the contract, we’ll guide you through the subsequent stages to bring your work to publication, ensuring a smooth and collaborative process."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
