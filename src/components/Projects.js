export default function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-content">
                <h3>Featured Projects</h3>
                <div className="project-list">
                    <div className="project-item">
                        <h4>Hacker News</h4>
                        <p>Built a Hacker News client using Context API and custom hooks for clean state management. Added pagination, topic filtering, and post detail routing.</p>
                        <img src={`${process.env.PUBLIC_URL}/hacker-news-homepage.png`} className="project-image" alt="Hacker News Project" />
                        <div className="project-links">
                            <a href="https://khaidemsandiphackernews.netlify.app/" target="_blank" rel="noreferrer">Live Demo →</a>
                            <a href="https://github.com/KaidenCoder/HackerNews/tree/main" target="_blank" rel="noreferrer">GitHub Repo →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
