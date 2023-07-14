import './Item.css';

function Item(props){
    return(
        <div>
        <p className="item">This is the first Component {props.day}</p>
        {props.children}
        </div>
    )
};

export default Item;