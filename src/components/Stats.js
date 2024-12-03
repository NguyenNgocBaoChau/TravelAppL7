import React from "react";

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems
    ? Math.round((packedItems / totalItems) * 100)
    : 0;

  return (
    <footer className="stats">
      <p>
        Total items: {totalItems} | Packed items: {packedItems} (
        {packedPercentage}%)
      </p>
      {packedPercentage === 100 && <p>You got everything packed!</p>}
    </footer>
  );
}

export default Stats;
