const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Boris Velasevic. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/boris-velasevic/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                </div>
            </div>
            <style>{`
        .footer {
          padding: var(--spacing-lg) 0;
          margin-top: auto;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
          font-size: 0.9rem;
        }
        .footer-links {
          margin-top: 1rem;
        }
        .footer-link {
          color: var(--color-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--color-accent);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
