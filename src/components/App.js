import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("description");

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleEditItem(id, newDescription, newQuantity) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, description: newDescription, quantity: newQuantity }
          : item
      )
    );
  }

  function clearPackedItems() {
    setItems((prevItems) => prevItems.filter((item) => !item.packed));
  }

  function resetList() {
    setItems(initialItems);
  }

  function handleSort(sortValue) {
    setSortBy(sortValue);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onTogglePacked={handleTogglePacked}
        onDelete={handleDeleteItem}
        onEditItem={handleEditItem}
        onSort={handleSort}
        sortBy={sortBy}
      />
      <Stats items={items} />
      <div className="buttons">
        <button onClick={clearPackedItems}>Clear Packed Items</button>
        <button onClick={resetList}>Reset List</button>
      </div>
    </div>
  );
}

export default App;
