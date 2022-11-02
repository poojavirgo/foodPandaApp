import React from 'react'
import HomeInfoCard from './HomeInfoCard'


const HomeInfoCardContainer=()=> {
    const onHomeCardHandler=()=>{
        window.location.replace('/menu');
    }
    return (
        <div className="infoCardContainer d-flex flex-wrap justify-content-center align-items-center bd-grey" style={{marginLeft:'10rem'}}>
            <div onClick={onHomeCardHandler}>
            <HomeInfoCard infoImg="https://cdn.pixabay.com/photo/2018/03/07/18/42/menu-3206749_960_720.jpg" 
            infoTitle="Order your favourite food" infoLink="Check the Menu"/>
            </div>
            
        </div>
    )
}

export default React.memo(HomeInfoCardContainer)