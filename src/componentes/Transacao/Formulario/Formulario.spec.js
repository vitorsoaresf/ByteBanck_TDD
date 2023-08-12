import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input', () => {
  test('verifica se está presente no documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    expect(campoTexto).toBeInTheDocument();
  });

  test('verifica se está com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('verifica que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    //simula o preenchimento do input com o valor 50
    userEvent.type(campoTexto, '50');

    expect(campoTexto).toHaveValue(50);
  });

  test(`Deve chamar o evento de onSubmit ao clicar em realizar transacao`, () => {
    // realizamos na linha abaixo o mock da funcao realizartransacao que no seu componente de origem possui um
    //comportamento especifico, mas que aqui nao podera realizar

    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);

    const btSubmit = screen.getByRole(`button`);

    userEvent.click(btSubmit);

    // No minimo foi chamada uma vez a fn abaixo
    expect(realizarTransacao).toHaveBeenCalledTimes(1);

    // funcao abaixo especifica se a fn realizarTransacao foi chamada com algum parametro especifico
    // expect(realizarTransacao).toHaveBeenCalledWith(`nome do parametro`);
  });

  // testes para <select>
  test('Deve selecionar a opcao de transacao ou deposito', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);

    userEvent.selectOptions(screen.getByTestId('select-opcoes'), ['Depósito']);

    expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(
      true,
    );

    expect(screen.getByRole('option', { name: 'Transferência' }).selected).toBe(
      false,
    );
  });
});

/*
Metodos principais para o userEvent

- click(): Dispara um evento de clique em um elemento;
- dblClick: Dispara um evento de double click em um elemento;
- type(): Escreve um texto dentro de um elemento de <input /> ou <textarea/>;
- keyboard(): Simula eventos de teclado;
- selectOptions(): Seleciona as opções especificadas de um <select /> ou <select multiple/>.


Exemplo de teste com checkbox

teste unitario
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './index';

test('Deve renderizar um checkbox que pode ser clicado', () => {
  render(<Checkbox />);
  const input = screen.getByLabelText('Check');
  userEvent.click(input);
  expect(input).toBeChecked();
});

 */
