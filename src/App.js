import { useState, Profiler } from 'react';
import { createTodos } from './utils.js';
import TodoList from './TodoList.js';
import './App.css'
const todos = createTodos();

const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
 };
 

export default function App() {
  const [tab, setTab] = useState('all');
  return (
    <div className='App'>
      <>
      <h1>TODO LIST</h1>
      <button onClick={() => setTab('all')}>
        ALL
      </button>
      <button onClick={() => setTab('active')}>
        ACTIVE
      </button>
      <button onClick={() => setTab('completed')}>
        COMPLETED
      </button>
      <br/>
      <Profiler id="TodoList" onRender={logTimes}>
      <TodoList
        todos={todos}
        tab={tab}
      />
      </Profiler>
    </>
    </div >
  );
}