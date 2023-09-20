import { createSelector, PayloadAction} from '@reduxjs/toolkit';
import { getNewId } from '../utils/helperFunction';


const initialState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : []; 

  const todosSlice = createSelector({
    name: 'todos',
    initialState,
    reducer: {
      add: (todos, actions) => {
        if (actions.payload.trim() === '') {
          return;
        }

        const tempTodo = {
          id: getNewId(todos) || 0,
          title: actions.payload,
          completed: false,
        }

        const newTodos = [...todos, tempTodo];
        localStorage.setItem('todos', JSON.stringify(newTodos));
      }


    }
  });


  export default todosSlice.reducer;
  export const { actions } = todosSlice;