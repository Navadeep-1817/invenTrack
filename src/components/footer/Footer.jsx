import React from "react";
import "./Footer.css";
function Footer(){
    return(
        <footer className="footer">
        <div className="footer-content">
        <p>© {new Date().getFullYear()} invenTrack. All rights reserved.</p>
        <div className="footer-links">
            <a href="/about">About</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact</a>
        </div>
        </div>
    </footer>
    );
}

export default Footer;