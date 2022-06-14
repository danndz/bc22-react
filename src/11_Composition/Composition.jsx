import React from "react";
import Button from "./Button";
import Card from "./Card";

const Composition = () => {
  return (
    <div>
      <h1 className="text-center">Button</h1>

      <Button
        variant="primary"
        // prop có thể là 1 jsx
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width={20}
            height={20}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        }
      >
        {/* children */}
        Primary
      </Button>
      <Button variant="secondary" className="w-100" disabled={true}>
        Secondary
      </Button>

      <br />
      <br />

      {/* Cách 1 */}
      {/* <Card image="https://picsum.photos/200/300" className="w-25">
        <h1>Awesome Picture</h1>
        <Button variant="primary">Details</Button>
      </Card>
      <Card
        className="w-25"
        header={<p className="text-primary">Phone</p>}
        footer={<Button variant="success">Details</Button>}
      >
        <h1>Iphone 13 Promax</h1>
        <p>Price: 3000000</p>
      </Card> */}

      {/* Cách 2 */}
      <Card className="w-25">
        <Card.Image src="https://picsum.photos/200/300" alt="picsum" />
        <Card.Body>
          <h1>Awesome Picture</h1>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>

      <Card className="w-25">
        <Card.Header className="text-center">
          <p className="text-primary">Phone</p>
        </Card.Header>
        <Card.Body>
          <h1>Iphone 13 Promax</h1>
          <p>Price: 3000000</p>
        </Card.Body>
        <Card.Footer>
          <Button variant="success">Details</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Composition;
