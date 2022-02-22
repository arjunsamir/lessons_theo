
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
          const clone = [...todoArray]
          clone[index].checked = !clone[index].checked

          setTodoArray([...clone])
        }}/>  )}
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
