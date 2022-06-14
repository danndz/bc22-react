// Để sử dụng thư viện react-bootstrap
// npm i react-bootstrap bootstrap
// import css của bootstrap vào file index.js

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import { FaGithub, FaReact } from "react-icons/fa";

const ReactBootstrap = () => {
  // state quản lý trạng thái ẩn/hiện của modal
  const [show, setShow] = useState(false);

  const onClose = () => setShow(false);
  const onShow = () => setShow(true);

  return (
    <div>
      <h1>Buttons</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="outline-secondary">Outline Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline-warning">Outline Warning</Button>
      <Button variant="danger">Danger</Button>

      <h1>Cards</h1>
      <Card bg="success" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <h1>Modal</h1>
      <Button variant="primary" onClick={onShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <FaGithub size={300} />
      <FaReact size={500} />
    </div>
  );
};

export default ReactBootstrap;
