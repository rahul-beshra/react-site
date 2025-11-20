import React from 'react';
import Hero from '../components/sections/Hero.jsx';
import Features from '../components/sections/Features.jsx';
import ProjectsPreview from '../components/sections/ProjectsPreview.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import CTA from '../components/sections/CTA.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import useScrollToHash from '../hooks/useScrollToHash.js';

export default function Home() {
  useScrollToHash();

  return (
    <>
      <Hero />
      <Features />
      <ProjectsPreview />
      <Testimonials />
      <CTA />
      <ContactSection />
    </>
  );
}
