import React, { useState, useContext } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext"


export default function LogIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useContext(UserContext);

    const handleUsernameChange = event => {
        setUsername(event.target.value)
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };

    const loginLandlord = e => {
        e.preventDefault();

        API.Login({
            username: username,
            password: password,
        }).then(data =>
            loginLandlord(data.data)
        )
            .catch(err => console.log(err))

    };

    return (
        <Container>
            <div className="mt-4">
                <h2>Login</h2>
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
                    <Row>
                        <button className="btn btn-success" type="submit" onClick={loginLandlord}>
                            Submit
                    </button>



                        <Link to="/login"> Don't have an account? Sign up</Link>
                    </Row>
                </Container>
            </form>
        </Container>

    );
};


