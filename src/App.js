import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
