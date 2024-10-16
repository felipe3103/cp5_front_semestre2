import React from 'react';
import { Table } from 'react-bootstrap';

function TabelaPrecos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Tabela de Preços</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Camiseta Homem-Aranha</td>
            <td>R$ 59,90</td>
          </tr>
          <tr>
            <td>Boneco Homem-Aranha</td>
            <td>R$ 89,90</td>
          </tr>
          <tr>
            <td>Lança Teia Homem-Aranha</td>
            <td>R$ 119,90</td>
          </tr>
          <tr>
          <td>Mochila Homem-Aranha</td>
          <td>R$ 149,99</td>
          </tr>
          <tr>
            <td>Garrafa Homem-Aranha</td>
            <td>R$ 29,90</td>
          </tr>
          <tr>
            <td>Cabeça Homem-Aranha</td>
            <td>R$ 175,0</td>
          </tr>
          <tr>
            <td>Caneca Homem-Aranha</td>
            <td>R$ 50,00</td>
          </tr>
          <tr>
            <td>Relogio Homem-Aranha</td>
            <td>R$  50,00</td>
          </tr>
          <tr>
            <td>Fantasia Homem-Aranha</td>
            <td>R$ 200,00</td>
          </tr>
        
        </tbody>
      </Table>
    </div>
  );
}

export default TabelaPrecos;
