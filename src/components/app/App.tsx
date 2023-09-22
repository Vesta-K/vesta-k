import { Routes, Route } from "react-router-dom";
import Header from "../layout/Header";
// import PageWrapper from "../layout/PageWrapper";
import About from "../pages/About";
import Services from "../pages/Services";
import MainPage from "../pages/mainPage";
import Footer from "../layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/vesta-k/" element={<MainPage />} />
        <Route path="/vesta-k/services" element={<Services />} />
        <Route path="/vesta-k/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
