import Contacts from 'pages/Contacts/Contacts';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};
