import { useContext } from "react";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {

  const { transactions } = useTransactions();

  // acc = accumulator;
  // acc recebe o valor que é inicializado no terceiro parâmetro da função reduce;
  // que é retornado ao final de cado ciclo; 
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

  }, {
    deposit: 0,
    withdraws: 0,
    total: 0
  })
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>

        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ outcomeImg } alt="Saídas" />
        </header>

        <strong>{ 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Total" />
        </header>

        <strong>{ 
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}