import {BrowserRoute, Router, Routes} from 'react-router-dom';
export default function Header(){
    return (
        <header className="header-element">
            <img src="https://avatars.githubusercontent.com/u/1006881?v=4" className="header-logo" alt="logo" />
            <nav className="nav-links">
                <a href="/" className="page-link">Home</a>
                <a href="/" className="page-link">Projects</a>  
                <a href="/" className="page-link">Blog</a>  
                <a href="/" className="page-link">About</a>  
            </nav>
        </header>
    )
}