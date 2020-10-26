import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormGroup } from "reactstrap";

const SignUp = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [propertyname, setPropertyname] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("email is " + email);
        console.log("property name is " + propertyname)
        console.log("password is " + password);
    };

    return (
        <div>
            <div className="mt-4">
                <h2>Sign up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email address"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Property name"
                                name="propertyname"
                                onChange={e => setPropertyname(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit">
                        Submit
          </button>
                </Container>
                <Container className="mt-4">
                    <h3>Hello {username}!</h3>
                    <p>Your password is {password}!</p>
                </Container>

            </form>
        </div>
    );
};

export default SignUp;