import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded ?
        <>
          <div>aaa</div>
        </> : null}
    </>
  )
};

export default Index;
