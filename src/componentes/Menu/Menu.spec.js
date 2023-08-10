import { screen, render } from '@testing-library/react';
import Menu from '.';

//unit test
test('deve renderizar um link para a página inicial', () => {
  render(<Menu />);

  const linkHomePage = screen.getByText('Inicial');
  expect(linkHomePage).toBeInTheDocument();
});

//unit test
test('deve renderizar uma lista de links', () => {
  render(<Menu />);

  //busca elementos pela regra, nesse caso abaixo retorna um array
  //com todos elementos com a tag <a> que possuem a classe = link
  const listLinks = screen.getAllByRole('link');

  //Temos 4 links no navegador
  expect(listLinks).toHaveLength(4);
});

//unit test
test('não deve renderizar o link para Extrato', () => {
  render(<Menu />);

  //procura pelo elemento na tela
  //retorna um undefined se não achar
  const linkExtract = screen.queryByText('Extrato');

  expect(linkExtract).not.toBeInTheDocument();
});

//métodos do tipo findBy() e findAllBy() são métodos que esperam algum elemento
//ser em algum momento renderizado na tela, como uma Promisse, é
// uma expectativa

//teste de snapshot
test('deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />);

  const links = screen.getAllByRole('link');

  //verificando se os links estão com as classes corretas
  links.forEach((link) => expect(link).toHaveClass('links'));
  expect(links).toMatchSnapshot();
});
