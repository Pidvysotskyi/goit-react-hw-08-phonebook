import Box from "components/Box";
import { selectIsLoggedIn } from "redux/selectors";
import { useSelector } from "react-redux";
import { StyledLink } from "./Navigation.styled";

const Navigation = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="nav" display="flex" alignItems="center">
      {isLogedIn && <StyledLink to="/contacts">Contacts</StyledLink>}

      {!isLogedIn && (
        <>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log In</StyledLink>
        </>
      )}
    </Box>
  );
};

export default Navigation;
