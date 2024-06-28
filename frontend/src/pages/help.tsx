import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useAskGptQuery } from "../gql/generated/graphql";

const Help: React.FC<{}> = ({}) => {
  const { data, refetch } = useAskGptQuery({
    variables: {
      prompt: "",
    },
  });

  return (
    <Wrapper variant="regular">
      <Heading mb={8} ml={2} size={"xl"} textAlign={"center"}>
        Assitance by PeelBot
      </Heading>
      <Box textAlign={"center"} m="auto">
        <Heading mb={12} size="md">
          If you need any help, please feel free to ask our wonderful AI Chatbot
          that can assist with any of your problems realted to PeelDB
        </Heading>
        <Formik
          onSubmit={async (values) => {
            // When User searches refetch data with new values
            await refetch({
              prompt: values.prompt,
            });
          }}
          initialValues={{ prompt: "" }}
        >
          <Form>
            <InputGroup>
              <InputField name="prompt" placeholder="Ask PeelBot" textarea />
            </InputGroup>
            <Button
              type="submit"
              m={"auto"}
              colorScheme={"green"}
              mt={8}
              size={"lg"}
              p={6}
            >
              Ask PeelBot
            </Button>
          </Form>
        </Formik>
        <Card mt={8}>
          <CardBody>
            <Text>{data?.askGpt}</Text>
          </CardBody>
        </Card>
      </Box>
    </Wrapper>
  );
};

export default Help;
