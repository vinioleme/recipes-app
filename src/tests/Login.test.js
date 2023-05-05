import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { mockUserData } from './mocks/userMock';

const emailString = 'email-input';
const passwordString = 'password-input';
const btnLoginString = 'login-submit-btn';
describe('Testes da página de login', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('testa se os inputs e botao estao presentes', () => {
    render(<App />);
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });
  it('testa se é possivel escrever nos inputs', () => {
    render(<App />);
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    expect(btnLogin).toBeDisabled();

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, 'asdasda');

    expect(btnLogin).not.toBeDisabled();
  });
  it('testa se leva a pagina de ', () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/';
    const initialState = {
      user: {
        email: 'asd@email.com',
      },
    };

    const { history } = render(<App />, initialState, initialEntries);
    const inputEmail = screen.getByTestId(emailString);
    const inputPassword = screen.getByTestId(passwordString);
    const btnLogin = screen.getByTestId(btnLoginString);

    userEvent.type(inputEmail, 'email@email.com');
    userEvent.type(inputPassword, 'asdasda');
    userEvent.click(btnLogin);
    expect(history).toBe('/meals');
  });
});
