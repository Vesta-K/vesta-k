import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import Services from "../pages/Services";
import About from "../pages/About";

export default function PageWrapper() {
  return (
    <Routes>
      <Route path="/vesta-k" element={<MainPage />} />
      <Route path="/vesta-k/services" element={<Services />} />
      <Route path="/vesta-k/about" element={<About />} />
    </Routes>
  );
}
