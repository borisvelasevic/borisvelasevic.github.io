import React from 'react';
import { Link } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const HowHardIsHard = () => {
    return (
        <div className="blog-post-wrapper animate-fade-in">
            <div className="container blog-content">
                <header className="blog-header">
                    <span className="blog-date">October 2026</span>
                    <h1 className="post-title">How Hard is Hard - Some Philosophical Thoughts About ETH</h1>
                    <div className="post-author">By Boris Velasevic</div>
                </header>

                <article className="post-body">
                    <p>
                        There exists an alternative universe in which I am a complexity theorist. When I came to MIT, I was determined to study algorithms. I knew I wanted to do something mathematical without going 100% into pure math, and algorithms seemed like the natural middle ground: many of its problems are motivated by real applications, the results can be used directly, and it is mathematical enough to keep me satisfied. I even catapulted myself into advanced algorithms courses by skipping some of the basic requirements, and it was there that I realized this wasn't what I wanted to do forever. Still, the interest never left, and I enjoy going to talks and reading about new results as an amateur.
                    </p>

                    <p>
                        Of all the recent mathematical results announced by OpenAI, none has filled me with as much excitement, and as much existential dread (more on that at the end), as the announced disproof of the Exponential Time Hypothesis (ETH). Its disproof does not settle P vs. NP, but a large body of conditional hardness results rests on it. As of this writing, the proof comes with a Lean formalization and is being independently examined by Impagliazzo, Paturi, and Williams. I have given some version of this post as a talk to friends, and it has always led to great discussions, so I decided to write it up.
                    </p>

                    <p>
                        The short version of my view is that many problems will turn out to be much “easier” than we believe. Two things feed this. First, there is an asymmetry: to show that 3-SAT (or any other NP-hard problem) has no polynomial-time algorithm, you have to rule out every possible algorithm, whereas to show that it has one, you only need to write it down. (I know this is an argument about what is easy to prove, not about what is true.) Second, the space of algorithms and problems seems too large for humans to have a good grasp of. How do we know that at some large <InlineMath math="n" />, the “hard” instances don't simply run out, or become governed by structure we haven't noticed, or reduce to smaller and “easier” cases? Here is a toy example of what I mean (2 paragraphs of heavy math incoming).
                    </p>

                    <p>
                        Say I give you <InlineMath math="n" /> points in <InlineMath math="\mathbb{R}^d" />, with <InlineMath math="d" /> fixed and <InlineMath math="n" /> growing, and ask you to decide whether some two of them are at distance at most <InlineMath math="1" /> and, if so, to return such a pair. Here is an <InlineMath math="O(n \log n)" /> algorithm. Sort the points by their first coordinate. The smallest point opens bucket <InlineMath math="X^{(1)}_1" />, and each subsequent point joins it as long as its first coordinate exceeds that of the bucket's opening point by less than <InlineMath math="1" />. The first point that fails this test opens <InlineMath math="X^{(1)}_2" />, and so on, giving buckets <InlineMath math="X^{(1)}_1, \dots, X^{(1)}_{k_1}" />. Do the same for each of the other <InlineMath math="d-1" /> coordinates. Each point now has a tuple of <InlineMath math="d" /> bucket indices, which I'll call its cell. So far this has taken <InlineMath math="O(dn \log n)" /> time. Next, sort the points lexicographically by cell, so that points in the same cell end up next to each other; this gives the list of nonempty cells, of which there are at most <InlineMath math="n" />, again in <InlineMath math="O(dn \log n)" /> time.
                    </p>

                    <p>
                        Two observations finish the job. First, if two points have bucket indices differing by <InlineMath math="2" /> or more in any coordinate, they are more than <InlineMath math="1" /> apart in that coordinate, so they never need to be compared. Any close pair therefore lies in a single cell or in two neighboring cells (indices differing by at most <InlineMath math="1" /> in every coordinate), and each cell has at most <InlineMath math="3^d - 1" /> neighbors. Second, a cell can't hold many points that are far apart. All of its points lie in a half-open unit cube; cut that cube into <InlineMath math="m^d" /> subcubes of side <InlineMath math="1/m" />, where <InlineMath math="m = \lceil \sqrt{d}\, \rceil" />. Two points in the same subcube are less than <InlineMath math="\sqrt{d}/m \le 1" /> apart, so by the pigeonhole principle, any <InlineMath math="m^d + 1" /> points in a cell contain a close pair. So if some cell has more than <InlineMath math="m^d" /> points, we compare its first <InlineMath math="m^d + 1" /> points with each other, find our pair, and return. Otherwise every cell is small, and each point only needs to be compared with the at most <InlineMath math="3^d m^d" /> points in its own and neighboring cells. Finding the neighboring cells by binary search over the sorted list of cells takes <InlineMath math="O(\log n)" /> per lookup, so the whole algorithm runs in <InlineMath math="O(n \log n)" /> for fixed <InlineMath math="d" />.
                    </p>

                    <p>
                        This is a good demonstration of what I meant earlier. The part that looks like it should get harder with <InlineMath math="n" />, comparing points against each other, doesn't: no matter how many points there are, each one only ever has to be compared with a constant number of others, because space can't hold too many points that are all far from each other. The difficulty saturates locally (though the constants grow rapidly with <InlineMath math="d" />). To be fair to the complexity theorists, this toy problem has structure that SAT doesn't obviously have: closeness is local, so the problem splits into many independent constant-size pieces. Nothing like that is known for SAT, and its hard instances can't simply disappear either: you can pad any formula with dummy variables, so every small formula reappears at every larger size (though this doesn't establish hardness relative to the padded input size). If SAT's difficulty saturates in some sense, it has to come from hidden structure, and finding that structure would amount to finding a fast algorithm.
                    </p>

                    <p>
                        I was pleasantly surprised to come across this quote from Donald Knuth, from 2014: “if you imagine a number <InlineMath math="M" /> that's finite but incredibly large—like say the number <InlineMath math="10\uparrow\uparrow\uparrow\uparrow 3" /> discussed in my paper on ‘coping with finiteness’—then there's a humongous number of possible algorithms that do <InlineMath math="n^M" /> bitwise or addition or shift operations on <InlineMath math="n" /> given bits, and it's really hard to believe that all of those algorithms fail”. I don't know whether Knuth is right that P = NP, which he does believe, but his reasoning captures exactly what I mean: the space of possible algorithms is so vast that it is hard to rule them all out.
                    </p>

                    <p>
                        That concludes the first half of my argument: hardness might run out, or bend, in ways we haven't noticed. Before moving on to the second half, about how little we know about lower bounds, a note on practicality. Nothing here claims that these hypothetical algorithms would be practical. Even if P = NP, and especially if it holds through one of these mechanisms, the constants could be enormous, or some subroutine could take an astronomical amount of time. A polynomial-time algorithm for SAT with an astronomical exponent could be useless at the instance sizes people actually care about, although a clean <InlineMath math="n^2" /> algorithm with modest constants could be a major practical breakthrough.
                    </p>

                    <p>
                        When I first saw the median-of-medians algorithm, I was blown away and was sure it was some kind of magic. I would have bet that finding the median requires sorting the array, and hence <InlineMath math="\Omega(n \log n)" /> time. So when I saw the <InlineMath math="O(n)" /> algorithm, I told everyone. One response stuck with me. A friend said: “Why are you surprised? Information-theoretically, you know the median once you've read the array.” Taken literally, that is true of every problem: once you've read a SAT formula, whether it is satisfiable is determined too. But there is a sharper version of the point. Sorting has to determine which of the <InlineMath math="n!" /> possible orderings it was given, so any comparison-based sort needs about <InlineMath math="\log_2 n! \approx n \log n" /> comparisons. The median is just one of <InlineMath math="n" /> elements, so the same counting argument gives nothing beyond the cost of reading the input, and that turns out to be all the median costs.
                    </p>

                    <p>
                        Perhaps this is where my skepticism about hardness comes from. We know surprisingly little about lower bounds, especially unconditional ones, and for many problems, SAT included, the best lower bound we can prove for general algorithms is essentially the time needed to read the input. For a decision problem like SAT, the output is a single bit, so counting arguments like the one for sorting give nothing at all.
                    </p>

                    <p>
                        And there is evidence that we can push toward these limits. Median of medians is one example; matrix multiplication is another. Just reading the input takes <InlineMath math="n^2" /> time, and since Strassen's <InlineMath math="O(n^{2.81})" /> algorithm in 1969, decades of work have pushed the exponent down to about <InlineMath math="2.371" />, with recent OpenAI preprints claiming an exponent of <InlineMath math="9/4" />. The same batch of preprints claims to beat <InlineMath math="n \log n" /> for integer multiplication and the FFT, though both algorithms are galactic. So, what's stopping us?
                    </p>

                    <p>
                        At least one of the big troublemakers seems to be SAT. It was the first problem shown to be NP-complete, and its special case 3-SAT is the starting point for a huge number of NP-hardness proofs. So how hard is it? Exponential sounds natural; anything faster would feel like some kind of shortcut in logic. Perhaps even <InlineMath math="2^n" />, the cost of trying every assignment. And yet all of that seems to be false. The <InlineMath math="2^n" /> guess fell decades ago: 3-SAT can be solved in time <InlineMath math="c^n" /> for constants <InlineMath math="c" /> well below <InlineMath math="2" />. The refined guesses were the Strong Exponential Time Hypothesis, which says <InlineMath math="k" />-SAT needs nearly <InlineMath math="2^n" /> time as <InlineMath math="k" /> grows, and ETH, which says 3-SAT needs time <InlineMath math="2^{cn}" /> for some constant <InlineMath math="c > 0" />. If OpenAI's result holds, both are false, and 3-SAT can be solved in subexponential time, though still far from polynomial.
                    </p>

                    <p>
                        So how low can we go? We don't know. We have very few lower bounds, and our previous guesses seem to be falling. This is where the existential dread comes from. Each of these results is exciting on its own, but together they leave me with no idea where the improvements stop. Perhaps what's unsettling isn't just that these problems may be easier than we think, but that I no longer know how much faith to place in my intuitions about what should be difficult. And somewhere between <InlineMath math="n^2" /> and <InlineMath math="n^{10\uparrow\uparrow\uparrow\uparrow 3}" />, there is only so much “size” our brains can grasp.
                    </p>
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
      `}</style>
        </div>
    );
};

export default HowHardIsHard;
