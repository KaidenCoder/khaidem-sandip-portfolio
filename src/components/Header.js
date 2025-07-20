export default function Header() {
    return (
        <header className="header-element">
            <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} className="header-logo" alt="Khaidem Sandip profile" />
                <span className="logo-name">Sandip</span>
            </div>
            <nav className="nav-links">
                <a href="#home" className="page-link">Home</a>
                <a href="#experience" className="page-link">Experience</a>
                <a href="#projects" className="page-link">Projects</a>  
                <a href="#about" className="page-link">About</a>
                <a href="#contact" className="page-link">Contact</a>
            </nav>
        </header>
    );
}
