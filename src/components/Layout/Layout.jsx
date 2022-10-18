import { Outlet, NavLink } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Contacts
        </NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
