import { NavLink } from "react-router-dom";
import Box from "components/Box";
import { selectIsLoggedIn } from "redux/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="nav" display="flex">
      {isLogedIn && <NavLink to="/contacts">Contacts</NavLink>}

      {!isLogedIn && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </Box>
  );
};

export default Navigation;
