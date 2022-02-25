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
              handleToggle={() => {
                const newItems = [...items];
                newItems[index].checked = !newItems[index].checked;
                setItems([...newItems]);
              }}
              // This allows us to destructure the item object into props
              {...item}
            />
          ))}
          <Input
            addItem={(value) => {
              setItems([...items, { value, cheked: false }])
            }}
          />
        </ul>
      </div>
    </main>
  );
}

export default App;
