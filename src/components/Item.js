import React, { useState } from "react";

function Item({ item, onTogglePacked, onDelete, onEditItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(item.description);
  const [editQuantity, setEditQuantity] = useState(item.quantity);

  function handleSave() {
    onEditItem(item.id, editDescription, editQuantity);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <input
            type="number"
            min="1"
            value={editQuantity}
            onChange={(e) => setEditQuantity(Number(e.target.value))}
          />
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={() => setIsEditing(false)}>❌ Cancel</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: item.packed ? "line-through" : "none" }}
          >
            {item.quantity}x {item.description}
          </span>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onTogglePacked(item.id)}
          />
          <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
          <button onClick={() => onDelete(item.id)}>❌</button>
        </div>
      )}
    </li>
  );
}

export default Item;
