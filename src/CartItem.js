import React from "react";

class CartItems extends React.Component{
    render(){
        return(
            <div className="cart-item">   {/*used for cart products*/}
                 <div className="left-block">  {/*image of items*/}
                    <img style={styles.image} />
 
                 </div>

                 <div className="right-block"> {/*details of items */}
                     <div style={{fontSize:25}}>phone</div>
                     <div style={{color:'#777'}}>Rs 999</div>
                     <div style={{color:'#777'}}>Qty: 1</div>

                     <div className="cart-item-actions">  {/*for button */}
                           <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                           <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                           <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
                     </div>
                 </div>
            </div> 
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItems