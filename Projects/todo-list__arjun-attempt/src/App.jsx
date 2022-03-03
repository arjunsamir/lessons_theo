import { useState } from 'react';
import Input from './components/Input';
import ListItem from './components/ListItem';

function App() {

  // Declare State
  const [items, setItems] = useState([])

  // Split up and sort items by checked
  const checkedItems = items.filter(item => item.checked);
  const uncheckedItems = items.filter(item => !item.checked);

  // Render the list of items
  const renderItems = (item, index) => (
    <ListItem
      key={index}
      handleToggle={() => {
        const newItems = [...items];
        newItems[index].checked = !newItems[index].checked;
        setItems([...newItems]);
      }}
      handleEdit={(e) => {
        const newItems = [...items];
        newItems[index].value = e.target.value;
        setItems([...newItems]);
      }}
      // This allows us to destructure the item object into props
      {...item}
    />
  )

  return (
    <main className="todo">
      <div className="todo__container">
        <h1 className="todo__title">Todo List</h1>
        <ul className="todo__list todo__list--unchecked">
          {uncheckedItems.map(renderItems)}
        </ul>
        <h3>Done</h3>
        <ul className="todo__list todo__list--checked">
          {checkedItems.map(renderItems)}
        </ul>
        <Input
          addItem={(value) => {
            setItems([...items, { value, checked: false }])
          }}
        />
      </div>
    </main>
  );
}

export default App;
