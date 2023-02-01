import React from 'react';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import Monkey from '../img/monkey.gif'
import { nanoid } from 'nanoid';

const MessageList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState(null);

  useEffect(() => {
    if (!loggedInUser) {
      setError("Please log in to see your messages.");
      setLoading(false);
      return;
    }
    fetch('http://localhost:5000/messages')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(messages => {
        setMessages(messages)
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [loggedInUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessageObject = {
      userName: loggedInUser.userName,
      avatar: loggedInUser.avatar,
      message: newMessage,
      timeStamp: new Date().getTime(),
      id: nanoid()
    }

    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessageObject)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(newMessageObject => {
        setMessages([...messages, newMessageObject]);
        setNewMessage("");
      })
      .catch(error => {
        setError(error.message);
      });
  }

  if (loading) {
    return (
      <div className="loading">
        <img src={Monkey} alt="loading" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        Error: {error}
      </div>
    );
  }

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const handleEdit = (message) => {
    if (loggedInUser.userName !== message.userName) {
      return;
    }
    setEditingMessage(message);
    setNewMessage(message.message);
  }

  const handleUpdate = (message) => {
    if (loggedInUser.userName !== message.userName) {
      return;
    }
    const updatedMessage = {
      ...message,
      message: newMessage
    }
    fetch(`http://localhost:5000/messages/${message.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedMessage)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(updatedMessage => {
        setMessages(messages.map(message => message.id === updatedMessage.id ? updatedMessage : message));
        setEditingMessage(null);
        setNewMessage("");
      })
      .catch(error => {
        setError(error.message);
      });
  }

  const handleDelete = (message) => {
    if (loggedInUser.userName !== message.userName) {
      return;
    }
    fetch(`http://localhost:5000/messages/${message.id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        setMessages(messages.filter(m => m.id !== message.id));
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <div className="message-list">
      <h2>Messages</h2>
      <form onSubmit={handleSubmit}>
        <textarea type="text" value={newMessage} onChange={handleMessageChange} />
        <button type="submit">Send</button>
      </form>
        {messages.map(message => (
          <div key={message.id} className="message">
            <div className="message-header">
              <img src={message.avatar} alt={message.userName} />
              <h3>{message.userName}</h3>
              <p>{new Date(message.timeStamp).toLocaleString()}</p>
            </div>
            <p>{message.message}</p>
            <div className="message-footer">
              {editingMessage === message ? (
                <button onClick={() => handleUpdate(message)}>Update</button>
              ) : (
                <>
                  {loggedInUser.userName === message.userName && (
                    <>
                      <button onClick={() => handleEdit(message)}>Edit</button>
                      <button onClick={() => handleDelete(message)}>Delete</button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default MessageList;