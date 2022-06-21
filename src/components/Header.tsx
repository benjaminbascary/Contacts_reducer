import { Box, Heading, useColorMode } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

type HeaderProps = {
    handleActive: () => void;
}

const Header = () => {

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Box  
      display="flex" 
      flexDirection="row" 
      justifyContent="space-between" 
      alignItems="center"
      >
      <Heading
          size="4xl" 
          margin="1vh">
          Contacts!!
      </Heading>
      <IconButton
          aria-label='Switch mode'
          onClick={() => toggleColorMode()}
          margin="1vh 8vh 1vh 1vh" 
          size="lg"
          icon={colorMode === "dark" ? <SunIcon color="orange.200" /> : <MoonIcon color="blue.700" />}
      />
    </Box>
  )
}

export default Header;