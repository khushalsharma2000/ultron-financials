import React, { useEffect, useRef } from 'react';
import './Blogdetails.css'; // Import the CSS file

const Slider = () => {
  const scrollTrackerRef = useRef(null);

  useEffect(() => {
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
        <div className="scroll-tracker" ref={scrollTrackerRef}></div>
        <main>
          <article>
            <h3 className='blogtitle'>Unlocking Your Business's Potential: The Art of Debt Restructuring</h3>
            <p className='blogp'>Feeling weighed down by debt? You're not alone. But there's hope! Debt restructuring isn't just survival—it's about empowering your future growth.</p>
            <img className='blogimg' src="https://cdn.create.vista.com/api/media/small/131323304/stock-photo-businessman-in-debt-business-concept" alt="Businessman in debt concept" />
            <h3 className='blogtitle'>Imagine:</h3>
            <ul>
              <li>Reduced monthly payments: Free up working capital for marketing, inventory, or expansion.</li>
              <li>Flexible repayment terms: Tailor a plan to match current revenue and future goals.</li>
              <li>Improved cash flow: Focus on growing your business without worrying about expenses.</li>
            </ul>
          </article>
          <article>
            <h3 className='blogtitle'>Here's how we can assist:</h3>
            <ul>
              <li>Analyze your financial situation: We'll explore your challenges and opportunities to create a tailored plan.</li>
              <li>Negotiate with creditors: Our skilled team will strive for favorable terms, including lower rates and extended repayment.</li>
              <li>Develop a sustainable strategy: Together, we'll craft a robust financial plan supporting your long-term growth objectives.</li>
            </ul>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Slider;
