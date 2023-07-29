import { useAuth } from 'hooks';
import css from './UserName.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/Auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome: {user?.name} </p>
      <p>{user?.email}</p>
      <button onClick={handleLogout} tyle="button">
        Logout
      </button>
    </div>
  );
};
