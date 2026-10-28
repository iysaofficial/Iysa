import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import BackToTopBtn from "./components/layout/BackToTopBtn";
import AppLoader from "./components/layout/AppLoader";

// Import Landing
import Landing from "./pages/home/Landing";

// Import CompanyProfile
import CompanyProfile from "./pages/companyprofile/CompanyProfilePage";

// Import Curation
import CurationOSPCPage from "./pages/curation/CurationOSPCPage";
import CurationLKTINComp from "./components/curation/CurationLKTINComp";
import CurasiPage from "./pages/curation/CurasiPage";

// Calender Event
import CalenderEvent from "./pages/calendar/CalenderEvent";

// All Event Web
import AllEventWebPage from "./pages/events/website-events/AllEventWebPage";

// All Event Affiliation Web
import AllEventAffiliationWebPage from "./pages/events/affiliation-website/AllEventAffiliationWebPage";
import EventAffiliationPage1 from "./pages/events/affiliation-website/EventAffiliationPage1";
import EventAffiliationPage2 from "./pages/events/affiliation-website/EventAffiliationPage2";
import EventAffiliationPage3 from "./pages/events/affiliation-website/EventAffiliationPage3";
import EventAffiliationPage4 from "./pages/events/affiliation-website/EventAffiliationPage4";
import EventAffiliationPage5 from "./pages/events/affiliation-website/EventAffiliationPage5";
import EventAffiliationPage6 from "./pages/events/affiliation-website/EventAffiliationPage6";
import EventAffiliationPage7 from "./pages/events/affiliation-website/EventAffiliationPage7";
import EventAffiliationPage8 from "./pages/events/affiliation-website/EventAffiliationPage8";
import EventAffiliationPage9 from "./pages/events/affiliation-website/EventAffiliationPage9";
import EventAffiliationPage10 from "./pages/events/affiliation-website/EventAffiliationPage10";
import EventAffiliationPage11 from "./pages/events/affiliation-website/EventAffiliationPage11";
import EventAffiliationPage12 from "./pages/events/affiliation-website/EventAffiliationPage12";
import EventAffiliationPage13 from "./pages/events/affiliation-website/EventAffiliationPage13";

// Import Team
import ExpertTeam from "./components/team/ExpertTeam";
// import ExpertStaff from "./components/team/ExpertStaff";

// Import Newsletter 2022
import NewsletterPage from "./pages/newsletter/NewsletterPage";
import NewsletterDetailPage1 from "./pages/newsletter/2022/NewsletterDetailPage1";
import NewsletterDetailPage2 from "./pages/newsletter/2022/NewsletterDetailPage2";
import NewsletterDetailPage3 from "./pages/newsletter/2022/NewsletterDetailPage3";
import NewsletterDetailPage4 from "./pages/newsletter/2022/NewsletterDetailPage4";
import NewsletterDetailPage5 from "./pages/newsletter/2022/NewsletterDetailPage5";
import NewsletterDetailPage6 from "./pages/newsletter/2022/NewsletterDetailPage6";
import NewsletterDetailPage7 from "./pages/newsletter/2022/NewsletterDetailPage7";
import NewsletterDetailPage8 from "./pages/newsletter/2022/NewsletterDetailPage8";
import NewsletterDetailPage9 from "./pages/newsletter/2022/NewsletterDetailPage9";
import NewsletterDetailPage10 from "./pages/newsletter/2022/NewsletterDetailPage10";
import NewsletterDetailPage11 from "./pages/newsletter/2022/NewsletterDetailPage11";
import NewsletterDetailPage12 from "./pages/newsletter/2022/NewsletterDetailPage12";

// Import Newsletter 2023
import Newsletter2023DetailPage1 from "./pages/newsletter/2023/Newsletter2023DetailPage1";
import Newsletter2023DetailPage2 from "./pages/newsletter/2023/Newsletter2023DetailPage2";
import Newsletter2023DetailPage3 from "./pages/newsletter/2023/Newsletter2023DetailPage3";
import Newsletter2023DetailPage4 from "./pages/newsletter/2023/Newsletter2023DetailPage4";
import Newsletter2023DetailPage5 from "./pages/newsletter/2023/Newsletter2023DetailPage5";
import Newsletter2023DetailPage6 from "./pages/newsletter/2023/Newsletter2023DetailPage6";
import Newsletter2023DetailPage7 from "./pages/newsletter/2023/Newsletter2023DetailPage7";
import Newsletter2023DetailPage8 from "./pages/newsletter/2023/Newsletter2023DetailPage8";
import Newsletter2023DetailPage13 from "./pages/newsletter/2023/Newsletter2023DetailPage13";
import Newsletter2023DetailPage14 from "./pages/newsletter/2023/Newsletter2023DetailPage14";
import Newsletter2023DetailPage15 from "./pages/newsletter/2023/Newsletter2023DetailPage15";
import Newsletter2023DetailPage16 from "./pages/newsletter/2023/Newsletter2023DetailPage16";

// Import Newsletter 2024
import Newsletter2024DetailPage1 from "./pages/newsletter/2024/Newsletter2024DetailPage1";
import Newsletter2024DetailPage2 from "./pages/newsletter/2024/Newsletter2024DetailPage2";
import Newsletter2024DetailPage3 from "./pages/newsletter/2024/Newsletter2024DetailPage3";
import Newsletter2024DetailPage4 from "./pages/newsletter/2024/Newsletter2024DetailPage4";
import Newsletter2024DetailPage5 from "./pages/newsletter/2024/Newsletter2024DetailPage5";
import Newsletter2024DetailPage6 from "./pages/newsletter/2024/Newsletter2024DetailPage6";
import Newsletter2024DetailPage7 from "./pages/newsletter/2024/Newsletter2024DetailPage7";
import Newsletter2024DetailPage8 from "./pages/newsletter/2024/Newsletter2024DetailPage8";
import Newsletter2024DetailPage9 from "./pages/newsletter/2024/Newsletter2024DetailPage9";
import Newsletter2024DetailPage10 from "./pages/newsletter/2024/Newsletter2024DetailPage10";
import Newsletter2024DetailPage11 from "./pages/newsletter/2024/Newsletter2024DetailPage11";
import Newsletter2024DetailPage12 from "./pages/newsletter/2024/Newsletter2024DetailPage12";

// Import Newsletter 2025
import Newsletter2025DetailPage1 from "./pages/newsletter/2025/Newsletter2025DetailPage1";
import Newsletter2025DetailPage2 from "./pages/newsletter/2025/Newsletter2025DetailPage2";
import Newsletter2025DetailPage3 from "./pages/newsletter/2025/Newsletter2025DetailPage3";
import Newsletter2025DetailPage4 from "./pages/newsletter/2025/Newsletter2025DetailPage4";
import Newsletter2025DetailPage5 from "./pages/newsletter/2025/Newsletter2025DetailPage5";
import Newsletter2025DetailPage6 from "./pages/newsletter/2025/Newsletter2025DetailPage6";
import Newsletter2025DetailPage7 from "./pages/newsletter/2025/Newsletter2025DetailPage7";
import Newsletter2025DetailPage8 from "./pages/newsletter/2025/Newsletter2025DetailPage8";
import Newsletter2025DetailPage9 from "./pages/newsletter/2025/Newsletter2025DetailPage9";

// Import Newsletter 2026
import Newsletter2026DetailPage1 from "./pages/newsletter/2026/Newsletter2026DetailPage1";
import Newsletter2026DetailPage2 from "./pages/newsletter/2026/Newsletter2026DetailPage2";
import Newsletter2026DetailPage3 from "./pages/newsletter/2026/Newsletter2026DetailPage3";

// Import Gallery
import GalleryPhoto from "./pages/gallery/GalleryPhoto";
import GalleryVideo from "./pages/gallery/GalleryVideo";

// Import FAQ
import FaqPage from "./pages/faq/FaqPage";

// Import Contact
import ContactPage from "./pages/contact/ContactPage";

// Import Event Poster
import AllEventPage from "./pages/events/iysa-events/AllEventPage";
import EventPage from "./pages/events/iysa-events/EventPage";

// import event affiliasi
import AllEventAffiliation from "./pages/events/affiliation-events/AllEventAffiliation";
import OurTeam from "./components/companyprofile/OurTeam";
import Newsletter2025DetailPage10 from "./pages/newsletter/2025/Newsletter2025DetailPage10";

function App() {
  return (
    <>
      <AppLoader>
        <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Company Profile */}
            <Route path="/About" element={<CompanyProfile />} />
            <Route path="/OurTeam" element={<OurTeam />} />

            {/* Calender Event */}
            <Route path="/CalenderEvent" element={<CalenderEvent />} />

            {/* All Event Web */}
            <Route path="/AllEventWebPage" element={<AllEventWebPage />} />

            {/* All Event Affiliation Web */}
            <Route
              path="/AllEventAffiliationWebPage"
              element={<AllEventAffiliationWebPage />}
            />
            <Route
              path="/EventAffiliationPage1"
              element={<EventAffiliationPage1 />}
            />
            <Route
              path="/EventAffiliationPage2"
              element={<EventAffiliationPage2 />}
            />
            <Route
              path="/EventAffiliationPage3"
              element={<EventAffiliationPage3 />}
            />
            <Route
              path="/EventAffiliationPage4"
              element={<EventAffiliationPage4 />}
            />
            <Route
              path="/EventAffiliationPage5"
              element={<EventAffiliationPage5 />}
            />
            <Route
              path="/EventAffiliationPage6"
              element={<EventAffiliationPage6 />}
            />
            <Route
              path="/EventAffiliationPage7"
              element={<EventAffiliationPage7 />}
            />
            <Route
              path="/EventAffiliationPage8"
              element={<EventAffiliationPage8 />}
            />
            <Route
              path="/EventAffiliationPage9"
              element={<EventAffiliationPage9 />}
            />
            <Route
              path="/EventAffiliationPage10"
              element={<EventAffiliationPage10 />}
            />
            <Route
              path="/EventAffiliationPage11"
              element={<EventAffiliationPage11 />}
            />
            <Route
              path="/EventAffiliationPage12"
              element={<EventAffiliationPage12 />}
            />
            <Route
              path="/EventAffiliationPage13"
              element={<EventAffiliationPage13 />}
            />

            {/* Curation */}
            <Route path="/CurationOSPC" element={<CurationOSPCPage />} />
            <Route path="/CurationLKTIN" element={<CurationLKTINComp />} />
            <Route path="/Curasi" element={<CurasiPage />} />

            {/* Expert Team */}
            <Route path="/ExpertTeam" element={<ExpertTeam />} />
            {/* <Route path="/ExpertStaff" element={<ExpertStaff />} /> */}

            {/* Gallery Photo */}
            <Route path="/GalleryPhoto" element={<GalleryPhoto />} />
            <Route path="/GalleryVideo" element={<GalleryVideo />} />

            {/* Newsletter */}
            <Route path="/NewsletterPage" element={<NewsletterPage />} />
            <Route
              path="/NewsletterDetailPage1"
              element={<NewsletterDetailPage1 />}
            />

            {/* FAQ */}
            <Route path="/FaqPage" element={<FaqPage />} />

            {/* Contact */}
            <Route path="/ContactPage" element={<ContactPage />} />

            {/* Event */}
            <Route path="/AllEventPage" element={<AllEventPage />} />
            <Route path="/Event/:id" element={<EventPage />} />

            {/* event affiliasi */}
            <Route
              path="/AllEventAffiliation"
              element={<AllEventAffiliation />}
            />

            {/* Newsletter */}
            <Route path="/NewsletterPage" element={<NewsletterPage />} />

            {/* Newsletter 2022 */}
            <Route
              path="/NewsletterDetailPage1"
              element={<NewsletterDetailPage1 />}
            />
            <Route
              path="/NewsletterDetailPage2"
              element={<NewsletterDetailPage2 />}
            />
            <Route
              path="/NewsletterDetailPage3"
              element={<NewsletterDetailPage3 />}
            />
            <Route
              path="/NewsletterDetailPage4"
              element={<NewsletterDetailPage4 />}
            />
            <Route
              path="/NewsletterDetailPage5"
              element={<NewsletterDetailPage5 />}
            />
            <Route
              path="/NewsletterDetailPage6"
              element={<NewsletterDetailPage6 />}
            />
            <Route
              path="/NewsletterDetailPage7"
              element={<NewsletterDetailPage7 />}
            />
            <Route
              path="/NewsletterDetailPage8"
              element={<NewsletterDetailPage8 />}
            />
            <Route
              path="/NewsletterDetailPage9"
              element={<NewsletterDetailPage9 />}
            />
            <Route
              path="/NewsletterDetailPage10"
              element={<NewsletterDetailPage10 />}
            />
            <Route
              path="/NewsletterDetailPage11"
              element={<NewsletterDetailPage11 />}
            />
            <Route
              path="/NewsletterDetailPage12"
              element={<NewsletterDetailPage12 />}
            />

            {/* Newsletter 2023 */}
            <Route
              path="/Newsletter2023DetailPage1"
              element={<Newsletter2023DetailPage1 />}
            />
            <Route
              path="/Newsletter2023DetailPage2"
              element={<Newsletter2023DetailPage2 />}
            />
            <Route
              path="/Newsletter2023DetailPage3"
              element={<Newsletter2023DetailPage3 />}
            />
            <Route
              path="/Newsletter2023DetailPage4"
              element={<Newsletter2023DetailPage4 />}
            />
            <Route
              path="/Newsletter2023DetailPage5"
              element={<Newsletter2023DetailPage5 />}
            />
            <Route
              path="/Newsletter2023DetailPage6"
              element={<Newsletter2023DetailPage6 />}
            />
            <Route
              path="/Newsletter2023DetailPage7"
              element={<Newsletter2023DetailPage7 />}
            />
            <Route
              path="/Newsletter2023DetailPage8"
              element={<Newsletter2023DetailPage8 />}
            />
            <Route
              path="/Newsletter2023DetailPage13"
              element={<Newsletter2023DetailPage13 />}
            />
            <Route
              path="/Newsletter2023DetailPage14"
              element={<Newsletter2023DetailPage14 />}
            />
            <Route
              path="/Newsletter2023DetailPage15"
              element={<Newsletter2023DetailPage15 />}
            />
            <Route
              path="/Newsletter2023DetailPage16"
              element={<Newsletter2023DetailPage16 />}
            />
            {/* 2024 */}
            <Route
              path="/Newsletter2024DetailPage1"
              element={<Newsletter2024DetailPage1 />}
            />
            <Route
              path="/Newsletter2024DetailPage2"
              element={<Newsletter2024DetailPage2 />}
            />
            <Route
              path="/Newsletter2024DetailPage3"
              element={<Newsletter2024DetailPage3 />}
            />
            <Route
              path="/Newsletter2024DetailPage4"
              element={<Newsletter2024DetailPage4 />}
            />
            <Route
              path="/Newsletter2024DetailPage5"
              element={<Newsletter2024DetailPage5 />}
            />
            <Route
              path="/Newsletter2024DetailPage6"
              element={<Newsletter2024DetailPage6 />}
            />
            <Route
              path="/Newsletter2024DetailPage7"
              element={<Newsletter2024DetailPage7 />}
            />
            <Route
              path="/Newsletter2024DetailPage8"
              element={<Newsletter2024DetailPage8 />}
            />
            <Route
              path="/Newsletter2024DetailPage9"
              element={<Newsletter2024DetailPage9 />}
            />
            <Route
              path="/Newsletter2024DetailPage10"
              element={<Newsletter2024DetailPage10 />}
            />
            <Route
              path="/Newsletter2024DetailPage11"
              element={<Newsletter2024DetailPage11 />}
            />
            <Route
              path="/Newsletter2024DetailPage12"
              element={<Newsletter2024DetailPage12 />}
            />
            {/* 2025 Newsletter */}
            <Route
              path="/Newsletter2025DetailPage1"
              element={<Newsletter2025DetailPage1 />}
            />
            <Route
              path="/Newsletter2025DetailPage2"
              element={<Newsletter2025DetailPage2 />}
            />
            <Route
              path="/Newsletter2025DetailPage3"
              element={<Newsletter2025DetailPage3 />}
            />
            <Route
              path="/Newsletter2025DetailPage4"
              element={<Newsletter2025DetailPage4 />}
            />
            <Route
              path="/Newsletter2025DetailPage5"
              element={<Newsletter2025DetailPage5 />}
            />
            <Route
              path="/Newsletter2025DetailPage6"
              element={<Newsletter2025DetailPage6 />}
            />
            <Route
              path="/Newsletter2025DetailPage7"
              element={<Newsletter2025DetailPage7 />}
            />
            <Route
              path="/Newsletter2025DetailPage8"
              element={<Newsletter2025DetailPage8 />}
            />
            <Route
              path="/Newsletter2025DetailPage9"
              element={<Newsletter2025DetailPage9 />}
            />
            <Route
              path="/Newsletter2025DetailPage10"
              element={<Newsletter2025DetailPage10 />}
            />
            {/* 2026 Newsletter */}
            <Route
              path="/Newsletter2026DetailPage1"
              element={<Newsletter2026DetailPage1 />}
            />
            <Route
              path="/Newsletter2026DetailPage2"
              element={<Newsletter2026DetailPage2 />}
            />
            <Route
              path="/Newsletter2026DetailPage3"
              element={<Newsletter2026DetailPage3 />}
            />
          </Routes>
        </Router>
        <BackToTopBtn></BackToTopBtn>
        <Footer />
      </AppLoader>
    </>
  );
}

export default App;
