const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              PhD student in <span className="highlight">Computing and Mathematical Sciences</span> at Caltech
            </h1>
            <p className="hero-subtitle">
              Researching the intersection of control theory, learning theory, game theory and mathematics.
              Particularly interested in provable guarantees for multi-agent systems.
            </p>
            <div className="hero-actions">
              <a href="/research" className="btn btn-primary">View Research</a>
              {/* <a href="#contact" className="btn btn-outline">Contact Me</a> */}
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/profile_new.jpg" alt="Boris Velasevic" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I am a first-year PhD student in <a href="https://www.cms.caltech.edu" target="_blank" rel="noopener noreferrer" className="text-link">Computing & Mathematical Sciences</a> at Caltech, working in the <a href="https://ericmazumdar.com" target="_blank" rel="noopener noreferrer" className="text-link">FALCON lab</a> with Professor <a href="https://ericmazumdar.com" target="_blank" rel="noopener noreferrer" className="text-link">Eric Mazumdar</a>. My current projects revolve around introducing concepts of risk into LQR and other dynamic games.
            </p>
            <p>
              Right before joining Caltech, I worked as a Quantitative Researcher at <a href="https://www.twosigma.com" target="_blank" rel="noopener noreferrer" className="text-link">Two Sigma</a>. I earned my MEng and two BS degrees (CS & Engineering, Mathematics) from <a href="https://web.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-link">MIT</a>, where I researched distributed linear system solvers under the mentorship of Professor <a href="https://azizan.mit.edu" target="_blank" rel="noopener noreferrer" className="text-link">Navid Azizan</a>, winning the <a href="https://urop.mit.edu/mentors/outstanding-student/student-recipients/" target="_blank" rel="noopener noreferrer" className="text-link">"Outstanding UROP Student Award"</a>.
            </p>
            <p>
              I represented Bosnia and Herzegovina at the <a href="https://www.imo-official.org/team_r.aspx?code=BIH&year=2018" target="_blank" rel="noopener noreferrer" className="text-link">59th</a> and <a href="https://www.imo-official.org/team_r.aspx?code=BIH&year=2019" target="_blank" rel="noopener noreferrer" className="text-link">60th</a> International Mathematical Olympiad (Bronze & Honourable Mention). I mentor at the School for Talented Mathematicians in Sarajevo and served on the problem selection committee for the 42nd Balkan Mathematical Olympiad.
            </p>
          </div>
        </div>
      </section>
      <section className="contact section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>
              Best way to get in touch with me is at <strong>b[first seven letters of my last name]@caltech.edu</strong>.
            </p>
            <p>
              You can also find me on <a href="https://www.linkedin.com/in/boris-velasevic/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          padding: 6rem 0;
          display: flex;
          align-items: center;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-title {
          margin-bottom: 1.5rem;
        }
        .highlight {
          color: var(--color-accent);
          position: relative;
          display: inline-block;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          width: 420px;
          height: 420px;
          border-radius: 20px;
          box-shadow: 25px 25px 0 var(--color-accent);
          border: 1px solid var(--color-accent);
          overflow: hidden;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-image-wrapper {
            width: 300px;
            height: 300px;
            box-shadow: 15px 15px 0 var(--color-accent);
          }
          .hero-container {
            display: flex;
            flex-direction: column-reverse;
          }
        }
        .section {
          padding: var(--spacing-xl) 0;
        }
        .section-title {
          margin-bottom: var(--spacing-md);
          font-size: 2rem;
          position: relative;
          padding-left: 1rem;
          border-left: 4px solid var(--color-accent);
        }
        .about-content {
          max-width: 800px;
          font-size: 1.1rem;
          color: var(--color-secondary);
        }
        .about-content p {
          margin-bottom: 1.5rem;
        }
        .text-link {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        .text-link:hover {
          border-bottom-color: var(--color-accent);
        }
        .contact-content {
          max-width: 800px;
          font-size: 1.1rem;
          color: var(--color-secondary);
        }
      `}</style>
    </div>
  );
};

export default Home;
