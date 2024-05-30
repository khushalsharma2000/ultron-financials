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
        <div classname="scroll-tracker" ref={scrollTrackerRef}></div>
        <main>
          <article>
        <h3 className='blogtitle'>The UAE Tax Landscape: How Budgeting Empowers Businesses!</h3>
            <p className='blogp'>The introduction of Corporate Tax in the UAE requires businesses to sharpen their financial acumen. While navigating these new regulations might seem complex, a well-crafted budget can be your secret weapon.</p>
            <img className='blogimg3' src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg" alt="Businessman in debt concept" />
            <h3 className='blogtitle'>Budgeting for Tax Optimization: </h3>
            <ul>
              <li>  Precise Taxable Profit.</li>
              <li>Streamlined VAT Compliance.</li>
              <li>Strategic Tax Decisions.</li>

            </ul>
          </article>
          <article>
            <h3 className='blogtitle'>Beyond Compliance: The Value of Proactive Budgeting:</h3>
            <ul>
              <li>Enhanced Cost Control
</li>
              <li>Informed Investment Decisions.</li>
<li>Improved Cash Flow Management.</li>
              
            </ul>
<h3 className='blogtitle'>Building a Tax-Friendly Budget</h3>
            <ul>
              <li>Categorize Expenses.
</li>
              <li>Stay Updated.</li>
<li>Seek Professional Guidance.</li>
              <li>In the evolving landscape of UAE corporate tax, a well-defined budget becomes a powerful tool. It empowers you to navigate tax regulations with confidence, maximize profitability, and ensure compliance.</li>
            </ul>
            </article>
        </main>
      </div>
    </div>
  );
};

export default Slider;
