import man from './Images/man.png';
import girl from './Images/girl.png';
import Footer from './Footer';

const About = () => {
    return (
        <div className='about'>
            <div className='home-container3 about-container'>
                    <div className='home-container3-content'>
                        <p className='home-container3-par1'>Smart Frost</p>
                        <p className='home-container3-par3'>We Offer The Best Services For You</p>
                        <p className='home-container3-par2'>We make preparations of vegetables and meat, prepare salads and dairy dishes chilled to 8 degrees for visitors, where the temperature is pleasantly constant. This technology allows you to save the maximum benefit and vitamins.</p>
                    </div>
                    <img className='girl' src={man} width="430px" alt='man'/>
                </div>

                <div className='home-container3 cont-exp'>
                    <img className='girl girl2' src={girl} width="450px" alt='girl'/>
                    <div className='home-container3-content'>
                        <p className='home-container3-par1'>Our Eperiancet</p>
                        <p className='home-container3-par3'>With Our Expereancy We Will Serve You</p>
                        <p className='home-container3-par4'>We are constantly looking for new opportunities to make daily meals more and more varied, healthy and tasty - and we will certainly share our knowledge here.</p>
                        <div className='container-experince'>
                            <div className='box-experince'>
                                <p className='experince-par1'>10</p>
                                <p className='experince-par2'>Years Experince</p>
                            </div>
                            <div className='box-experince'>
                                <p className='experince-par1'>150+</p>
                                <p className='experince-par2'>Outlets By Country</p>
                            </div>
                            <div className='box-experince'>
                                <p className='experince-par1'>10K+</p>
                                <p className='experince-par2'>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Footer/>
        </div>
    )
}

export default About;