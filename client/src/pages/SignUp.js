import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";


export default function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsernameChange = event => {
        setUsername(event.target.value)
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };

    const signupLandlord = e => {
        e.preventDefault();
        console.log("sending credentials to backend  - username is: " + username);
        API.Signup({
            username: username,
            password: password,
        })

    };

    return (
        <Container>
            <div className="mt-4">
                <h2>Sign up</h2>
            </div>
            <form >
                <Container className="mt-3 px-5">

                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email address (also your username)"
                                name="email"
                                onChange={handleUsernameChange}
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
                                onChange={handlePasswordChange}
                            />
                        </Col>
                    </Row>
                    <button className="btn btn-success" type="submit" onClick={signupLandlord}>
                        Submit
          </button>
                </Container>
                <Container className="mt-4">
                    <h3>Your username is {username}!</h3>
                    <p>Your password is {password}!</p>
                </Container>

                <Link to="/login"> Already have an account? Log in</Link>

            </form>

        </Container>
    );
};


