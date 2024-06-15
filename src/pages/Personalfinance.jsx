import React, { useEffect, useState } from 'react';
import './Servicespage1.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideCount = 5; // Updated to 5 slides
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.getElementById(`cr-${currentSlide + 1}`).checked = true;
  }, [currentSlide]);

  return (
    <div className="background-containerspage">
      <div className="contentspage">
        <h3 className="headingspage">Personal Finance</h3>
        <div className="carouselspage">
          <input type="radio" name="carousel" id="cr-1" defaultChecked />
          <label htmlFor="cr-1" className="label-32"></label>
          <div className="ci ci-4page1">
            <h2 className="ch ch-32">Personal Loan</h2>
          </div>

          <input type="radio" name="carousel" id="cr-2" />
          <label htmlFor="cr-2" className="label-82"></label>
          <div className="ci ci-3page1">
            <h2 className="ch ch-82">Real Estate Mortage</h2>
            {/* <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Trees" /> */}
          </div>

          <input type="radio" name="carousel" id="cr-3" />
          <label htmlFor="cr-3" className="label-40"></label>
          <div className="ci ci-2page1">
            <h2 className="ch ch-40">Credit Cards</h2>
            {/* <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Mountains and houses" /> */}
          </div>

          <input type="radio" name="carousel" id="cr-4" />
          <label htmlFor="cr-4" className="label-210"></label>
          <div className="ci ci-1page1">
            <h2 className="ch ch-210">Educational Loan</h2>
            {/* <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Sky and mountains" /> */}
          </div>

          <input type="radio" name="carousel" id="cr-5" />
          <label htmlFor="cr-5" className="label-50"></label>
          <div className="ci ci-5page1">
            <h2 className="ch ch-50">Vehicle Loan</h2>
            {/* <img src="https://images.unsplash.com/photo-1529761430595-036b79cb9d5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=700" alt="Ocean" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
