import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OnboardingForm from './components/OnboardingForm';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  if (showOnboarding) {
    return <OnboardingForm />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero onGetStarted={() => setShowOnboarding(true)} />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;