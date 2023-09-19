import { useState, useEffect, useMemo } from 'react';
import './App.scss';
import TodoInput  from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { getNewId } from './utils/helperFunction';
import TodoFooter from './components/TodoFooter/TodoFooter';


function App() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [filterBy, setFiletBy] = useState();

  const countActiveTodos = useMemo(() => {
    const count = todos.reduce((count, current) => {
      if (!current.completed) {
        return count + 1;
      }

      return count;
    }, 0)

    return count;
  });

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);


  const handleAddTodo = () => {
    if (newTitle.trim() === '') {
      return;
    }

    const tempTodo = {
      id: getNewId(todos) || 0,
      title: newTitle,
      completed: false,
    }

    const newTodos = [...todos, tempTodo];
    localStorage.setItem('todos', JSON.stringify(newTodos));

    setTodos(newTodos);
    setNewTitle('');
  }

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
  
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
  
      return updatedTodos;
    });
  }
  

  const handleActiveTodos = () => {
    setFiletBy('active');
  }

  const handleCompletedTodos = () => {
    setFiletBy('completed');
  }

  const handleAllTodos = () => {
    setFiletBy('');
  }

  const visibleTodosList = [...todos].filter(todo => {
    switch (filterBy) {
      case 'active':
        return !todo.completed;

      case 'completed':
        return todo.completed;

      default:
        break;
    }

    return todo;
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
  
      <div className='container'>
        <TodoInput
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          onAddTodo={handleAddTodo}
        />

        <TodoList 
          todos={visibleTodosList}
          onRemove={handleRemoveTodo}
          onComplete={handleCompleteTodo}
        />
        <TodoFooter 
          activeTodos={countActiveTodos}
          onActive={handleActiveTodos}
          onCompleted={handleCompletedTodos}
          onAll={handleAllTodos}
        />
      </div>
    </div>
  );
}

export default App;
