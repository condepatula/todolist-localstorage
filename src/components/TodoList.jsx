import { Text } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return <Text fontSize="sm">No data found...</Text>;
  }
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    );
  });
};

export default TodoList;
