import { useContext } from "react";
import { useCartPopup2 } from "../../providers/useCartPopup2";
import { ShopProvider2Context } from "../../providers/ShopProvider2";
import "./Header.css";
import {
  Box,
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  const { totalItems } = useContext(ShopProvider2Context);
  const { togglePopup } = useCartPopup2();

  return (
    <Flex
      as="header"
      className="header-container"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      <Box>
        <Text
          as="h1"
          fontSize="40px"
          fontWeight="bold"
          color="black"
          className="head"
        >
          Frimark
        </Text>
      </Box>
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="black"
          />
          <MenuList>
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/About">
              About
            </MenuItem>
          </MenuList>
        </Menu>
        <Button colorScheme="salmon" ml={4} onClick={togglePopup}>
          {totalItems} Cart
        </Button>
      </Box>
    </Flex>
  );
}
