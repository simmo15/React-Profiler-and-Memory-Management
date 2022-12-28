import { useState } from 'react';
import { createTodos } from './utils.js';
import TodoList from './TodoList.js';
import './App.css'
const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  return (
    <div className='App'>
    <>
    <br></br>To do list<br/>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <TodoList
        todos={todos}
        tab={tab}
      />
    </>
    </div>
  );
}

