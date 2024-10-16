import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slideshow from './Slidshow'; // Importando o componente de Slideshow
import ProdutoModal from './ProdutoModal'; // Importando o modal

function Home() {
  const navigate = useNavigate();
  
  // Estados para controle do modal
  const [showModal, setShowModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Função para abrir o modal
  const handleShowModal = (produto) => {
    setProdutoSelecionado(produto);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => setShowModal(false);

  const produtos = [
    {
      nome: 'Camisa Homem-Aranha',
      preco: 'R$ 59,90',
      imagem: './public/assets/camiseta.jpg',
      descricao: 'Confira nossa coleção de camisetas temáticas do Homem-Aranha.'
    },
    {
      nome: 'Bonecos do Homem-Aranha',
      preco: 'R$ 89,90',
      imagem: './public/assets/boneco.webp',
      descricao: 'Descubra os bonecos colecionáveis do Homem-Aranha.'
    },
    {
      nome: 'Mochila Homem-Aranha',
      preco: 'R$ 119,90',
      imagem: './public/assets/mochila.webp',
      descricao: 'Leve seu estilo para o próximo nível com nossas mochilas.'
    }
  ];

  return (
    <div className="container mt-5">
      {/* Exibindo o Slideshow */}
      <Slideshow />

      {/* Cards de Produtos */}
      <h1 className="text-center mb-4">Bem-vindo à Spider-Man Store!</h1>
      <p className="text-center">Explore os melhores produtos temáticos do Homem-Aranha!</p>

      <Row>
        {produtos.map((produto, index) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={index}>
            <Card>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(produto)}>
                  Ver Detalhes
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal para exibir os detalhes do produto */}
      {produtoSelecionado && (
        <ProdutoModal
          show={showModal}
          handleClose={handleCloseModal}
          produto={produtoSelecionado}
        />
      )}
    </div>
  );
}

export default Home;
[[]]