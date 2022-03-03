import join from "../utils/join";

const ListItem = ({ value, checked, handleToggle, handleEdit }) => {

  return (
    <li className={join("todo__item", [checked, "checked"])}>
      <div className="todo__bullet" onClick={handleToggle}></div>
      <input type="text" value={value} onChange={handleEdit} />
    </li>
  )

}


export default ListItem;