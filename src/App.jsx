import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        <Hero />
        <Hero2 />
        <div>
        <Projects/>
        </div>
        <Contact />
      <footer className="bg-[#003329] text-[#fffffe] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:text-[20px] lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Franklin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;