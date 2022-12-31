import React from "react";
import CartItems from "./CartItem";

class Cart extends React.Component{
    
    constructor(){
        super();
        this.state={
           products:[
            {
                price:999,
                title:'mobile phone',
                Qty: 1,
                img: '',
                id:1
            },
            {
                price:99,
                title:'Watch',
                Qty: 1,
                img: '',
                id:2
            },
            {
                price:9999,
                title:'Laptop',
                Qty: 1,
                img: '',
                id:3
            }
           ]
        }
    }
    render(){
     const { products }=this.state;
        return (
            <div className="cart">
              
              {products.map((product)=>{
                return (
                    <CartItems 
                    product={product} 
                    key={product.id} 
                    
                    />
                )
              })}
              
           
             
            </div>
        );
    }
}

export default Cart