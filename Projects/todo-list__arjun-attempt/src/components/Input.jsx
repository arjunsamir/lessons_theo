import { useState } from "react"

const Input = ({ addItem }) => {

  const [value, setValue] = useState("")

  return (
    <div className="todo__add">
      <form onSubmit={(e) => {
        e.preventDefault()
        
        // If input is empty do nothing
        if (!value) return;

        // Run callback function only if it is defined
        if (addItem) addItem(value)

        // Reset input value
        setValue("")
      }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new item..."
        />
        <button type="submit">Checkmark</button>
      </form>
    </div>
  )

}


export default Input;