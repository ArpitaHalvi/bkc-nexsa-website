import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import BkcSeries from "./pages/BkcSeries.jsx";
import NexsaSeries from "./pages/NexsaSeries.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs.jsx";
import SmoothScrollProvider from "./components/SmoothScrollProvider.jsx";

function App() {
  return (
    <SmoothScrollProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/bkc-series" element={<BkcSeries />} />
        <Route path="/nexsa-series" element={<NexsaSeries />} />
      </Routes>
      <Footer></Footer>
    </SmoothScrollProvider>
  );
}

export default App;
