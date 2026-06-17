import { useState } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import About from './sections/About';
import Education from './sections/Education';
import Stack from './sections/Stack';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Marquee />
        <About />
        <Education />
        <Stack />
        <Projects searchQuery={searchQuery} onClearSearch={() => setSearchQuery('')} />
        <Contact />
      </main>
    </>
  );
}
