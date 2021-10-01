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
  const [showSearch, setShowSearch] = useState("none");
  const showSuper = false;
  const toolBarProps = {
    h: "100%",
    w: "100%",
    borderRadius: "15px"
    
  }
  var superHost, num_beds;

  const cities=stays.map((element, i) =>{
    superHost = null;
    num_beds = null;
    if (element.superHost)
      superHost = <Box border="1px solid black" borderRadius={12} p="2px 5px" mr="10px">{element.superHost==true && "Super host"}</Box>
    if (element.beds != null)
      num_beds = <Text>: {`${element.beds} beds`}</Text>;


    return(
      <Box key={i} display="inline-block" w="500px" m={5}>
        <Box w="100%" h="70%">
          <AspectRatio maxW="100%" ratio={3/2}>
            <Image objectFit="fill" src={element.photo} w="100%" h="100%" borderRadius="20px"></Image>
          </AspectRatio>
        </Box>
        <Box>
          <Flex justifyContent="space-between" mt={3}>
            <Flex h="30px">
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
    <Box 
      w="100%" 
      h="100%" 
      // display={showSearch}
      display="flex" 
      position="fixed"
      top="0"
      left="0"
      zIndex="2"
      bg="black"
      opacity="40%"
      onClick={() => setShowSearch("none")}
    >
    </Box>
    <Box 
      h="45%" 
      // display={showSearch} 
      p="0 10%"
      pt="3%"
      display="flex"
      position="fixed"
      w="100%"
      top="0"
      left="0"
      zIndex="2"
      opacity="100%"
      bg="white"
    >
      <Center justifyContent="space-between" border="1px solid black" w="100%" h="15%">
        <Button {...toolBarProps}>Location</Button>
        <Button {...toolBarProps}>Guests</Button>
        <Button {...toolBarProps}>Search</Button>
      </Center>
    </Box>
    
    {/* {showSearch && (
          <Center position="fixed" >
            <Button onClick={() => setShowSearch(true)}>Search!</Button>
          </Center>
    )} */}
    <Box id="header" p={50} h="10vh">
      <Center justifyContent="space-between" h="100%">
        <Box>
          <Image w="100%" h="100%" src={logoImage.src}></Image>
        </Box>
        <Flex 
          onClick={()=> setShowSearch("flex")} 
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

    <Center justifyContent="space-between" ml="9%" mr="9%" mt="3%">
      <Heading>Stays in Finland</Heading>
      <Text>Stays</Text>
    </Center>
    
    <Center id="body" m="0 5%" flexWrap="wrap">
      {cities}
    </Center>
    </>
  );
};
export default IndexPage
