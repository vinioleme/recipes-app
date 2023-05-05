import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../App';
// import { mockUserData } from './mocks/userMock';
import { renderWithRouter } from './helpers/renderwith';
import AppProvider from '../context/AppProvider';

const profilePictureId = 'profile-top-btn';
const searchBtnId = 'search-top-btn';
const pageTitleId = 'page-title';
const emailTests = 'asd@email.com';
describe('Testes component Header', () => {
  // beforeEach(() => {
  //   render(<App />);
  // });

  it('testa se os botao, titulo da pagina e perfil nao estao presentes na rota de login', () => {
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
    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota de receitas de comida', () => {
    const initialEntries = '/meals';
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
    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota de receitas de drinks', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/drinks';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota de receita de uma comida', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/meals/:id-da-receita';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se o botao perfil, titulo da pagina e perfil nao estao presentes na rota de receita de uma bebida', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/drinks/:id-da-receita';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se o botao perfil, titulo da pagina e perfil nao estao presentes na rota de receita de uma comida em progresso ', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/meals/:id-da-receita/in-progress';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se os botaos de perfil, titulo da pagina e perfil nao estao presentes na rota de receita de uma bebida em progesso', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/drinks/:id-da-receita/in-progress';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota profile', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/profile';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota de receita prontas', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/done-recipes';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('testa se os botao de perfil, titulo da pagina e perfil nao estao presentes na rota de receitas favoritas', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/favorite-recipes';
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

    const profilePicture = screen.getByTestId(profilePictureId);
    const searchBtn = screen.getByTestId(searchBtnId);
    const pageTitle = screen.getByTestId(pageTitleId);

    expect(profilePicture).toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('testa se clicando no botao de perfil leva a pagina de perfil', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/meals';
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

    const profilePicture = screen.getByTestId(profilePictureId);

    userEvent.click(profilePicture);

    expect(history).toBe('/profile');
  });
  it('testa se clicando no botao de pesquisa, o input de pesquisa aparece, e clicando novamente o input some', () => {
    // Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockUserData));
    const initialEntries = '/meals';
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

    const searchBtn = screen.getByTestId(searchBtnId);

    userEvent.click(searchBtn);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();

    userEvent.click(searchBtn);

    expect(searchInput).not.toBeInTheDocument();
  });
});
