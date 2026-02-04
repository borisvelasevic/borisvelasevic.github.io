import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-page animate-fade-in">
      <div className="container section">
        <h1 className="page-title">Blog</h1>
        <div className="blog-list">
          <div className="blog-card">
            <span className="blog-date">February 2026</span>
            <h2 className="blog-post-title">Turbocharging simple combinatorial identities</h2>
            <p className="blog-excerpt">
              Exploring how the binomial theorem and basic calculus can provide short, elegant proofs for elementary identities.
            </p>
            <Link to="/blog/turbocharging-identities" className="read-more">Read More →</Link>
          </div>
        </div>
      </div>
      <style>{`
        .blog-list {
          display: grid;
          gap: var(--spacing-lg);
          max-width: 800px;
        }
        .blog-card {
          padding: var(--spacing-md);
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-secondary);
        }
        .blog-date {
          display: block;
          font-size: 0.85rem;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .blog-post-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .blog-excerpt {
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
        }
        .read-more {
          font-weight: 600;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

export default Blog;
