import React, { useEffect, useState } from 'react'

const Categories = (props) => {
    let [active , setActive] = useState("all");
    const [categories , setCategories] = useState([
        {
            id: 'all',
            name : "All"
        },
        {
            id: 'chair',
            name : "Chairs"
        },
        {
            id: 'sofa',
            name : "Sofas"
        },
        {
            id: 'table',
            name : "Tables"
        },
        {
            id: 'light',
            name : "Light"
        }
    ])
    function switchCategory(el){
        props.chooseCategory(el)
        
    }
    function handelActive(id){
        setActive(id)
    }
    useEffect(() => {
        document.querySelector(`.${active}`).style.color = "#ca5252";
        document.querySelector(`.${active}`).style.transform = "scale(1.25)"; 
        return () => {
            document.querySelector(`.${active}`).style.color = 'unset';
            document.querySelector(`.${active}`).style.transform = "unset"; 
          };
      });
      
  return (
    <div className='categories'>
        {categories.map((el) => (
            <div key={categories.id} onClick={() => {switchCategory(el.id); handelActive(el.id)}} className={`category_item ${el.id}`}>{el.name}</div>
        ))}
    </div>
  )
}

export default Categories