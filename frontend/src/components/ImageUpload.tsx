import { Button, Container, Input, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import { useUploadImageMutation } from "../gql/generated/graphql";
import { useEdgeStore } from "../lib/edgestore";
import { Wrapper } from "./Wrapper";

export const ImageUpload: React.FC<{}> = ({}) => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();
  const [uploadImage] = useUploadImageMutation();
  return (
    <Wrapper variant="small">
      <Container textAlign={"center"} alignItems={"center"}>
        <Input
          type="file"
          pt={4}
          pb={20}
          textAlign={"center"}
          onChange={(e) => {
            setFile(e.target.files![0]);
          }}
        />
        <Progress value={progress} />
        <Button
          m="auto"
          alignSelf={"center"}
          colorScheme="green"
          mt={4}
          onClick={async () => {
            if (file) {
              const res = await edgestore.profilePics.upload({
                file,
                onProgressChange: (progress) => {
                  setProgress(progress);
                },
              });
              await uploadImage({
                variables: { imageUrl: res.url },
              });
            }
          }}
        >
          Upload
        </Button>
      </Container>
    </Wrapper>
  );
};
