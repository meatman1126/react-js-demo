import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';
function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'tp' },
    { rowNumber: 2, rowDescription: 'eat a lot', rowAssigned: 'tp2' },
    { rowNumber: 3, rowDescription: 'sleep enough', rowAssigned: 'tp' },
    { rowNumber: 4, rowDescription: 'learn more', rowAssigned: 'tp' }
  ]);
  const addTodo = (assigned, description) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodos = { rowNumber: rowNumber, rowDescription: description, rowAssigned: assigned };
    setTodos(todos => [...todos, newTodos]);
  };
  const deleteTodo = (deleteTodoRowNumber) => {
    let filterd = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filterd);
  };
  return (
    <div className=' mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button className='btn btn-primary' onClick={() => { setShowAddTodoForm(!showAddTodoForm) }}>
            {showAddTodoForm ? 'close New Todo Form' : 'New Todo'}
          </button>
        </div>
        {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo} />
        }
      </div>
    </div>
  );
}

export default App;
