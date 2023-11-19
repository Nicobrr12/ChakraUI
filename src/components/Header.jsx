import { Stack, Box, Button, ButtonGroup } from "@chakra-ui/react";

function Header() {
  return (
 
          
      <Stack direction="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={20}
          width="100%"
          py={16}
          bgImage="url('https://liv-cycling.com.co/pub/media/catalog/category/EMTB_Banner_1.jpeg')"
          bgPosition="left"
          bgRepeat="no-repeat"
          mb={2}
          position="relative"
          >
          <Box fontSize="2xl" mb={4} position="absolute" top="5" color="white" fontWeight="light" >
            DOMINA EL TERRENO
          </Box>
          <ButtonGroup gap="2">
            <Button colorScheme="blackAlpha">Ver detalles</Button>
            <Button colorScheme="whiteAlpha">Ver video</Button>
           
          </ButtonGroup>
        </Box>
      </Stack>
    
  );
}

export default Header;




