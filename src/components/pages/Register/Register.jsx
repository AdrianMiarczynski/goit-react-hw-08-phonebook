import { RegisterForm } from 'components/RegisterForm';
import { Helmet } from 'react-helmet';

export const Register = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <RegisterForm />
  </div>
);
export default Register;
