import { useLocation } from "react-router-dom";
import { MonappaTerms } from "../components/MonappaTerms";
import { Terms } from "../components/Terms";
import { UserPolicy } from "../components/UserPolicy";
import { useEffect } from "react";

export function TermsPrivacyPage() {
  const location = useLocation();
  const pathName = location.pathname.substring(26);

  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(`${pathName}`);
      if (section) {
        const offsetTop =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [pathName]);

  return (
    <>
      <MonappaTerms />
      <UserPolicy />
      <Terms />
    </>
  );
}
