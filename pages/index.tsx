import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import logoImage from '../images/logo.png';
import {FaSearch} from 'react-icons/fa';
import stays from "../stays.json";
import { AspectRatio, Button } from "@chakra-ui/react"

const IndexPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const cities=stays.map((element, i) =>{
    return(
      <Box key={i} display="inline-block" m={2} bg="red" w="30%">
        <Box w="100%" h="70%">
          <AspectRatio maxW="75%" ratio={3/2}>
            <Image objectFit="fill" src={element.photo} w="100%" h="100%" borderRadius="20px"></Image>
          </AspectRatio>
        </Box>
        <Box>
          <Flex>
            <Box>{element.superHost==true && "Super host"}</Box>
            <Text>{`${element.type} ${element.beds} beds`}</Text>
            <Box></Box>
            <Box></Box>
          </Flex>
        </Box>
        {/* <Heading>{element.city}</Heading> */}
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
        <Box w="200px" h="50px">
          <Image w="100%" h="100%" src={logoImage.src}></Image>
        </Box>
        <Flex 
          onclick={()=> setShowSearch(true)} 
          _hover={{cursor: "pointer"}} 
          border="1px solid black" 
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

    <Box id="body" m="0 5%" bg="blue">
      {cities}
    </Box>
    </>
  );
};
export default IndexPage
