import  Navbar from './Navbar/Navbar';
import  Home from './Home/Home';
import  About from './About/About';
import  Services from './Services/Services';
import  Blog from './Blog/Blog';
import  Footer from './Footer/Footer';


function Completesection(){
    return(
        <>
        <Navbar />
        
        <Home />
        <About />
        
        <Services />
        <Blog />
        <Footer />
        </>
    )
};
export default Completesection;