import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import logoImage from '../images/logo.png';
import {FaSearch} from 'react-icons/fa';
import {AiFillStar} from 'react-icons/Ai'
import stays from "../stays.json";
import { AspectRatio, Button } from "@chakra-ui/react"
import { elementDragControls } from "framer-motion/types/gestures/drag/VisualElementDragControls";

const IndexPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const showSuper = false;
  var superHost, num_beds;

  const cities=stays.map((element, i) =>{
    superHost = null;
    num_beds = null;
    if (element.superHost)
      superHost = <Box border="1px solid black" borderRadius={15} p="5px" mr="10px">{element.superHost==true && "Super host"}</Box>
    if (element.beds != null)
      num_beds = <Text>: {`${element.beds} beds`}</Text>;


    return(
      <Box key={i} display="inline-block" bg="red" w="500px" m={5}>
        <Box w="100%" h="70%">
          <AspectRatio maxW="100%" ratio={3/2}>
            <Image objectFit="fill" src={element.photo} w="100%" h="100%" borderRadius="20px"></Image>
          </AspectRatio>
        </Box>
        <Box>
          <Flex justifyContent="space-between" mt={3}>
            <Flex>
              {superHost}
              <Text>{`${element.type}`}</Text>
              {num_beds}
            </Flex>
            <Flex>
              <AiFillStar/>
              <Text>{`${element.rating}`}</Text>
            </Flex>
          </Flex>
        </Box>
        <Text fontWeight="bold" pt={2}>{element.title}</Text>

      </Box>
    );
  });

  return(
    <>
    {showSearch && (
          <Box>
            <Button onClick={() => setShowSearch(true)}>Search!</Button>
          </Box>
    )}
    <Box id="header" bg="grey" p={50} h="10vh">
      <Center justifyContent="space-between" h="100%">
        <Box>
          <Image w="100%" h="100%" src={logoImage.src}></Image>
        </Box>
        <Flex 
          onclick={()=> setShowSearch(true)} 
          _hover={{cursor: "pointer"}} 
          // border="1px solid black" 
          shadow="md"
          p={3} 
          borderRadius={10}
        >
          <Box borderRight="1px solid black" p={2}>Helsinki, Finland</Box>
          <Box borderRight="1px solid black" p={2}>Add guests</Box>
          <Center p={2}>
            <FaSearch/>
          </Center>
        </Flex>
      </Center>
    </Box>

    <Center id="body" m="0 5%" bg="blue" flexWrap="wrap">
      {cities}
    </Center>
    </>
  );
};
export default IndexPage
