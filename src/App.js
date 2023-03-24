import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import { useState } from "react";
import { items } from './items';
import Categories from "./components/Categories";
import FloatWindow from "./components/FloatWindow";

function App() {
  let [item , setItem] = useState(items)
  let [orderItem , setOrderItem] = useState([])
  let [currentItems , setCurrentItem] = useState(item)
  let [showFloat , setShowFloat] = useState(false)
  let [fullInfo , setFullInfo] = useState({})
    const addToOrder = (element) =>{
      let isInArray = false;
        orderItem.forEach(el => {
          if(el.id === element.id)
            isInArray = true;
        })
        if(!isInArray)
          setOrderItem  ([...orderItem, element]);
    }
  
  const handelDelete = (id) =>{
    setOrderItem(orderItem.filter(el => el.id !== id))
  }

  const chooseCategory =(category) =>{
    if(category === "all"){
      setCurrentItem (item)
      return
    }
    setCurrentItem(item.filter(el => el.category === category))
  }

  const handelFloatWindow = (item) => {
    setFullInfo(item)
    setShowFloat(!showFloat)
  }
  return (
      <div className="wrapper">
        <Header orders = {orderItem} onDelete = {handelDelete}/>
        <Categories chooseCategory = {chooseCategory}/>
        <Items items = {currentItems}  addToOrder ={addToOrder} handelFloatWindow = {handelFloatWindow}/>
        {showFloat && <FloatWindow fullInfo = {fullInfo} addToOrder ={addToOrder} handelFloatWindow = {handelFloatWindow} />}
        <Footer />
      </div>
  );
}

export default App;
