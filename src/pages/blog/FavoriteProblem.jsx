import React from 'react';
import { Link } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const FavoriteProblem = () => {
    return (
        <div className="blog-post-wrapper animate-fade-in">
            <div className="container blog-content">
                <header className="blog-header">
                    <span className="blog-date">April 2026</span>
                    <h1 className="post-title">A Problem Dear to My Heart</h1>
                    <div className="post-author">By Boris Velasevic</div>
                </header>

                <article className="post-body">
                    <p>
                        I want to write about my absolute favorite problem in elementary number theory. I first encountered it in the late summer of 2017 at a math training camp (for full disclosure, it initially appeared on USA TSTST 2015/5). 
                    </p>

                    <p>
                        Even though the problem is completely elementary and admits a short, elegant solution, I definitely wouldn't describe it as trivial—especially for an advanced high-school level. I highly recommend grabbing a piece of paper and trying it out for yourself before peeking at the solution below!
                    </p>

                    <div className="problem-box">
                        <p><strong>Problem:</strong> Denote by <InlineMath math="\varphi(n)" /> Euler's totient function. Prove that for any positive integer <InlineMath math="N \geq 1" />, there exists an integer <InlineMath math="m" /> such that the equation <InlineMath math="\varphi(n) = m" /> has at least <InlineMath math="N" /> solutions.</p>
                    </div>

                    <div className="solution-box">
                        <p><strong>Solution:</strong> Fix <InlineMath math="N" /> and enumerate the primes as <InlineMath math="2 = p_1 < p_2 < \dots" /></p>

                        <p>Let's define our target value <InlineMath math="m" /> as:</p>
                        <BlockMath math="m = \prod_{j = 1}^{N + 1} (p_j - 1)" />

                        <p>
                            Note that for each <InlineMath math="i > 1" />, we have <InlineMath math="p_i > p_i - 1 > 1" />. Because of this, <InlineMath math="p_i - 1" /> admits a prime factorization consisting entirely of prime factors from the set <InlineMath math="\{p_1, \dots, p_{i - 1}\}" />. 
                        </p>

                        <p>We can write this factorization as:</p>
                        <BlockMath math="p_i - 1 = p_1^{\alpha_1}\cdots p_{i - 1}^{\alpha_{i - 1}}" />
                        <p>where each <InlineMath math="\alpha_j \geq 0" />.</p>

                        <p>Now, let's construct our <InlineMath math="n" />. Consider values of the form <InlineMath math="(p_i - 1)\prod_{j \neq i} p_j" />. If we evaluate the totient function for these values, we can substitute our prime factorization in and group the terms:</p>

                        <BlockMath math="\begin{aligned} \varphi\left((p_i - 1)\prod_{\substack{1 \leq j \leq N + 1 \\ j \neq i}} p_j\right) &= \varphi\left(\prod_{j = 1}^{i - 1} p_j^{1 + \alpha_j} \prod_{j = i + 1}^{N + 1} p_j\right) \\ &= \prod_{j = 1}^{i - 1} p_j^{\alpha_j}(p_j - 1) \prod_{j = i + 1}^{N + 1} (p_j - 1) \\ &= \left( \prod_{j = 1}^{i - 1} p_j^{\alpha_j} \right) \prod_{\substack{1 \leq j \leq N + 1 \\ j \neq i}} (p_j - 1) \end{aligned}" />

                        <p>Because we established earlier that <InlineMath math="\prod_{j = 1}^{i - 1} p_j^{\alpha_j} = p_i - 1" />, we can substitute this right back into the equation:</p>

                        <BlockMath math="\begin{aligned} &= (p_i - 1) \prod_{\substack{1 \leq j \leq N + 1 \\ j \neq i}} (p_j - 1) \\ &= \prod_{j = 1}^{N + 1} (p_j - 1) \\ &= m \end{aligned}" />

                        <p>We can therefore conclude that for any <InlineMath math="n" /> in the set:</p>
                        <BlockMath math="S = \left\{ (p_i - 1)\prod_{\substack{1 \leq j \leq N + 1 \\ j \neq i}} p_j \;\middle|\; 2 \leq i \leq N + 1 \right\}" />
                        <p>we will have <InlineMath math="\varphi(n) = m" />.</p>

                        <p>To finish the proof, we just need to verify that these solutions are distinct. Notice that for any index <InlineMath math="i" />, the prime <InlineMath math="p_i" /> is <em>not</em> a factor of its corresponding element <InlineMath math="(p_i - 1)\prod_{j \neq i} p_j" />, but it <em>is</em> a factor of all the other elements in the set. Therefore, no two elements in this set can be the same.</p>

                        <p>This set contains exactly <InlineMath math="N" /> distinct elements, yielding <InlineMath math="N" /> unique solutions to <InlineMath math="\varphi(n) = m" />, which completes our proof.</p>
                    </div>
                </article>

                <div className="blog-footer">
                    <Link to="/blog" className="btn btn-outline small">← Back to Blog</Link>
                </div>
            </div>

            <style>{`
        .blog-post-wrapper {
          padding: 4rem 0;
          color: var(--color-text);
        }
        .blog-content {
          max-width: 800px;
        }
        .blog-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .post-title {
          font-size: 3rem;
          margin: 1rem 0;
          line-height: 1.2;
        }
        .blog-date {
          display: block;
          color: var(--color-accent);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
        }
        .post-author {
          font-style: italic;
          color: var(--color-secondary);
        }
        .post-body {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #333;
        }
        .post-body p {
          margin-bottom: 1.5rem;
        }
        .problem-box {
          background-color: #f8f9fa;
          padding: 1.5rem;
          border-left: 4px solid var(--color-accent);
          margin: 2rem 0;
          font-style: italic;
        }
        .solution-box {
          margin-top: 2rem;
        }
        .blog-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .btn.small {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        .katex { font-size: 1.2em; }
        .katex-display { margin: 2rem 0; overflow-x: auto; overflow-y: hidden; }
      `}</style>
        </div>
    );
};

export default FavoriteProblem;
