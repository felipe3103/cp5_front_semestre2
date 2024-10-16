import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';

const produtos = [
  { nome: 'Camiseta Homem-Aranha', preco: 'R$ 70,00', imagem: './public/assets/camiseta.jpg', descricao: 'Camiseta de alta qualidade do Homem-Aranha.' },
  { nome: 'Boneco Homem-Aranha', preco: 'R$ 89,90', imagem: './public/assets/boneco.webp', descricao: 'Boneco colecionável do Homem-Aranha.' },
  { nome: 'Lança teia Homem-Aranha', preco: 'R$ 119,90', imagem: './public/assets/lancateia.webp', descricao: 'Brinquedo lança-teia do Homem-Aranha.' },
  { nome: 'Mochila Homem-Aranha', preco: 'R$ 149,99', imagem: './public/assets/mochila.webp', descricao: 'Mochila escolar temática do Homem-Aranha.' },
  { nome: 'Garrafa Homem-Aranha', preco: 'R$ 29,90', imagem: './public/assets/garrafa.png', descricao: 'Garrafa temática do Homem-Aranha.' },
  { nome: 'Cabeça Homem-Aranha', preco: 'R$ 175,00', imagem: './public/assets/cabeça.png', descricao: 'Cabeça temática do Homem-Aranha.' },
  { nome: 'Caneca Homem-Aranha', preco: 'R$ 50,00', imagem: './public/assets/caneca.png', descricao: 'Caneca temática do Homem-Aranha.' },
  { nome: 'Relogio Homem-Aranha', preco: 'R$ 50,00', imagem: './public/assets/relogio.webp', descricao: 'Relogio temática do Homem-Aranha.' },
  { nome: 'Fantasia Homem-Aranha', preco: 'R$ 200,00', imagem: './public/assets/fantasia.jpg', descricao: 'Fantasia temática do Homem-Aranha.' },
  
];

function Produtos() {
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função para abrir o modal
  const handleShowModal = (produto) => {
    setProdutoSelecionado(produto);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => setShowModal(false);

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
                <Button variant="primary" onClick={() => handleShowModal(produto)}>
                  Ver Detalhes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      {produtoSelecionado && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{produtoSelecionado.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={produtoSelecionado.imagem}
              alt={produtoSelecionado.nome}
              className="img-fluid mb-3"
            />
            <p><strong>Preço:</strong> {produtoSelecionado.preco}</p>
            <p>{produtoSelecionado.descricao}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="primary">
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Produtos;
