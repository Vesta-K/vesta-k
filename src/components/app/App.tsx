import { Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
// import PageWrapper from "../layout/PageWrapper";
import About from "../pages/About";
import Services from "../pages/Services";
import MainPage from "../pages/mainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
