import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
