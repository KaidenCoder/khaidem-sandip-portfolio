import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSnapshot from './components/SkillsSnapshot';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SkillsSnapshot />
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
