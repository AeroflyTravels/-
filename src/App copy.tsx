import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { FlightBooking } from './pages/FlightBooking';
import { VisaServices } from './pages/VisaServices';
import { TourPackages } from './pages/TourPackages';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Careers } from './pages/Careers';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { OtherServices } from './pages/OtherServices';
import  BlogPost  from "./pages/blogpost"; // Import the BlogPost page
import  Gallery  from "./pages/gallery"; // Import the BlogPost page
import ServiceDetails from "./pages/service";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TrustSection />
              </>
            } />
            <Route path="/" element={<Hero />} />
            <Route path="/nppm" element={<Navigate to="/" />} />
            <Route path="/flights" element={<FlightBooking />} />
            <Route path="/visas" element={<VisaServices />} />
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/other-services" element={<OtherServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} /> {/* New blog post route */}
            <Route path="/gallery" element={<Gallery />} /> {/* ✅ Add Gallery Route */}
            <Route path="/" element={<OtherServices />} />
            <Route path="/service/:title" element={<ServiceDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// Compare this snippet from src/pages/Blog.tsx: