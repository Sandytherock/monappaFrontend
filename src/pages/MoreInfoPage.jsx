import { useLocation } from "react-router-dom";
import { LearnMoreAboutOpenAccess } from "../components/LearnMoreAboutOpenAccess";
import { LearnMoreAboutOpenAccessThree } from "../components/LearnMoreAboutOpenAccessThree";
import { LearnMoreAboutOpenAccessTwo } from "../components/LearnMoreAboutOpenAccessTwo";
import { SearchAllJournal } from "../components/SearchAllJournals";
import { useEffect } from "react";

export function MoreInfoPage() {
  const location = useLocation();
  const pathName = location.pathname.substring(10);

  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(`${pathName}`);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [pathName]);
  return (
    <>
      <LearnMoreAboutOpenAccess />
      <LearnMoreAboutOpenAccessTwo />
      <SearchAllJournal />
      <LearnMoreAboutOpenAccessThree />
    </>
  );
}
