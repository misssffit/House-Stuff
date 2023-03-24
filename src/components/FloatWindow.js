import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const FloatWindow = (props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);
  return (
    <div className='float-window'>
        <div>
            <AiOutlineClose className='close-icon' onClick={() => props.handelFloatWindow(props.fullInfo)}/>
            <img src={"./img/" + props.fullInfo.img} alt=""/>
            <h2>{props.fullInfo.title}</h2>
            <p>{props.fullInfo.desc}</p>
            <b>{props.fullInfo.price}</b>
            <div className='add-to-cart' onClick={() => props.addToOrder(props.fullInfo)}>+</div>
        </div>
    </div>
  )
}

export default FloatWindow