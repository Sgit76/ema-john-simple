import React from 'react';
import img from '../../images/giphy.gif';
const PlaceOrder = () => {
    return (
        <div style={{textAlign: 'center' , paddingTop: '20px'}}>
            <img src={img} alt="" />
            <h1>Your Order is Successfully Comfirmed!!!</h1>
        </div>
    );
};

export default PlaceOrder;