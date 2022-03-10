

function ListItem({todo , checked , changeHandler}){
    return (
        <li onClick={changeHandler}>
            <input type="checkbox" checked={checked} />
            <p>{todo}</p>
            
        </li>
    )
}


export default ListItem;