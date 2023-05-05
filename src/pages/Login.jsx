import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Login() {
  const { setLogin, handleChange } = useContext(AppContext);
  return (
    <div>
      <label>
        Email:
        {' '}
        <input type="email" data-testid="email-input" />
      </label>
      <label>
        Password:
        {' '}
        <input type="" data-testid="password-input" />
      </label>
      <button
        data-testid="login-submit-btn"
        onChange={ ({ target }) => handleChange(setLogin, target) }
      >
        Enter

      </button>
    </div>
  );
}

export default Login;
