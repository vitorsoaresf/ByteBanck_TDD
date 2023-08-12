import { calculaNovoSaldo } from './index';

describe(`Quando eu realizo uma transacao`, () => {
  test(`quando a transacao eh um deposito, o saldo deve aumentar`, () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 500,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 1000);

    expect(novoSaldo).toBe(1500);
  });

  test(`quando a transacao eh uma transferencia, o saldo deve diminuir`, () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 500,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 1000);

    expect(novoSaldo).toBe(500);
  });
});

test('Deve retornar o valor do saldo atualizado com rendimento', () => {
  const calcularendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;
  const novoSaldo = calcularendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  expect(calcularendimento).toBeCalled();

  //verifica se uma determinada funcao foi chamado com um certo parametro
  expect(calcularendimento).toHaveBeenCalledWith(saldo);
});
