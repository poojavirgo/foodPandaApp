import React from 'react';


const HomeInfoCard=({infoImg, infoTitle, infoLink})=> {
    return (
        <div className="card homeInfoCard text-center" style={{backgroundColor :'white'}}>
  <img className="card-img-top" src={infoImg} alt="" style={{width:'inherit'}}/>
  <div className="card-body p-2">
    <h3 className="card-title">{infoTitle}</h3>
    <p className="lead card-link"><b>{infoLink}</b><i className="bi bi-arrow-right-square"></i></p>
  </div>
</div>
    )
}

export default HomeInfoCard;