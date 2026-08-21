import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Pitch from "./pages/Pitch";
import Investor from "./pages/Investor";
import Mentorship from "./pages/Mentorship";
import Resources from "./pages/Resources";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Route>
    </Routes>
  );
}
