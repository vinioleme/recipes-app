import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
// import { mockUserData } from './mocks/userMock';
import { renderWithRouter } from './helpers/renderwith';
import AppProvider from '../context/AppProvider';

const emailString = 'email-input';
const passwordString = 'password-input';
const btnLoginString = 'login-submit-btn';
const emailTests = 'asd@email.com';
describe('Testes da página de login', () => {
  // beforeEach(() => {
  //   render(<App />);
  // });

  it('testa se os inputs e botao estao presentes', () => {
    const initialEntries = '/';
    const initialState = {
      user: {
        email: emailTests,
      },
    };
    renderWithRouter(
      <AppProvider><App /></AppProvider>,
      initialState,
      initialEntries,
    );
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });
  it('testa se é possivel escrever nos inputs', () => {
    const initialEntries = '/';
    const initialState = {
      user: {
        email: emailTests,
      },
    };
    renderWithRouter(
      <AppProvider><App /></AppProvider>,
      initialState,
      initialEntries,
    );
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    expect(btnLogin).toBeDisabled();

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, 'asdasda');

    expect(btnLogin).not.toBeDisabled();
  });
  it('testa se leva a pagina de receitas de comida apos o login', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/';
    const initialState = {
      user: {
        email: emailTests,
      },
    };

    const { history } = renderWithRouter(
      <AppProvider><App /></AppProvider>,
      initialState,
      initialEntries,
    );
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, 'asdasda');
    userEvent.click(btnLogin);
    expect(history).toBe('/meals');
  });
});
