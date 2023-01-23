import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OrderContext from '../OrderContext';

const Add = () => {
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      id: Math.floor(Math.random() * 10000),
      people,
      price
    }
    addOrder(order);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of People:
        <input
          type="number"
          value={people}
          onChange={e => setPeople(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add Order</button>
    </form>
  );
};

export default Add;