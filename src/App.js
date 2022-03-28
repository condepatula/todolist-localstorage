import React from "react";
import { ChakraProvider, Container, Text, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todosFiltered, setTodosFiltered] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getTodos = () => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos !== "undefined" && localTodos !== "null") {
      setTodos(JSON.parse(localTodos));
    } else {
      setTodos([]);
    }
  };

  useEffect(() => {
    setTodosFiltered(
      todos.filter((todo) => {
        if (filter === "PENDING") {
          return !todo.done;
        }
        if (filter === "DONE") {
          return todo.done;
        }
        return todo;
      })
    );
  }, [todos, filter]);

  const handleAddTodo = (task) => {
    setTodos([...todos, { id: todos.length + 1, task, done: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const handleUpdateTodo = (id, todoUpdate) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? todoUpdate : todo;
      });
    });
  };

  return (
    <ChakraProvider>
      <Container bg="gray.50" my="20" p="10" shadow="2xl">
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold" mr="1">
            TODO
          </Text>
          <Text>[{todosFiltered.length}]</Text>
        </Flex>
        <AddTodo addTodo={handleAddTodo} />
        <Filter setFilter={setFilter} />
        <TodoList
          todos={todosFiltered}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
        />
      </Container>
    </ChakraProvider>
  );
}
