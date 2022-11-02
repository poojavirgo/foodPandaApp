import React from 'react'
import mealsImg from '../../assets/meals.jpg';
import '../../css/home-cards.css';

const CardContainer=()=> {
    return (
        <div className="full-container-fluid">
              <img className="img-fluid" id="home-img" src={mealsImg} alt="A table full of delicious food" />
        </div>
    )
}

export default React.memo(CardContainer);