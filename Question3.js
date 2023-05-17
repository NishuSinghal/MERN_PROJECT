// Write a React component that renders a list of items fetched from an API. 

import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://api.example.com/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;