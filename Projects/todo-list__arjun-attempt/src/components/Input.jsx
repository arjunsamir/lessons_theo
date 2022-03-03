import { useState } from "react"
import { CheckmarkOutline } from "react-ionicons"

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
        <button type="submit"><CheckmarkOutline color="currentColor" /></button>
      </form>
    </div>
  )

}


export default Input;