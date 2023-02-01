import { useMemo } from 'react';
import { filterTodos } from './utils.js'

export default function TodoList({ todos,tab }) {
  // we can uncomment this code to demonstatre the significant change in performance
  // const visibleTodos = useMemo(
  //   () => filterTodos(todos, tab),
  //   [todos, tab]
  // );
  const visibleTodos = filterTodos(todos, tab);
  return (
    <div className="todo-list">
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}