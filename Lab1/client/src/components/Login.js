import {  Row, Button, InputGroup, Col, Form, Container} from "react-bootstrap";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  
  email: yup.string().required("Please enter email"),
 
  password: yup.string().required("Please enter email"),
  
});

function Login() {


  const onSubmit = (data) => {
    
      console.log(data);
    
  };

  return (
    <Container className="p-5">
      <div>
        <h2 className=" text-center mb-3 t-5" style={{ marginTop: "10%" }}>
          Uber<span style={{ color: "#3FC060" }}>Eats</span>
        </h2>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{

          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Row className="mb-3">
            <Col lg={6} md={8} sm={12} className="p-5 m-auto">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3" 
                  controlId="validationFormikUsername"
                >
                  <Form.Label>Sign in with your email</Form.Label>
                  <InputGroup hasValidation>
                  
                    <Form.Control
                      type="text"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="validationFormik04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
            <Button type="submit" variant="dark" size="md">Login</Button>
            </div>
              </Form>
              <div className="text-center m-2">
                            <span>New to Uber? </span>
                            <a class="link_login_signup" id="signup">Create an account</a>
                        </div>

            </Col>
          </Row>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
