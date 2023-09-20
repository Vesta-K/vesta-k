import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import Services from "../pages/Services";
import About from "../pages/About";

export default function PageWrapper() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
