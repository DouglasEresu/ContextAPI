import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Navigate from "./pages/Navigate";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}