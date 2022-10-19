import Box from 'components/Box';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/userOperation';

const UserMenu = () => {
  const email = useSelector(selectUser).email;
  const isLogedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };

  if (!isLogedIn) {
    return;
  }

  return (
    <Box display="flex">
      <p>{email}</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </Box>
  );
};

export default UserMenu;