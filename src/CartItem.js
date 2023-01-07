import React from "react";

class CartItems extends React.Component{

    // //if we not use the arrow function then we have to bind the function 
    // increaseQuantity=()=>{
    //     // console.log("this ", this.state);

    //     // set state form-1
    //     //used when we have no need of previous state
    //     // this.setState({
    //     //     Qty:this.state.Qty+1
    //     // });

    //     //set state form-2
    //     //mainly use when we have a requirements of previous state
    //     this.setState((prevState)=>{
    //       return{
    //         Qty:prevState.Qty+1
    //       }
        

    //     });
    // }
    // decreaseQuantity=()=>{
    //     const t=this.state.Qty;
    //     if(t===0)return;
    //    this.setState((prevState)=>{
    //     return {
    //         Qty:prevState.Qty-1
    //     }
    //    })
    // }

    render(){
         
        const {price,title,Qty}=this.props.product;
        const { 
             product,
             increaseQuantity,
             decreaseQuantity,
             deleteButton}
             =this.props;
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
                            onClick={()=>increaseQuantity(product)}
                            />
                           <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                           onClick={()=>decreaseQuantity(product)}
                           />
                           <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                           onClick={()=>deleteButton(product.id)}
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