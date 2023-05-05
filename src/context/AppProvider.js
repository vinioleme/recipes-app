import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (functionName, { value, name }) => {
    functionName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const values = useMemo(() => ({
    login,
    setLogin,
    handleChange,
  }), [login]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppProvider;
