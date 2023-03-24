import Item from './Item';


const Items = (props) => {

  return (
    <main>
        {props.items.map((el) => (
        <Item  key={el.id} item={el} onAdd={props.addToOrder} handelFloatWindow = {props.handelFloatWindow}/>
    ))}
    </main>
  )
}

export default Items