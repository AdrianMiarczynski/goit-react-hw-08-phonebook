import { Navigation } from 'components/Navigation';
import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
