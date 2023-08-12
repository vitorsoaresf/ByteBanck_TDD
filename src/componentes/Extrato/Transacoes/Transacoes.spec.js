import { screen, render } from '@testing-library/react';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

describe('', () => {
  test('Deve renderizar o mesmo componente com props atualizadas', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 100,
    };

    //rerender eh uma funcao que serve para rerenderizar o componente para testar mudancas nas props que ele recebe
    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transacao} />,
    );

    // Nessa funcao de teste eh necessario utilizar o data-testid nos elementos para poder captura-los
    const tipoTransacao = screen.getByTestId(`tipoTransacao`);
    const valorTransacao = screen.getByTestId(`valorTransacao`);

    expect(tipoTransacao).toHaveTextContent(`Depósito`);
    expect(valorTransacao).toHaveTextContent(`R$ 100`);

    const novaTransacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    const novoTipoTransacao = screen.getByTestId(`tipoTransacao`);
    const novoValorTransacao = screen.getByTestId(`valorTransacao`);

    rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);
    expect(novoTipoTransacao).toHaveTextContent(`Transferência`);
    expect(novoValorTransacao).toHaveTextContent(`- R$ 50`);
  });
});
