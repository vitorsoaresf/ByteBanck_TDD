import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Componente <Saldo/>', () => {
  test('Deve renderizar o saldo com o valor monetario', () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId(`saldo`);

    // verifica se o elemento tem o determinado texto descrito no expect
    expect(saldo).toHaveTextContent('R$ 1000');
  });
});

/**
usando  mockImplementation para mockar o comportamento da funcao

test('Deve retornar o quadrado de um número', () => {
  const calculaOQuadrado = jest.fn();
  calculaOQuadrado.mockImplementation((num) => num ** 2);
  expect(calculaOQuadrado(2)).toBe(4);
  expect(calculaOQuadrado(4)).toBe(16);
});
 */
