import { Row,  Button, ToggleButtonGroup, ToggleButton, InputGroup, Col, Form, Container, } from "react-bootstrap";
  import React, { useState } from "react";
  import * as yup from "yup";
  import { Formik } from "formik";
  import { Link } from "react-router-dom";
  
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter the name")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for name field "),
  
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please enter email"),
  
    location: yup
      .string()
      .required("Please enter the location")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for location field "),
  
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  
  function SignUp() {
    const [role, setRole] = useState("customer");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [location, setLocation] = useState("");
    // const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const radioChange = (e) => {
      setRole(e.target.value);
      console.log(e.target.value);
    };
  
    // const nameChange =(e) =>{
    //   setName(e.target.value);
    // }
  
    // const emailChange =(e) =>{
    //   setEmail(e.target.value);
    // }
  
    // const locationChange=(e) =>{
    //   setLocation(e.target.value);
    // }
  
    // const passwordChange=(e) =>{
    //   setPassword(e.target.value);
    // }
    const sbmt = (data) => {
      console.log(data, role);
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
            name: "",
            email: "",
            password: "",
            location: "",
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
                <ToggleButtonGroup className="mb-4" style={{ width: '80%', marginInlineStart:"12%" }} type="radio" name="options" defaultValue={1}>
                 
                  <ToggleButton variant="dark" id="tbg-radio-2" value={"customer"} onChange={radioChange}>
                    Customer
                  </ToggleButton>
                  <ToggleButton variant="dark" id="tbg-radio-3" value={"restaurant"} onChange={radioChange}>
                     Restaurant
                  </ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup type="checkbox" value={1} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
  
                {/* <ToggleButtonGroup className="mb-4" style={{ width: '80%', marginInlineStart:"12%" }}
                  type="radio" 
                  value={role}
                  onChange={radioChange}
                >
                  <ToggleButton variant="dark" id="tbg-btn-1" name="role" value="customer">
                  Customer
                  </ToggleButton>
                  <ToggleButton variant="dark" id="tbg-btn-2" name="role" value="restaurant">
                  Restaurant
                  </ToggleButton>
                  
                </ToggleButtonGroup> */}
  
                {/* <input type="radio" class="btn-check" name="role" id="success-outlined" value='customer' onChange={ radioChange } checked/>
          <label class="btn btn-outline-success" for="customer">Customer</label>
  
          <input type="radio" class="btn-check" name="role" id="danger-outlined" value='restaurant' onChange={ radioChange }/>
          <label class="btn btn-outline-danger" for="restaurant">Restaurant</label>  */}
  
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-2" controlId="validationFormikName">
                    <Form.Label>Enter Name</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        aria-describedby="inputGroupPrepend"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    className="mb-2"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Enter email address</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="email"
                        placeholder="Email"
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
  
                  {role === "restaurant" ? (
                    <Form.Group className="mb-2" controlId="validationFormikName">
                      <Form.Label>Enter Location</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          aria-describedby="inputGroupPrepend"
                          name="location"
                          value={values.location}
                          onChange={handleChange}
                          isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  ) : null}
  
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
                      Sign Up
                    </Button>
                  </div>
                </Form>
                <div className="text-center m-2">
                  <span>Already use Uber? </span>
                  <Link class="link_login_signup" id="login" to="/login">
                    {" "}
                    Sign In
                  </Link>
                </div>
              </Col>
            </Row>
          )}
        </Formik>
      </Container>
    );
  }
  
  export default SignUp;
  