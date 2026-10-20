import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Navbar, Footer, ScrollToTop } from "./layout";
import {
  Home, About, Research, ResearchDetail, Work, WorkDetail, Projects, Awards,
  Publications, Volunteering, Sports, Contact, NotFound,
} from "./pages";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Analytics />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/:slug" element={<ResearchDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
