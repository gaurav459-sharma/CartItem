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
    handleIncreaseQuantity=(product)=>{
        // console.log('hey increase the quantity',product)
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].Qty+=1;
        this.setState({
            products:products
        })
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
                    increaseQuantity={this.handleIncreaseQuantity}
                    />
                )
              })}
              
           
             
            </div>
        );
    }
}

export default Cart