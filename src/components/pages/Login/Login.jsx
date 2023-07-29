import { LoginForm } from 'components/LoginForm';
import { Helmet } from 'react-helmet';

export const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </div>
);
export default Login;
