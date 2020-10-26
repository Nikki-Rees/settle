import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Button } from 'reactstrap';
import { Col, Row, Container } from "../components/Grid";


function Landing() {
    // Setting our component's initial state

    return (
        <body className="hero-image">
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <div class="d-flex justify-content-start">
                            <Jumbotron>
                                <h1>Landlord</h1>
                                <p>Manage your property</p>
                                <Button outline color="info">Sign-up</Button>{''}
                            </Jumbotron>
                        </div>
                    </Col>
                    <Col size="md-6 sm-12">
                        <div class="d-flex justify-content-end">
                            <Jumbotron>
                                <h1>Tenant</h1>
                                <p>Maintain your home</p>
                                <Button outline color="info" >Sign-up</Button>{''}

                            </Jumbotron>
                        </div>
                    </Col>
                </Row>

            </Container >
        </body>
    );
};

export default Landing;