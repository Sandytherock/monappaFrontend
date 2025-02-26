import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { PublishToArtical } from "./pages/PublishToArtical";
import { PublishABook } from "./pages/PublishaBook";
import { PublishConferenceProceeding } from "./pages/PublishConferenceProcedeeing";
import { BookShowCasePage } from "./pages/BookShowCase";
import { TermsPrivacyPage } from "./pages/TermsPrivacy";
import { MoreInfoPage } from "./pages/MoreInfoPage";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="artical" element={<PublishToArtical />} />
          <Route path="books" element={<PublishABook />} />
          <Route path="conference" element={<PublishConferenceProceeding />} />
          <Route path="book/:id" element={<BookShowCasePage />} />
          <Route
            path="terms-and-privacy-policy/:location"
            element={<TermsPrivacyPage />}
          />
          <Route path="moreinfo/:location" element={<MoreInfoPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
