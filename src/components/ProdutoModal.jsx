import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProdutoModal({ show, handleClose, produto }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{produto.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="img-fluid mb-3"
        />
        <p><strong>Preço:</strong> {produto.preco}</p>
        <p>{produto.descricao}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary">
          Comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProdutoModal;
