import { useState } from 'react';
import Input from './components/Input';
import ListItem from './components/ListItem';

function App() {

  const [items, setItems] = useState([])

  return (
    <main className="todo">
      <div className="todo__container">
        <h1 className="todo__title">Todo List</h1>
        <ul className="todo__list">
          {items.map((item, index) => (

            <ListItem
              key={index}

              handleToggle={() => { //logic for Xing out completed todo 
                const newItems = [...items];
                newItems[index].checked = !newItems[index].checked; //if its clicked then inverse whatever state its in checked/unchecked
                setItems([...newItems]); // then just add the whole thing back 
              }}

              
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              
              handleEdit={()=>{ //this is the click handler itll flick the I WANNA BE EDITED bool on or off based on its last state 
                const editedItems = [...items]// we grab all the todo and spread them into a new array 

                
                //so here we do the same as above to flip a bool based on a click essentially
                editedItems[index].isEdit = !editedItems[index].isEdit;
                setItems([...editedItems])


  
                console.log(item , index)
                //not much here its ripped code from below 
                
              }}

              submitEdit={(edit)=>{//this will be the event that triggers when the user clicks out of the todo and set the new value of the todo
                //Update the value of the modified todo in our global state 

                //out component sees this as submitEdit(edit) = > (functionstuff) this confused me but prop name is func name in this case

                
                //we pass down to our ListItem compo the Edit function that lets us take the edited data and place it here 
                

                const currentTodoArr = [...items] //we make a copy of our current state 

                currentTodoArr[index] = {value: edit , cheked: false , isEdit: false} // here we add the new edited value at the correct index 
              
               

                

                setItems(currentTodoArr); //we call out state setter and place our newly modified data and the old data back in our
                //state which causes a re-render

                console.log(currentTodoArr)
              }}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


              // This allows us to destructure the item object into props
              {...item} // not sure what this is doing
            />

          ))}
          <Input
            addItem={(value) => {
              setItems([...items, { value, cheked: false , isEdit: false }]) //**Explain cause this is hurting my brain for some reason */
            }}
          />
        </ul>
      </div>
    </main>
  );
}

export default App;



//Something I noticed each item has two checked states one is always false probably due to how the join function works ***