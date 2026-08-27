import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Admissions from "./pages/Admissions";
import Notices from "./pages/Notices";
import NewsEvents from "./pages/NewsEvents";
import Examinations from "./pages/Examinations";
import Downloads from "./pages/Downloads";
import StudentServices from "./pages/StudentServices";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="notices" element={<Notices />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="examinations" element={<Examinations />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="student-services" element={<StudentServices />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
