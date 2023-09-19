import React from 'react'
import './TodoInput.scss';

const TodoInput = ({ 
  newTitle, 
  setNewTitle, 
  onAddTodo,
}) => {
  return (
    <div className='todo-input'>
      <input 
        type='text'
        placeholder='Please add a new todo'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <button
        onClick={onAddTodo}
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput;
