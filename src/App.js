import React from 'react';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';

import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components */}
      <Hero />
      <Statistics />
      <Solutions />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
