import { useState } from 'react';
import Input from './components/Input';
import ListItem from './components/ListItem';

function App() {

  // Declare State
  const [items, setItems] = useState([])

  // Sort items by checked and unchecked
  const sortedItems = [
    ...items.filter(item => !item.checked),
    ...items.filter(item => item.checked)
  ];

  // Render the list of items
  const renderItems = (item, index) => (
    <ListItem
      key={item.id}
      handleToggle={(e) => {

        // Get Parent Element (li)
        const parent  = e.target.parentElement;

        // Make Opacity disappear
        parent.style.opacity = 0;
        parent.style.height = 0;
        parent.style.margin = 0;

        // Delay the update to the state
        setTimeout(() => {

          const newItems = [...items];
          newItems[index].checked = !newItems[index].checked;

          // Update state and re-renders
          setItems([...newItems]);

          parent.style.opacity = 1;
          parent.style.height = "2.4rem";
          parent.style.margin = "0 0 1.6rem 0";

        }, 1000)

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
        <ul className="todo__list">
          {sortedItems.map(renderItems)}
        </ul>
        <Input
          addItem={(value) => {
            setItems([...items, { value, checked: false, id: Date.now() }])
          }}
        />
      </div>
    </main>
  );
}

export default App;
