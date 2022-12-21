import img from '../assets/hero-img.png'
import Content from './content';
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
            <div className="heroimg">
            <div className="hero-text">Watch something incredible.</div>
            </div>
            </div>
            <Content />
        </div>
    );
}
 
export default Hero;