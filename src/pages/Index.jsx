// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Heading, Box, Flex, Button } from "@chakra-ui/react";
import { FaPenFancy } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">A place to share my thoughts and experiences.</Text>
        <Box>
          <Button leftIcon={<FaPenFancy />} colorScheme="teal" variant="solid" size="lg">
            Read My Posts
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
