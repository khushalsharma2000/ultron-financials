import   {React, useEffect,useState} from 'react';
import './Blog.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const BlogArea = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section id='blog'>
        <section className="blog-area">
            {/* <div className="container"> */}
                <div className="heading">
                    <h2 id='blogh3'>Latest Blogs</h2>
                </div>
                <Swiper
                
        spaceBetween={30}
        slidesPerView={isMobile ? 1 : 3}
        grabCursor={true}
        autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
           }}
      
        className="portfolio-slider">
        
                <div className="blogs">
                <SwiperSlide>
                    <div className="blogs-item hvr-float-shadow wow fadeInLeft" data-wow-delay="0.5s">
                        <div className="blog-img">
                            <img id ='blog1'src="https://cdn.create.vista.com/api/media/small/131323304/stock-photo-businessman-in-debt-business-concept" alt="" className="img-fluid" />
                            <p className="blog-time">
                                <span className="blog-date">12</span>
                                <span className="blog-month">Feb,24</span>
                            </p>
                        </div>
                        <div className="blog-detail">
                            <h4>Struggling with Debt? You Can Restructure & Thrive!</h4>
                            
                            <p>Feeling the weight of debt stifle your company's growth? You're not alone.</p>

                            <div className="read-more-btn">
                <Link to="/blogone" target="_blank">Read More</Link>
                </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="blogs-item hvr-float-shadow wow fadeInLeft" data-wow-delay="0.7s">
                        <div className="blog-img">
                            <img id='blog2' src="https://blog.metahomes.net/wp-content/uploads/2023/10/nOgoguiRHc.png" alt="" className="img-fluid" />
                            <p className="blog-time">
                                <span className="blog-date">16</span>
                                <span className="blog-month">Feb,24</span>
                            </p>
                        </div>
                        <div className="blog-detail">
                            <h4>Own Your UAE Dream Now: Reduced Rates, Golden Visa & More!</h4>
                           
                            <p>UAE's Golden Key is Closer Than You Think: Own Your Dream & Save with Buyout Services!</p>

                            <div className="read-more-btn">
                <Link to="/blogtwo" target="_blank">Read More</Link>
                </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="blogs-item hvr-float-shadow wow fadeInLeft" data-wow-delay="0.9s">
                        <div className="blog-img">
                            <img id = 'blog3' src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg" alt="" className="img-fluid" />
                            <p className="blog-time">
                                <span className="blog-date">22</span>
                                <span className="blog-month">Mar,24</span>
                            </p>
                        </div>
                        <div className="blog-detail">
                            <h4>The UAE Tax Landscape: How Budgeting Empowers Businesses</h4>
                         
                            <p>Introduction of Corporate Tax in the UAE requires businesses to sharpen their financial acumen.</p>

                            <div className="read-more-btn">
                <Link to="/blogthree" target="_blank">Read More</Link>
                </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="blogs-item hvr-float-shadow wow fadeInLeft" data-wow-delay="0.9s">
                        <div className="blog-img">
                            <img id = 'blog4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FtsrSs_S4fq3IehIVwjIt9GLAlXEi2hf5U19ScCu7g&s" alt="" className="img-fluid" />
                            <p className="blog-time">
                                <span className="blog-date">9</span>
                                <span className="blog-month">Mar,24</span>
                            </p>
                        </div>
                        <div className="blog-detail">
                            <h4>Crypto Mining - A Lucrative Investment (But Proceed with Caution)</h4>
                            
                            <p>Crypto mining is a viable investment opportunity for you? Let's explore..</p>

                            <div className="read-more-btn">
                <Link to="/blogfour" target="_blank">Read More</Link>
                </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>
                </Swiper>
                
            {/* </div> */}
        </section>
        </section>
    );
};

export default BlogArea;
