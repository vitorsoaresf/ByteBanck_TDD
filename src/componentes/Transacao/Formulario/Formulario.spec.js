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
});
