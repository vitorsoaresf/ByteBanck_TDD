import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

test('deve renderizar o nome do usuario logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');

  //verifica se o nomeUsuario está no documento corrente
  expect(nomeUsuario).toBeInTheDocument();
});
