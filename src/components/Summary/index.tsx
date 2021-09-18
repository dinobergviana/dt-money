import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>

        <strong>$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ outcomeImg } alt="Saídas" />
        </header>

        <strong> -$ 200,00</strong>
      </div>
      <div className="high-light-background">
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Total" />
        </header>

        <strong>$ 800,00</strong>
      </div>
    </Container>
  )
}