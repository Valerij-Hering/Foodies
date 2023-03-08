import { useState } from 'react';
import dataCarousel from './data/dataCarousel';



const Carousel = () => {

  const [promotion, setPromotion] = useState(0);
  const {id, img} = dataCarousel[promotion];


  const previousPromotion = () => {
    setPromotion((promotion => {
      promotion --;
      if(promotion < 0){
        return dataCarousel.length -1;
      }
      return promotion;
    }))
  }

  const nextPromotion = () => {
    setPromotion((promotion => {
      promotion ++;
      if(promotion > dataCarousel.length -1){
        promotion = 0;
      }
      return promotion;
    }))
  }

  return (
    <div className='caorusel'>
        

        <div className='subcontainer-caorusel'>
            <img className='home-img1' src={`${img}.png`} alt="dish"/>
        </div>
        <div>
            <p><span>{id}</span>/<span>{dataCarousel.length}</span></p>
        </div>
        <div>
            <button className='btn-caorusel' onClick={previousPromotion}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button className='btn-caorusel' onClick={nextPromotion}><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
        
    </div>
  );
}

export default Carousel;