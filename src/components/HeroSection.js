export default function HeroSection(){
    return (
        <section className="hero-section">
            <h1>
                👋 Hi, I’m Khaidem Sandip.
            </h1>
            <h2>
                Front-End Engineer | 3 YOE at Amazon
            </h2>
            <p>
                I build performant, accessible, scalable UIs in React & TypeScript.
            </p>
            <div className="view-projects-resume">
                <a href ="#projects" className="view-projects">View Projects →</a>
                <a 
                    href ="/KhaidemSandipGoogleSWEResume.pdf" 
                    className="resume"
                    target="_blank"
                    >
                        Resume
                </a>
            </div>
        </section>
    )
}