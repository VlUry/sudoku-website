import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home.page";
import { SolvedPage } from "./pages/Solved.page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solved" element={<SolvedPage />} />
      </Routes>
    </>
  );
}

export default App;
