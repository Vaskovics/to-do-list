import React from 'react';
import './todoList.scss';
import classNames from 'classnames';

const TodoList = ({ 
  todos, 
  onRemove,
  onComplete,
  onEdit,
  editTodoId,
  editedText,
  onChangeEdit,
  onSaveEditedTOdo
}) => {
  return (
    <div className='todolist'>
      <ul>
        {todos.map((todo) => (
          <li
            className="todolist__item"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              <div>
                <input
                  type='text'
                  value={editedText || todo.title}
                  onChange={(e) => onChangeEdit(e.target.value)}
                />

                <button onClick={() => onSaveEditedTOdo(todo.id)}>
                  Save
                </button>
              </div>

            ): (
            
            <div>
                <button
                  onClick={() =>onRemove(todo.id)}
                  className='todolist__button'
                >
                X
                </button>
              
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

                <span
                  className='todolist__edit'
                  onClick={() => onEdit(todo.id)}
                  title='Edit Todo'
                >
                  🖋️
                </span>
              </div>
             
                )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
