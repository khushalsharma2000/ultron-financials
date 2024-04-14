import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faTasks, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    const fatoolsIcon = <FontAwesomeIcon icon={faTools} />
    const faTasksIcon = <FontAwesomeIcon icon={faTasks} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                        ULTRON <span id='homespan'>FINANCIALS</span>
                    </h3>
                    <p>Elevating Your Wealth, Fulfilling Your Financial Goals.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                    <div className="banner_style_1">
                        {fatoolsIcon}
                        <h4>SUPPORT</h4>
                    </div>
                    <div className="banner_style_1 banner_style_2">
                        {faTasksIcon}
                        <h4>MANAGEMENT</h4>
                    </div>
                    <div className="banner_style_1 banner_style_3">
                        {faChartAreaIcon}
                        <h4>STRATEGY</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
