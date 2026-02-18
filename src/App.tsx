import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import About from "./pages/About";
import Finance from "./pages/Finance";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import ResourceCenter from "./pages/ResourceCenter";
import Guides from "./pages/Guides";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<ResourceCenter />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<StoryDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Chat Widgets */}
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
