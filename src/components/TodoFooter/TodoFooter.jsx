import React from 'react';
import './TodoFooter.scss';

const TodoFooter = ({ activeTodos}) => {
  return (
    <div className='footer'>
      <span>{`${activeTodos} active todo${activeTodos === 1 ? '' : 's'}`}</span>
      
      <nav className='footer__nav'>
        <a
          href="#/"
          className='footer__link'
        >
          All
        </a>

        <a
          href="#/"
          className='footer__link'

        >
          Completed
        </a>

        <a
          href="#/"
          className='footer__link'
        >
          Active
        </a>
      </nav>
    </div>
  )
}

export default TodoFooter
