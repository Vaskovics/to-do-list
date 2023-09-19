export const getNewId = (todos) => {
  if (!todos.length) {
    return 0
  }

  return todos[todos.length - 1].id + 1;
}