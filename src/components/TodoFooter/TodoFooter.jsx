import React from 'react';
import './TodoFooter.scss';

const TodoFooter = ({ 
  activeTodos, 
  onActive,
  onCompleted,
  onAll
}) => {
  return (
    <div className='footer'>
      <span>{`${activeTodos} active todo${activeTodos === 1 ? '' : 's'}`}</span>
      
      <nav className='footer__nav'>
        <a
          href="#/"
          className='footer__link'
          onClick={() => onAll()}
        >
          All
        </a>

        <a
          href="#/"
          className='footer__link'
          onClick={() => onCompleted()}
        >
          Completed
        </a>

        <a
          href="#/"
          className='footer__link'
          onClick={() => onActive()}
        >
          Active
        </a>
      </nav>
    </div>
  )
}

export default TodoFooter
