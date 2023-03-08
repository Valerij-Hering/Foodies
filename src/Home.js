
import food from './Images/food.png';
import girl from './Images/girl.png';
import Footer from './Footer';
import ScrollButton from './ScrollButton';
import foodIcon1 from './Images/foodIcon1.png';
import foodIcon2 from './Images/foodIcon2.png';
import foodIcon3 from './Images/foodIcon3.png';
import man from './Images/man.png';










function Home(){

    


    return(
        <div className='home'>
            <div className='container-mainImage'>
                <div className='header-content'>
                    <p className='home-content-par1'>Right Way <span>Heathly Food</span></p>
                    <p className='home-content-par2'>We will give you a healthy lifestyle and help you to be in good shape all day.</p>
                    <a href="#services" className='home-btn'>Learn More</a >

                </div>
                <div className='ffon'></div>
                <img src={food} className='home-img1' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" alt='fon'/>
            </div>
            <div className='container-socialNetwork'>
                <div className='box-social-icon'>
                    <i className="fi fi-brands-twitter"></i>
                </div>
                <div className='box-social-icon'>
                    <i className="fi fi-brands-facebook"></i>
                </div>
                <div className='box-social-icon'>
                    <i className="fi fi-brands-instagram"></i>
                </div>
            </div>
            <div className='home-container2'>
                <h2>How It Works</h2>
                <p className='home-container-par'>Completely network impactful users whereas next generation applications.</p>
                <div className='container-work'>
                    <div className='box-work'>
                        <img src={foodIcon1} width="70px" alt='icon'/>
                        <p className='work-title'>Pick Meals</p>
                        <p className='work-par'>Choose Your Meals From Our Diverse Weeklu Menu</p>
                    </div>
                    <div className='box-work shadow'>
                        <img src={foodIcon2} width="70px" alt='icon'/>
                        <p className='work-title'>Choose How Often</p>
                        <p className='work-par'>Choose Your Meals From Our Diverse Weeklu Menu</p>
                    </div>
                    <div className='box-work'>
                        <img src={foodIcon3} width="70px" alt='icon'/>
                        <p className='work-title'>Fast Deliveries</p>
                        <p className='work-par'>Choose Your Meals From Our Diverse Weeklu Menu</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='home-container3' id='services'>
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
            </div>
            <ScrollButton/>
            <Footer/>
        </div>
    )
}

export default Home