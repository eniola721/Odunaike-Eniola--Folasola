/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyMe from "./components/WhyMe";
import Vision from "./components/Vision";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProperties />
      <WhyMe />
      <Vision />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

