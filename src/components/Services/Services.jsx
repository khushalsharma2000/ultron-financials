import React from 'react';
import './Services.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLaptopCode, faChartBar, faCopy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';
// import Servicespageone from '../../pages/Servicespageone.jsx';
export default function Services() {
  // const [ref, inView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.3,
  // });

  // const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  // const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  // const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;

  const isMobile = window.innerWidth <= 767;

  return (
    <>
      <section id="services">
        <div className="title_headling">
          <h3 id="servicesh3">OUR SERVICES</h3>

        </div>
        <div class="background-container">

          <div class="stars"></div>
          <div class="twinkling"></div>
          <div class="clouds"></div></div>
        {isMobile ? (
          <div className="service_wrapper" >
            <div className="service_box" id="first_box">
              <div class="moon"></div>
              {/* <div className="service_icon blue_icon">{faLaptopCodeIcon}</div> */}
              <h4 className="number">01</h4>
              <div className="service_content">
                <h5>CORPORATE FINANCE</h5>
                <p>We offer facilitation of various sources of funding to up and becoming businesses ranging from Working Capital Loan, Loan against Property, Overdraft Facility, Letter of Credits, Bank Guarantees, Long-Term Loans to meet short and long range needs.</p>
                {/* <a href="/" className="read">
                  Read more
                </a> */}
              </div>
            </div>
            <div className="service_box" id="third_box">
              <div class="moon"></div>
              {/* <div className="service_icon green_icon">{faCopyIcon}</div> */}
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>PERSONAL FINANCE</h5>
                <p>Whether it's your Dream Home or an urgent cash crunch, we offer a wide range of Personal Financing solutions including Personal Loan, Real-Estate Mortgage, Credit Card, Auto Loan.</p>
                {/* <a href="/" className="read">
                  Read more
                </a> */}
              </div>
            </div>
            <div className="service_box" id="second_box">
              <div class="moon"></div>
              {/* <div className="service_icon">{faChartBarIcon}</div> */}
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>BUSINESS ADVISORY</h5>
                <p>Right from starting a business till it's growth we offer a wide array of services encompassing
                  Business Setup, Taxation, Compliance, Accounting, CFO Services, Management Advisory.</p>
                {/* <a href="/" className="read">
                  Read more
                </a> */}
              </div>
            </div>

          </div>
        ) : (


          <motion.div>

            <div className="service_wrapper" >
              <div className="service_box" id="first_box">
                <div class="moon"></div>
                {/* <div className="service_icon blue_icon">{faLaptopCodeIcon}</div> */}
                <h4 className="number">01</h4>
                <div className="service_content">
                  <h5>CORPORATE FINANCE</h5>
                  <p>We offer facilitation of various sources of funding to up and becoming businesses ranging from Working Capital Loan, Loan against Property, Overdraft Facility, Letter of Credits, Bank Guarantees, Long-Term Loans to meet short and long range needs.</p>
                  {/* <Link to="/Servicespageone" className="read">
                    Read more
                  </Link> */}
                   {/* <a href="/" className="read">
                    Read more
                  </a> */}
                  {/* <Link to="/Servicespageone" target="_blank">Read More</Link> */}
                  {/* <a href="/" className="read">
                    Read more
                  </a> */}
                </div>
              </div>
              <div className="service_box" id="third_box">
                <div class="moon"></div>
                {/* <div className="service_icon green_icon">{faCopyIcon}</div> */}
                <h4 className="number">02</h4>
                <div className="service_content">
                  <h5>PERSONAL FINANCE</h5>
                  <p>Whether it's your Dream Home or an urgent cash crunch, we offer a wide range of Personal Financing solutions including Personal Loan, Real-Estate Mortgage, Credit Card, Auto Loan.</p>
                  {/* <Link to="/Servicespagetwo" className="read">
                    Read more
                  </Link> */}
                   {/* <a href="/" className="read">
                    Read more
                  </a> */}
                </div>
              </div>
              <div className="service_box" id="second_box">
                <div class="moon"></div>
                {/* <div className="service_icon">{faChartBarIcon}</div> */}
                <h4 className="number">03</h4>
                <div className="service_content">
                  <h5>BUSINESS ADVISORY</h5>
                  <p>Right from starting a business till it's growth we offer a wide array of services encompassing
                    Business Setup, Taxation, Compliance, Accounting, CFO Services, Management Advisory.</p>
                  {/* <a href="/" className="read">
                    Read more
                  </a> */}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </section>
    </>
  );
}