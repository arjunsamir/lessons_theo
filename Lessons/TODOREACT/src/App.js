
import Input from "./components/InputForm"
import ListItem from "./components/ListItem"
import { useState } from "react";
import "./styles/theStyle.scss"
function App() {

  const [newTodo , setNewTodo] = useState("");
  const [todoArray , setTodoArray] = useState([]);
  


  return (
    <div className="App">
      <h1>Todo List</h1>

      <ul>
        {todoArray.map((todo , index) => <ListItem todo={todo.newTodo} key={index} checked={todo.checked} changeHandler={()=>{
          const clone = [...todoArray] //each todo item has the whole array of all todos with this change handler
          clone[index].checked = !clone[index].checked // here we switch our bool to the opposite of what it is when clicked inside the todo compo

          //////
          //potentially add a check here to see if tthe value was changed and implement change if it is detected?**
          //use this change handler to take care of this and add the input logic inside the ListItem component?
          //////

          setTodoArray([...clone]) //then we set the new array as the new main array 
        }} />  )}
      </ul>

      <Input newTodo={newTodo} setNewTodo={setNewTodo} onSubmit={()=>{
          if(!newTodo) return 
          setTodoArray([...todoArray , {newTodo , checked:false}]);
          setNewTodo("");
      }} />
    </div>
  );
}

export default App;




//functionality I need 

//be able to click on a todo to edit the item inside 
//order the todo's based on wether or not they were completed 



