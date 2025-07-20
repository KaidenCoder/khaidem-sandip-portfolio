import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSnapshot from './components/SkillsSnapshot';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <SkillsSnapshot />
      <WorkExperience/>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </div>
  );
}

export default App;
