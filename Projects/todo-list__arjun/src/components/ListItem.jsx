import join from "../utils/join";

const ListItem = ({ value, checked, handleToggle }) => {

  return (
    <li className={join("todo__item", [checked, "checked"])}>
      <div className="todo__bullet"onClick={handleToggle}>*</div>
      <p>{value}</p>
    </li>
  )

}


export default ListItem;