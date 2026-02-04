import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const TurbochargingIdentities = () => {
    return (
        <div className="blog-post-wrapper animate-fade-in">
            <div className="container blog-content">
                <header className="blog-header">
                    <span className="blog-date">February 2026</span>
                    <h1 className="post-title">Turbocharging Simple Combinatorial Identities</h1>
                    <div className="post-author">By Boris Velasevic</div>
                </header>

                <article className="post-body">
                    <p>
                        This is largely a test article, but also something that crossed my mind. Assume that we want to show a
                        rather elementary identity:
                    </p>

                    <BlockMath math="\sum_{k \text{ even}} \binom{n}{k} = \sum_{k \text{ odd}} \binom{n}{k}" />

                    <p>
                        At first glance, one might want to utilize the fact that <InlineMath math="\binom{n}{k} = \binom{n}{n - k}" />
                        to pair off the left and right-hand sides directly. However, this argument works if and only if <InlineMath math="n" />
                        is odd, and the other case needs to be dealt with separately. In a situation where we need to prove the
                        identity if we wish to use it, and where we are operating under a time constraint (for example, in a timed exam),
                        a more direct approach is highly preferred.
                    </p>

                    <p>
                        The binomial theorem truly one-shots a series of these examples. Observe that:
                    </p>

                    <BlockMath math="(1 + x)^n = \sum_{k = 0}^n \binom{n}{k} x^k" />

                    <p>
                        Plugging in <InlineMath math="x = -1" /> yields our identity. Of course, one might say that proving the
                        binomial theorem is the new bottleneck, but people are more likely to allow for direct usage of the
                        binomial theorem simply because it has an extremely well-established name.
                    </p>

                    <p>
                        A similar approach can be used for more involved identities. For example, assume that we want to show that:
                    </p>

                    <BlockMath math="\sum_{k = 1}^n k\binom{n}{k} = n2^{n - 1}" />

                    <p>
                        This is a rather elementary example used in introductory discrete math classes for introducing/testing
                        double-counting techniques, but it has a very short proof using the binomial identity. Namely,
                        differentiating both sides of the binomial identity with respect to <InlineMath math="x" /> yields:
                    </p>

                    <BlockMath math="\sum_{k = 1}^{n} k\binom{n}{k}x^{k - 1} = n(1 + x)^{n - 1}" />

                    <p>
                        And plugging in <InlineMath math="x = 1" /> yields our result.
                    </p>

                    <p>
                        The main point I am trying to make is that it is worthwhile thinking about how to show something as
                        cleanly and shortly as plausible as it saves us time and minimizes the chance of making a mistake.
                    </p>
                </article>

                <div className="blog-footer">
                    <a href="/blog" className="btn btn-outline small">← Back to Blog</a>
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
        .blog-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .btn.small {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }

        /* KaTeX Overrides for dark mode if needed, but we are in light mode */
        .katex { font-size: 1.2em; }
        .katex-display { margin: 2rem 0; overflow-x: auto; overflow-y: hidden; }
      `}</style>
        </div>
    );
};

export default TurbochargingIdentities;
