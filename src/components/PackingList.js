import React from "react";
import Item from "./Item";

function PackingList({ items, onTogglePacked, onDelete, onEditItem, onSort, sortBy }) {
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "description") return a.description.localeCompare(b.description);
    if (sortBy === "packed") return a.packed - b.packed;
    return 0;
  });

  return (
    <div className="list">
      <div className="sorting-controls">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => onSort(e.target.value)}>
            <option value="description">Description</option>
            <option value="packed">Packed Status</option>
          </select>
        </label>
      </div>
      {sortedItems.length === 0 ? (
        <p>Your packing list is empty!</p>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onTogglePacked={onTogglePacked}
              onDelete={onDelete}
              onEditItem={onEditItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PackingList;
