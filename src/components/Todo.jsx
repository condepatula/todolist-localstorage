import { useState } from "react";
import {
  Box,
  Flex,
  Checkbox,
  Text,
  Button,
  Input,
  Divider,
  useToast
} from "@chakra-ui/react";
import { FaRegTrashAlt, FaRegEdit, FaCheck, FaTimes } from "react-icons/fa";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [todoEdit, setTodoEdit] = useState(todo.task);
  const [editing, setEditing] = useState(false);
  const toast = useToast();

  if (editing) {
    return (
      <Box>
        <Flex>
          <Input
            autoFocus
            variant="flushed"
            type="text"
            fontSize="sm"
            value={todoEdit}
            onChange={(e) => setTodoEdit(e.target.value)}
          />
          <Button
            variant="ghost"
            onClick={() => {
              updateTodo(todo.id, { ...todo, task: todoEdit });
              setEditing(false);
              toast({
                title: "Task updated.",
                description: "We've updated your task for you.",
                status: "success",
                duration: 1000,
                isClosable: true
              });
            }}
            _hover={{ color: "green.600" }}
          >
            <FaCheck />
          </Button>
          <Button
            variant="ghost"
            onClick={() => setEditing((prev) => !prev)}
            _hover={{ color: "red.600" }}
          >
            <FaTimes />
          </Button>
        </Flex>
      </Box>
    );
  }

  return (
    <Box my="5">
      <Flex alignItems="center">
        <Checkbox
          colorScheme="green"
          mr="2"
          isChecked={todo.done}
          onChange={() => updateTodo(todo.id, { ...todo, done: !todo.done })}
        />
        <Text w="100%" fontSize="sm">
          {todo.task}
        </Text>
        <Button
          variant="ghost"
          onClick={() => {
            deleteTodo(todo.id);
            toast({
              title: "Task deleted.",
              description: "We've deleted your task for you.",
              status: "info",
              duration: 1000,
              isClosable: true
            });
          }}
          _hover={{ color: "red.600" }}
        >
          <FaRegTrashAlt />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setEditing((prev) => !prev)}
          _hover={{ color: "gray.600" }}
        >
          <FaRegEdit />
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Todo;
