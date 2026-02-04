import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          Boris Velasevic
        </Link>
        <ul className="navbar-nav">
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          </li>
          <li>
            <Link to="/research" className={`nav-link ${isActive('/research')}`}>Research</Link>
          </li>
          <li>
            <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
          </li>
        </ul>
      </div>
      <style>{`
        .navbar {
          height: var(--header-height);
          background: rgba(253, 252, 248, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .navbar-content {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-brand {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .navbar-nav {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          opacity: 0.7;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          opacity: 1;
          color: var(--color-accent);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-accent);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
