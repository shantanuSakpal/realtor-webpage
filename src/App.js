import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Upload } from "./components/Upload";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
