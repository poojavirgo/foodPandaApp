
import React from 'react'
import DeliveryInfo from './DeliveryInfo'

const CheckOut=()=> {
    
    return (
        <div className="checkOutOrder">
            <div className="d-flex align-items-center" style={{display:"flex"}}>
            <img className="checkOutOrderImg img-responsive" src="https://assetcdn.pickupp.io/prime/8a01a8893881250a47cee80100a73ff5ac5bd4fe_Ramadan-Food-Delivery.jpg" alt="" />
            <DeliveryInfo/>
            </div>
        </div>
    )
}

export default React.memo(CheckOut)