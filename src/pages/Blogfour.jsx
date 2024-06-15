import React, { useEffect, useRef } from 'react';
import './Blogdetails.css'; // Import the CSS file

const Slider = () => {
  const scrollTrackerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadScript = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          if (window.ScrollTimeline) {
            const scrollTrackingTimeline = new window.ScrollTimeline({
              source: document.scrollingElement,
              orientation: 'block',
              scrollOffsets: [CSS.percent(0), CSS.percent(100)],
            });

            scrollTrackerRef.current.animate(
              {
                transform: ['scaleX(0)', 'scaleX(1)']
              },
              {
                timeline: scrollTrackingTimeline,
              }
            );
          } else {
            console.error('ScrollTimeline is not defined after script load');
          }
        };

        script.onerror = () => {
          console.error('Error loading the scroll-timeline script');
        };
      } catch (error) {
        console.error('Error creating the script:', error);
      }
    };

    loadScript();

    return () => {
      const script = document.querySelector('script[src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="blog-app-container">
      <div className="blog-slider-container">
        <div className="blog-background-container">
          <div className="blog-stars"></div>
          <div className="blog-twinkling"></div>
          <div className="blog-clouds"></div>
        </div>
        <div classname="scroll-tracker" ref={scrollTrackerRef}></div>
        <main>
          <article>
          <h3 className='blogtitle'>Crypto Mining - A Lucrative Investment (But Proceed with Caution)</h3>
            <p className='blogp'>Crypto mining validates transactions, secures blockchain networks, and rewards miners with new coins. Is it a viable investment for you? Let's explore.</p>
            <img className='blogimg4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FtsrSs_S4fq3IehIVwjIt9GLAlXEi2hf5U19ScCu7g&s" alt="Businessman in debt concept" />
            <h3 className='blogtitle'>Real-World Examples: </h3>
            <ul>
              <li>  Marathon Digital Holdings, a US publicly traded company, operates large-scale Bitcoin mining facilities. </li>
              <li>Riot Blockchain, another US-based company, focuses on Bitcoin mining with environmentally friendly practices.</li>
              <li>Some individuals have built successful mining operations, as seen in stories of early Bitcoin miners turning home rigs into significant holdings shared on online forums.</li>

            </ul>
          </article>
          <article>
            <h3 className='blogtitle'>Investing as a Retail Investor:</h3>
            <ul>
              <li>Direct Mining: Purchase mining rigs, which are expensive and require technical knowledge.
</li>
              <li> Mining Pools: Contribute your hashrate (processing power) for a share of the pool's rewards. Lower barrier to entry but lower rewards.</li>
<li>Cloud Mining: Least technical option, but comes with upfront costs and potential scams.</li>
              
            </ul>
<h3 className='blogtitle'>Benefits, Risks and What to expect</h3>
            <ul>
              <li>Earn crypto rewards, contribute to the blockchain, and potentially profit from rising cryptocurrency prices.
</li>
              <li> High upfront costs, volatile crypto market, fluctuating mining difficulty, and environmental concerns.</li>
<li>Seek Professional Guidance.</li>
              <li>Don't expect instant riches. Profitability depends on factors like electricity costs, chosen coin, and market conditions. Embrace a long-term investment approach and be prepared for volatility.</li>
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Slider;
