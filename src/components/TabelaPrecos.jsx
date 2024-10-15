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
            <td>Camisa Homem-Aranha</td>
            <td>R$ 59,90</td>
          </tr>
          <tr>
            <td>Boneco Homem-Aranha</td>
            <td>R$ 89,90</td>
          </tr>
          <tr>
            <td>Mochila Homem-Aranha</td>
            <td>R$ 119,90</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TabelaPrecos;
