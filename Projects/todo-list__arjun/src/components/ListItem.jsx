import join from "../utils/join";
import { useState } from "react"

const ListItem = ({ value, checked, handleToggle , handleEdit ,isEdit , submitEdit}) => {

  const [edit , setEdit] = useState("");

    if(isEdit){ //the logic here is that we render a different Li if the isEdit Bool is triggered
      
      //so if an Edit is triggered via the event handler on the p tag we get this Li instead of the one below 
      console.log("weewoo we are in edit mode")
      
      return (
       <li>
         <input
          type="text" placeholder={value}  //we place the old value as a place holder this can be improved by pre filling it with the old data
          onChange={(e) => setEdit(e.target.value)} //we track all the changes in this input and store it to our local state here 
          onBlur={(e)=>{ //when the user click's out of the input we trigger this call back here
            if(!edit) return //if edit isnt full of data (string) we just return because that means nothing happened 
            submitEdit(edit); // we submit our edit to app.jx which processes it
          }}
          />
       </li>
      )
    }

    else{

      return (
        
        <li className={join("todo__item", [checked, "checked"])}>
          <div className="todo__bullet"onClick={handleToggle}>[]</div>
          <p onClick={handleEdit}>{value}</p>
        </li>
      )

    }

}

  


export default ListItem;