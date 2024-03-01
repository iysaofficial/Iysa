import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import AppLoader from "./components/AppLoader";

// Import Landing
import Landing from "./pages/home/Landing";

// Import CompanyProfile
import CompanyProfile from "./pages/companyprofile/CompanyProfilePage";

// Import Curation
import CurationOSPCPage from "./pages/curation/CurationOSPCPage";
import CurationLKTINComp from "./components/curation/CurationLKTINComp";
import CurasiPage from "./pages/curasiinfo/CurasiPage";

// Calender Event
import CalenderEvent from "./pages/calender/CalenderEvent";

// Import Team
import ExpertTeam from "./components/team/ExpertTeam";
import ExpertStaff from "./components/team/ExpertStaff";

// Import Newsletter 2022
import NewsletterPage from "./pages/newsletter/NewsletterPage";
import NewsletterDetailPage1 from "./pages/newsletter/NewsletterDetailPage1";
import NewsletterDetailPage2 from "./pages/newsletter/NewsletterDetailPage2";
import NewsletterDetailPage3 from "./pages/newsletter/NewsletterDetailPage3";
import NewsletterDetailPage4 from "./pages/newsletter/NewsletterDetailPage4";
import NewsletterDetailPage5 from "./pages/newsletter/NewsletterDetailPage5";
import NewsletterDetailPage6 from "./pages/newsletter/NewsletterDetailPage6";
import NewsletterDetailPage7 from "./pages/newsletter/NewsletterDetailPage7";
import NewsletterDetailPage8 from "./pages/newsletter/NewsletterDetailPage8";
import NewsletterDetailPage9 from "./pages/newsletter/NewsletterDetailPage9";
import NewsletterDetailPage10 from "./pages/newsletter/NewsletterDetailPage10";
import NewsletterDetailPage11 from "./pages/newsletter/NewsletterDetailPage11";
import NewsletterDetailPage12 from "./pages/newsletter/NewsletterDetailPage12";

// Import Newsletter 2023
import Newsletter2023DetailPage1 from "./pages/newsletter/Newsletter2023DetailPage1";
import Newsletter2023DetailPage2 from "./pages/newsletter/Newsletter2023DetailPage2";
import Newsletter2023DetailPage3 from "./pages/newsletter/Newsletter2023DetailPage3";
import Newsletter2023DetailPage4 from "./pages/newsletter/Newsletter2023DetailPage4";
import Newsletter2023DetailPage5 from "./pages/newsletter/Newsletter2023DetailPage5";
import Newsletter2023DetailPage6 from "./pages/newsletter/Newsletter2023DetailPage6";
import Newsletter2023DetailPage7 from "./pages/newsletter/Newsletter2023DetailPage7";
import Newsletter2023DetailPage8 from "./pages/newsletter/Newsletter2023DetailPage8";
import Newsletter2023DetailPage13 from "./pages/newsletter/Newsletter2023DetailPage13";
import Newsletter2023DetailPage14 from "./pages/newsletter/Newsletter2023DetailPage14";
import Newsletter2023DetailPage15 from "./pages/newsletter/Newsletter2023DetailPage15";
import Newsletter2023DetailPage16 from "./pages/newsletter/Newsletter2023DetailPage16";

// Import Newsletter 2023
import Newsletter2024Detail1 from "./components/newsletter/Newsletter2024Detail1";


// Import Gallery
import GalleryPhoto from "./pages/gallery/GalleryPhoto";
import GalleryVideo from "./pages/gallery/GalleryVideo";

// Import FAQ
import FaqPage from "./pages/faq/FaqPage";

// Import Contact
import ContactPage from "./pages/contact/ContactPage";

// Import Event Poster
import AllEventPage from "./pages/event/AllEventPage";
import EventPage1 from "./pages/event/EventPage1";
import EventPage2 from "./pages/event/EventPage2";
import EventPage3 from "./pages/event/EventPage3";
import EventPage4 from "./pages/event/EventPage4";
import EventPage5 from "./pages/event/EventPage5";
import EventPage6 from "./pages/event/EventPage6";
import EventPage7 from "./pages/event/EventPage7";
import EventPage8 from "./pages/event/EventPage8";
import EventPage9 from "./pages/event/EventPage9";
import EventPage10 from "./pages/event/EventPage10";
import EventPage11 from "./pages/event/EventPage11";
import EventPage12 from "./pages/event/EventPage12";
import EventPage13 from "./pages/event/EventPage13";
import EventPage14 from "./pages/event/EventPage14";
import EventPage15 from "./pages/event/EventPage15";
import EventPage16 from "./pages/event/EventPage16";
import EventPage17 from "./pages/event/EventPage17";
import EventPage18 from "./pages/event/EventPage18";
import EventPage19 from "./pages/event/EventPage19";
import EventPage20 from "./pages/event/EventPage20";

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

            {/* Calender Event */}
            <Route path="/CalenderEvent" element={<CalenderEvent />} />

            {/* Curation */}
            <Route path="/CurationOSPC" element={<CurationOSPCPage />} />
            <Route path="/CurationLKTIN" element={<CurationLKTINComp />} />
            <Route path="/Curasi" element={<CurasiPage />} />

            {/* Expert Team */}
            <Route path="/ExpertTeam" element={<ExpertTeam />} />
            <Route path="/ExpertStaff" element={<ExpertStaff />} />

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
            <Route path="/EventPage1" element={<EventPage1 />} />
            <Route path="/EventPage2" element={<EventPage2 />} />
            <Route path="/EventPage3" element={<EventPage3 />} />
            <Route path="/EventPage4" element={<EventPage4 />} />
            <Route path="/EventPage5" element={<EventPage5 />} />
            <Route path="/EventPage6" element={<EventPage6 />} />
            <Route path="/EventPage7" element={<EventPage7 />} />
            <Route path="/EventPage8" element={<EventPage8 />} />
            <Route path="/EventPage9" element={<EventPage9 />} />
            <Route path="/EventPage10" element={<EventPage10 />} />
            <Route path="/EventPage11" element={<EventPage11 />} />
            <Route path="/EventPage12" element={<EventPage12 />} />
            <Route path="/EventPage13" element={<EventPage13 />} />
            <Route path="/EventPage14" element={<EventPage14 />} />
            <Route path="/EventPage15" element={<EventPage15 />} />
            <Route path="/EventPage16" element={<EventPage16 />} />
            <Route path="/EventPage17" element={<EventPage17 />} />
            <Route path="/EventPage18" element={<EventPage18 />} />
            <Route path="/EventPage19" element={<EventPage19 />} />
            <Route path="/EventPage20" element={<EventPage20 />} />

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
              element={<Newsletter2024Detail1 />}
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
