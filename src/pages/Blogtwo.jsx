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
            <h3 className='blogtitle'>UAE's Golden Key is Closer Than You Think: Own Your Dream & Save with Buyout Services!</h3>
            <p className='blogp'>2024 is the golden moment for UAE real estate: low interest rates, booming market, and the Golden Visa. Claim your slice of paradise now!</p>
            <img className='blogimg2' src="https://blog.metahomes.net/wp-content/uploads/2023/10/nOgoguiRHc.png" alt="Businessman in debt concept" />
            <h3 className='blogtitle'>Unlock a world of benefits: </h3>
            <ul>
              <li> Financial Freedom: Reduced rates, such as the recent drop to [specific rate/example], mean significant monthly mortgage savings.</li>
              <li>Investment Power: The booming market ensures substantial property value growth, securing future wealth.</li>
              <li>Golden Visa Access: Property ownership above AED 2 million grants a 10-year residency visa, enabling business opportunities and family sponsorship.</li>
<li>Ultimate Convenience: Our buy-out service seamlessly transfers your existing mortgage, securing lower rates and potentially saving thousands!</li>
            </ul>
          </article>
          <article>
            <h3 className='blogtitle'>Don't delay! Proactive debt restructuring can:</h3>
            <ul>
              <li>Example: If you have a current mortgage with a 5% interest rate on a AED 1 million property, our buy-out service can secure a new mortgage at 4%, potentially saving you AED 1,333 per month and over AED 48,000 across the loan term!</li>
              <li>Don't wait! Contact us today for a free consultation and unlock the door to your UAE dream.</li>
              
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Slider;
