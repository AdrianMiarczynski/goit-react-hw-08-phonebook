import { useDispatch } from 'react-redux';
// import Contacts from './Contactslist/Contactslist';
// import { fetchContacts } from './redux/operations';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy, useEffect } from 'react';
import { useAuth } from 'hooks';
import { refreshUser } from './redux/Auth/operations';

const HomePage = lazy(() => import('./pages/home/home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LogingPage = lazy(() => import('./pages/Login/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogingPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // <div>
    //   <h1>Phonebook</h1>
    //   <ContactsForm />
    //   <div>
    //     <h2>Contacts</h2>
    //     <FilterContacts />
    //     <Contacts />
    //   </div>
    // </div>
  );
};
export default App;
