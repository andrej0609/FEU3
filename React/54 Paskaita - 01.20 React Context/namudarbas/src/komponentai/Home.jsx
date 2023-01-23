import React, { useContext, useState, useEffect } from 'react';
import OrderContext from '../OrderContext';

const Home = () => {
  const { orders, setOrders, deleteOrder } = useContext(OrderContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://believed-shore-vanadium.glitch.me')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [setOrders, orders]);

  if (loading) {
    return <div><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" /></div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Number of People</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.id}</td>
            <td>{order.people}</td>
            <td>{order.price}</td>
            <td>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;