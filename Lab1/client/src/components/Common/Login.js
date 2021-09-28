import { Row, Button, InputGroup, Col, Form, Container, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Backend_URL from '../../config/configBackendURL'

const schema = yup.object().shape({
  email: yup.string().required("Please enter email"),

  password: yup.string().required("Please enter password"),
});

function Login() {
  
  // const [role, setRole] = useState("customer");

  let history = useHistory();

  // const radioChange = (e) => {
  //   setRole(e.target.value);
  
  // };


  const sbmt = (data, { resetForm }) => {
    // console.log(data, role);

    //, role:role
   const creds = {email:data.email, password:data.password };
   resetForm();
  console.log(creds);
   axios.post(Backend_URL + "/signin", creds)
       .then(response => {
         
        if(response.data.role==="customer"){
          history.push('/custDashboard');
        }
        if(response.data.role==="restaurant"){
          history.push('/restDashboard');
        }
       } )
       .catch(error => {
        
           console.error('There was an error!', error);
       });

       
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
        onSubmit={sbmt}
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
            {/* <ToggleButtonGroup className="mb-4" style={{ width: '80%', marginInlineStart:"12%" }} type="radio" name="options" required>
                 
                 <ToggleButton variant="dark" id="tbg-radio-2" value={"customer"} onChange={radioChange}>
                   <span style={{padding: "10px"}}>Customer</span>
                 </ToggleButton>
                 <ToggleButton variant="dark" id="tbg-radio-3" value={"restaurant"} onChange={radioChange}>
                 <span style={{padding: "10px"}}>Restaurant</span>  
                 </ToggleButton>
               </ToggleButtonGroup> */}

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

                <Form.Group className="mb-3" controlId="validationFormik04">
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
                  <Button type="submit" variant="dark" size="md">
                    Sign In
                  </Button>
                </div>
              </Form>
              <div className="text-center m-2">
                <span>New to Uber? </span>
                <Link class="link_login_signup" id="signup" to="/signup">
                  {" "}
                  Sign Up
                </Link>
              </div>
            </Col>
          </Row>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
