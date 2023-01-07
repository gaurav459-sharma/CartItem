import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component{
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
handleDecreaseQuantity=(product)=>{
    // console.log('hey increase the quantity',product)
    const {products}=this.state;
    const index=products.indexOf(product);
    const qty=products[index].Qty;
    if(qty===0)return;

    products[index].Qty-=1;
    this.setState({
        products:products
    })
}
handleDeleteButton=(id)=>{
    const {products}=this.state;
    const items= products.filter((item)=>item.id!==id) //return the complete list except the item which have that id
    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((products) => {
    count+=products.Qty;
  });
  return count;
}
  render(){
    const { products }=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products}
         increaseQuantity={this.handleIncreaseQuantity}
         decreaseQuantity={this.handleDecreaseQuantity}
         deleteButton={this.handleDeleteButton}/>
      </div>
    );
  }
}


export default App;
