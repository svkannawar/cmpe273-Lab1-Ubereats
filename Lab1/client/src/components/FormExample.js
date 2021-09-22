import {Row, Button, InputGroup, Col, Form, Nav, Container, FormControl,} from "react-bootstrap";
import React, { useState } from "react";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(event.currentTarget);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
      
    <Container className="p-5">
        <div>
        <h2 className=" text-center mb-3 t-5" style={{ marginTop: "10%" }}>
          Uber<span style={{ color: "#45f33f" }}>Eats</span>
        </h2>
      </div>
      <Row className="mb-3">
        <Col lg={6} md={8} sm={12} className="p-5 m-auto">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3"  controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
               
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3"  controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please enter password.
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2">
            <Button type="submit" variant="dark" size="md">Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormExample;
