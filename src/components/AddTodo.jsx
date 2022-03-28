import { useState } from "react";
import { Input, Button, Flex, Box, useToast } from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const toast = useToast();

  return (
    <Box my="5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (task === "") {
            toast({
              title: "Error creating task.",
              description: "Task must not be empty.",
              status: "error",
              duration: 2000,
              isClosable: true
            });
          } else {
            addTodo(task);
            setTask("");
            toast({
              title: "Task created.",
              description: "We've created your task for you.",
              status: "success",
              duration: 1000,
              isClosable: true
            });
          }
        }}
      >
        <Flex alignItems="center">
          <Input
            size="md"
            mr="4"
            variant="flushed"
            placeholder="Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <Button type="submit" size="sm">
            <BsPlus />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddTodo;
