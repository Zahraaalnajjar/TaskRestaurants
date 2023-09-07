import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (!newTodo) return; 

    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Fried Chiken reasturants</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new reasturnat..."
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
           <Link to="/ReasturantName">{todo}</Link>  <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
