import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection(){
    return (
        <section className="hero-section" id="home">
            <h1>
                👋 Hi, I’m Khaidem Sandip Singha.
            </h1>
            <h2>
            Front-End Engineer | 3.8 Years Experience (3 at Amazon)
            </h2>
            <p>
            I build performant, accessible, and scalable UIs with React & JavaScript, while expanding my expertise in System Design.
            </p>
            <div className="view-projects-resume">
                <a href ="#projects" className="view-projects">View Projects →</a>
                <a 
                    href ={`${process.env.PUBLIC_URL}/KhaidemSandipFrontendEngineer.pdf`} 
                    className="resume"
                    target="_blank"
                    >
                        Resume
                </a>
                <a
                    href="https://leetcode.com/u/Kurosakicoder/"
                    className="leetcode"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                    <SiLeetcode size={20} /> LeetCode
                </a>
                <a
                    href="https://github.com/KaidenCoder"
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                    <FaGithub size={20} /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/khaidemsandip/"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                    <FaLinkedin size={20} /> LinkedIn
                </a>
            </div>
        </section>
    )
}