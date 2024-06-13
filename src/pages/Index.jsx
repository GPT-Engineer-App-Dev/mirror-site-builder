import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} textAlign="center">
        <Box fontSize="3xl" fontWeight="bold" color="blue.500">stripe</Box>
        <Text fontSize="2xl" fontWeight="bold">Congratulations Lovable Labs Incorporated!</Text>
        <Text fontSize="lg">You've just received your first payment through Stripe.</Text>
        <Text fontSize="md">Your first payout for this payment of <Box as="span" fontWeight="bold">$10.00</Box> (minus any fees) should land in your bank account on <Box as="span" fontWeight="bold">12/28/23</Box>.</Text>
      </VStack>
    </Container>
  );
};

export default Index;