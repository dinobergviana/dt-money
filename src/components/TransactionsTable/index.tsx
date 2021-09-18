import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from '../../services/api'

export function TransactionsTable() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/transactions')
      .then(data => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Site</td>
            <td className="deposit">$ 500,00</td>
            <td>Freela</td>
            <td>10/09/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-$ 800,00</td>
            <td>Freela</td>
            <td>17/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}