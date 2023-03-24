import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const Header = (props) => {
  let [cartOpen , SetcartOpen] = useState(false);
  const showOrders = (props) =>{
    let summa = 0 
    props.orders.forEach((el) => summa += Number.parseFloat(el.price));
    return(
      <div>
        {props.orders.map(el => (
          <Order onDelete = {props.onDelete} key={el.id} item={el}/>
        ))}
        <p className='summa'>Total price : {new Intl.NumberFormat().format(summa)}$</p>
      </div>
    )
  }
  
  
  
  const showNothing = () =>{
    return(
      <div className='empty'>
        <h2>The Shopping Cart is empty</h2>
      </div>
    )
  }
  return (
    <header>
        <div>
            <span className='logo'>House Stuff</span>
            <ul className='nav'>
                <li>ABOUT US</li>
                <li>CONTATCS</li>
                <li>PROFILE</li>
            </ul>
            <FaShoppingCart onClick={()=>SetcartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='cart'>
                {props.orders.length > 0 ? 
                  showOrders(props) : showNothing()
                }
              </div>
            )}
        </div>
        <div className='presentation'>

        </div>
    </header>
  )
}

export default Header