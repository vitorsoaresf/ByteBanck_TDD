import { screen, render } from '@testing-library/react';
import Extrato from '.';

describe('Deve renderizar uma lista de transações', () => {
  test('Deve renderizar uma lista de transações', () => {
    const transacoes = [{ transacao: 'Deposito', valor: 100 }];

    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem');

    expect(lista).toBeInTheDocument();
  });
});
