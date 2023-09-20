import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice.js';

const store = configureStore({
  todos: todosReducer,
});

export default store;
