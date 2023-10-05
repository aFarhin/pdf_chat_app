import React from "react";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PDFPage from "./pages/PDFPage";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/upload-pdf-get-answer' element={<PDFPage />} />
        <Route path='/upload-pdf-get-answer' element={<PDFPage />} />
        <Route path='/upload-pdf-get-answer/get-your-answer' element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
