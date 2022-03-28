import { useState } from "react";
import { Box, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Filter = ({ setFilter }) => {
  const [value, setValue] = useState("ALL");
  return (
    <Box my="5">
      <Text fontWeight="bold">FILTER:</Text>
      <RadioGroup
        onChange={(e) => {
          setValue(e);
          setFilter(e);
        }}
        value={value}
        my="2"
      >
        <Stack direction="row" color="gray.600" spacing={10}>
          <Radio value="ALL">ALL</Radio>
          <Radio value="PENDING">PENDING</Radio>
          <Radio value="DONE">DONE</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default Filter;
