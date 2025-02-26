import React from "react";

const steps = [
  "Biological Sciences (e.g., microbiology, ecology)",
  "Physical Sciences (e.g., physics, chemistry)",
  "Computer Science and Information Technology (e.g., AI, cybersecurity)",
  "Engineering (e.g., mechanical, civil engineering)",
  "Sociology (e.g., social theory, urban studies)",
  "Psychology (e.g., behavioral science, therapy)",
  "Economics (e.g., macroeconomics, trade policy)",
  "Literature and Language Studies (e.g., novels, linguistics)",
  "History (e.g., ancient history, modern events)",
  "Arts and Media (e.g., film, graphic design)",
  "Education and Pedagogy (e.g., teaching methods, ed-tech)",
  "Business and Management (e.g., leadership, finance)",
  "Health and Medicine (e.g., public health, medical research)",
  "Environmental Studies (e.g., climate change, conservation)",
  "Law and Policy (e.g., constitutional law, governance)",
  "Agriculture and Food Sciences (e.g., agronomy, nutrition)",
  "Interdisciplinary Studies (e.g., science and culture, tech and society)",
];

export function SearchAllJournal() {
  return (
    <div className="w-full flex justify-center p-6" id="SAJ">
      <div className="md:w-[78%] max-md:w-[95%]">
        <h1 className="text-2xl font-bold mb-4">
          Choose the Right Book for Your Chapter Publication at Monappa
          Publications
        </h1>

        <section id="general" className="mb-6 text-xl flex flex-col gap-5 text-justify">
          <p>
            At Monappa Publications, we provide a rich and varied selection of
            books where you can publish your chapter, spanning numerous fields
            to suit your expertise. If your work leans toward the natural world,
            our Biological Sciences books welcome chapters on topics like
            microbiology, botany, or evolutionary biology, while Physical
            Sciences books offer a home for explorations in chemistry, physics,
            or astronomy. For those immersed in technology, our Computer Science
            and Information Technology titles invite contributions on software
            development, data science, or emerging fields like quantum
            computing, and our Engineering books cover everything from
            structural design to renewable energy innovations.
          </p>

          <p>
            Social scientists have plenty of options too. Our Sociology books
            are perfect for chapters on social structures, inequality, or
            cultural shifts, while Psychology titles delve into cognition,
            behavioral studies, or mental health advancements. Economics books
            provide a platform for analyses of markets, fiscal policy, or global
            trade. If humanities are your passion, consider our Literature and
            Language Studies books, which embrace chapters on literary
            criticism, poetry, or linguistic theory, or our History titles,
            ideal for historical narratives, archaeological insights, or
            regional studies. Creative souls can turn to Arts and Media books,
            where chapters on painting, theater, or digital storytelling find
            their place.
          </p>
          <p>
            Education enthusiasts might choose our Education and Pedagogy books,
            which focus on classroom strategies, educational technology, or
            curriculum development, while business-minded authors can contribute
            to Business and Management titles exploring corporate strategy,
            marketing trends, or entrepreneurship. For those in healthcare, our
            Health and Medicine books accept chapters on clinical practices,
            epidemiology, or healthcare policy, and Environmental Studies books
            tackle climate science, biodiversity, or sustainable practices.
            Legal scholars can submit to Law and Policy books addressing
            jurisprudence, human rights, or regulatory frameworks, and
            Agriculture and Food Sciences books invite work on crop technology,
            food security, or agricultural economics.
          </p>

          <p>
            If your research bridges multiple disciplines, our Interdisciplinary
            Studies books are the perfect fit, encouraging chapters that weave
            together perspectives—like technology and ethics, or science and
            society—for a holistic impact. With such a wide range, finding the
            right book is easy: search by keyword (e.g., “AI,” “Victorian
            literature,” “sustainability”) or browse these categories on our
            website. Each book comes with submission guidelines detailing open
            access options and fees, so you can align your chapter with the
            perfect publication at Monappa Publications.
          </p>

          <hr />

          <h2 className="font-bold">Suggested Book Categories:</h2>
          <p>
            Here’s a concise breakdown of the categories mentioned above, which
            you can use as a reference for your website or further development:
          </p>
          <ul className="list-disc pl-10 flex flex-col gap-3">
            {steps.map((items) => (
              <li>{items}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
