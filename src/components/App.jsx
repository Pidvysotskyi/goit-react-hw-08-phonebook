import Contacts from "pages/Contacts/Contacts";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { selectRefreshing } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { refreshUser } from "redux/userOperation";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Register = lazy(() => import('../pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<Login />} />}
        />
      </Route>
    </Routes>
  );
};
