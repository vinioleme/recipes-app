import { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { login, setLogin } = useContext(AppContext);

  const handleErrors = useCallback(() => {
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(login.email);

    const correctLength = 6;
    const errors = [
      login.email.length === 0,
      login.password.length <= correctLength,
      !isValidEmail,
    ];
    const noErrors = errors.every((error) => error === false);
    console.log(login.email);
    setIsDisabled(!noErrors);
  }, [login]);

  useEffect(() => {
    handleErrors();
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
  }, [handleErrors, login.email]);

  const handleChange = (functionName, { value, name }) => {
    functionName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <label>
        Email:
        {' '}
        <input
          name="email"
          value={ login.email }
          type="email"
          data-testid="email-input"
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
      </label>
      <label>
        Password:
        {' '}
        <input
          name="password"
          value={ login.password }
          type="password"
          data-testid="password-input"
          onChange={ ({ target }) => handleChange(setLogin, target) }
        />
      </label>
      <button
        data-testid="login-submit-btn"
        disabled={ isDisabled }
      >
        Enter

      </button>
    </div>
  );
}

export default Login;
