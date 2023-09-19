import React from 'react';
import './TodoFooter.scss';

const TodoFooter = () => {
  return (
    <div className='footer'>
      <span>{`active todos`}</span>
      
      <nav className='footer__nav'>
        <a
          href="#/"
        >
          All
        </a>

        <a
          href="#/"
        >
          Completed
        </a>

        <a
          href="#/"
        >
          Active
        </a>
      </nav>
    </div>
  )
}

export default TodoFooter
