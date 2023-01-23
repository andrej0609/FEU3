import { createContext, useState } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = async (order) => {
    try {
      const response = await fetch('https://believed-shore-vanadium.glitch.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: order.id,
          people: order.people,
          price: order.price
        })
      });
      const data = await response.json();
      setOrders([...orders, data]);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteOrder = async (id) => {
    try {
      await fetch(`https://believed-shore-vanadium.glitch.me/${id}`, {
        method: 'DELETE',
      });
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        setOrders,
        deleteOrder
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderProvider };
export default OrderContext;