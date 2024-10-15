import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slideshow from './Slidshow'; // Importando o componente de Slideshow

function Home() {
  const navigate = useNavigate();

  // Função para navegar para a página de produtos
  const handleNavigate = () => {
    navigate('/produtos');
  };

  return (
    <div className="container mt-5">
      {/* Exibindo o Slideshow */}
      <Slideshow />

      {/* Cards de Produtos */}
      <h1 className="text-center mb-4">Bem-vindo à Spider-Man Store!</h1>
      <p className="text-center">Explore os melhores produtos temáticos do Homem-Aranha!</p>

      <Row>
        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./public/assets/camiseta.jpg" />
            <Card.Body>
              <Card.Title>Camiseta Homem-Aranha</Card.Title>
              <Card.Text>
                Confira nossa coleção de camisetas temáticas do Homem-Aranha.
              </Card.Text>
              <Button variant="primary" onClick={handleNavigate}>
                Ver Produtos
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./public/assets/boneco.webp" />
            <Card.Body>
              <Card.Title>Bonecos do Homem-Aranha</Card.Title>
              <Card.Text>
                Descubra os bonecos colecionáveis do Homem-Aranha.
              </Card.Text>
              <Button variant="primary" onClick={handleNavigate}>
                Ver Produtos
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="./public/assets/lancateia.webp" />
            <Card.Body>
              <Card.Title>Lança Teia Homem-Aranha</Card.Title>
              <Card.Text>
                Leve sua brincadeira para o próximo nível com nossos lançadores de teia.
              </Card.Text>
              <Button variant="primary" onClick={handleNavigate}>
                Ver Produtos
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
