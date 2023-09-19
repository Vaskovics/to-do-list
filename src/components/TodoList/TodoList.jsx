import React from 'react';
import './todoList.scss';
import classNames from 'classnames';

const TodoList = ({ 
  todos, 
  onRemove,
  onComplete,
}) => {
  return (
    <div className='todolist'>
      <ul>
        {todos.map((todo) => (

          <li 
            key={todo.id}
            className={classNames(
              'todolist__item',
              {
              'completed': todo.completed,
            })}
          >
            <button onClick={() =>onRemove(todo.id)}>X</button>
            
            <span 
              className={classNames(
                'todolist__title',
                {
                  'completed': todo.completed,
                }
              )}
              onClick={() => onComplete(todo.id)}
            >
              {todo.title}
            </span>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
