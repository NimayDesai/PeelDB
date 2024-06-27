import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
const Contact: React.FC<{}> = ({}) => {
  return (
    <Flex>
      <Box m="auto" maxW="500px">
        <Box mt={8}>
          <Heading size={"2xl"} mt={8}>
            About Us
          </Heading>
          <Text mt={8}>
            PeelDB was founded by Nimay Desai to help schools have an
            easy-to-use tool to find new partners they can work with and improve
            the quality of their school. The website has stayed free for all
            users to make sure every school can use it
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
