import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const produtos = [
  { nome: 'Camiseta Homem-Aranha', preco: 'R$ 59,90', imagem: './public/assets/camiseta.jpg' },
  { nome: 'Boneco Homem-Aranha', preco: 'R$ 89,90', imagem: './public/assets/boneco.webp' },
  { nome: 'Lança teia Homem-Aranha', preco: 'R$ 119,90', imagem: './public/assets/lancateia.webp' },
];

function Produtos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Produtos</h2>
      <Row>
        {produtos.map((produto, index) => (
          <Col key={index} sm={12} md={4} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.preco}</Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Produtos;
