import { FaTrash } from 'react-icons/fa'

const Order = (props) => {
  return (
    <div className='item'>
        <img src={"./img/" + props.item.img} alt="" />
        <h2>{props.item.title}</h2>
        <b>{props.item.price}</b>
        <FaTrash className='delete-item' onClick={() => props.onDelete(props.item.id)}/>
    </div>
  )
}

export default Order