const Research = () => {
    return (
        <div className="research-page animate-fade-in">
            <div className="container section">
                <h1 className="page-title">Research</h1>

                <div className="paper-list">
                    {/* Paper Entry */}
                    <div className="paper-card">
                        <div className="paper-year">2023</div>
                        <div className="paper-content">
                            <h3 className="paper-title">
                                Effects of Data Heterogeneity on Distributed Linear System Solvers
                            </h3>
                            <div className="paper-meta">
                                <span className="paper-authors">Boris Velasevic</span>
                                <span className="paper-venue">62nd IEEE Conference on Decision and Control (CDC)</span>
                            </div>
                            <p className="paper-abstract">
                                This paper explores the performance differences between optimization-based and projection-based
                                distributed linear system solvers, focusing on how data heterogeneity impacts convergence.
                            </p>
                            <div className="paper-links">
                                <a href="https://arxiv.org/abs/2304.10640" target="_blank" rel="noopener noreferrer" className="link-item">
                                    Arxiv (Updated)
                                </a>
                                <a href="https://doi.org/10.1109/CDC49753.2023.10383603" target="_blank" rel="noopener noreferrer" className="link-item">
                                    CDC Publication
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for more papers */}
                </div>
            </div>
            <style>{`
        .page-title {
          margin-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--color-border);
          padding-bottom: var(--spacing-sm);
        }
        .paper-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .paper-card {
          display: grid;
          grid-template-columns: 80px 1fr; /* Year + Content */
          gap: var(--spacing-md);
        }
        .paper-year {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-accent);
          font-weight: 700;
        }
        .paper-title {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        .paper-meta {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: var(--color-secondary);
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .paper-venue {
          font-style: italic;
          color: var(--color-primary);
        }
        .paper-abstract {
          margin-bottom: 1rem;
          color: var(--color-secondary);
          line-height: 1.7;
        }
        .paper-links {
          display: flex;
          gap: 1rem;
        }
        .link-item {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-accent);
        }
        .link-item:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .paper-card {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .paper-year {
            font-size: 1.2rem;
            margin-bottom: 0.25rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Research;
