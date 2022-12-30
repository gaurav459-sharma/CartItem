import React from "react";

class CartItems extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            title:'mobile phone',
            Qty: 1,
            img: ''
        }
    }
    //if we not use the arrow function then we have to bind the function 
    increaseQuantity=()=>{
        console.log("this ", this.state);
    }

    render(){
        const {price,title,Qty}=this.state;
        return(
            <div className="cart-item">   {/*used for cart products*/}
                 <div className="left-block">  {/*image of items*/}
                    <img style={styles.image} />
 
                 </div>

                 <div className="right-block"> {/*details of items */}
                     <div style={{fontSize:25}}>{title}</div>
                     <div style={{color:'#777'}}>Rs {price} </div>
                     <div style={{color:'#777'}}>Qty:{Qty}</div>

                     <div className="cart-item-actions">  {/*for button */}
                           <img 
                           alt="increase" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                            />
                           <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                           />
                           <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                           />
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