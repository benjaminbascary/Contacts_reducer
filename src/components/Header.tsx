import { Box, Heading } from '@chakra-ui/react'
import { Switch, Button } from '@chakra-ui/react'

type HeaderProps = {
    handleActive: () => void;
}

const Header = ({ handleActive }: HeaderProps) => {
  return (
    <Box 
        border="1px solid white" 
        display="flex" 
        flexDirection="row" 
        justifyContent="space-between" 
        alignItems="center"
        >
        <Heading 
            margin="1vh">
            Contacts
        </Heading>
        <Switch 
            margin="1vh 8vh 1vh 1vh" 
            size="lg"
            />
    </Box>
  )
}

export default Header;