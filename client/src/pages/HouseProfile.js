import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { FormBtn, Checkbox } from "../components/Form";
import { AddressForm } from "../components/AddressForm";
import { FormGroup } from "reactstrap";


function HouseProfile() {
    // // Setting our component's initial state
    // const [rooms, setRooms] = useState([])
    // const [formObject, setFormObject] = useState({})

    // // Load all rooms and store them with setrooms
    // useEffect(() => {
    //     loadRooms()
    // }, [])

    // // Loads all books and sets them to books
    // function loadRooms() {
    //     API.getRooms()
    //         .then(res =>
    //             setRooms(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };


    return (

        <Container fluid>

            <Row>
                <Col size="md-8">
                    <h1>
                        Property info
          </h1>
                    <AddressForm />
                </Col>
            </Row>

            <Row>

                <Col size="md-8">
                    <h1>Select the rooms</h1>
                </Col>

                <Col size="md-4">
                    <h1>My room list</h1>
                </Col>

            </Row>
            <Row>
                <Col size="md-4">
                    <h4>Bedrooms</h4>
                    <form>
                        <FormGroup check inline>
                            <label check>
                                Bedroom 1 <Checkbox
                                    onChange={() => { }}
                                    name="Bedroom 1"
                                />   </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Bedroom 2 <Checkbox
                                    onChange={() => { }}
                                    name="Bedroom 2"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Bedroom 3 <Checkbox
                                    onChange={() => { }}
                                    name="Bedroom 2"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Bedroom 4 <Checkbox
                                    onChange={() => { }}
                                    name="Bedroom 2"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Bedroom 5 <Checkbox
                                    onChange={() => { }}
                                    name="Bedroom 2"
                                />
                            </label>
                        </FormGroup>

                        <FormBtn
                        // disabled={!(formObject.name)}
                        // onClick={() => { }}
                        >
                            Add
              </FormBtn>
                    </form>

                    <h4>Bathrooms</h4>
                    <form>
                        <FormGroup check inline>
                            <label check> Bathroom 1
                <Checkbox
                                    onChange={() => { }}
                                    name="Bathroom 1"
                                />
                            </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Bathroom 2 <Checkbox
                                    onChange={() => { }}
                                    name="Bathroom 2"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Powder room <Checkbox
                                    onChange={() => { }}
                                    name="Powder room"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Ensuite <Checkbox
                                    onChange={() => { }}
                                    name="ensuite"
                                />
                            </label>
                        </FormGroup>
                        <FormBtn
                            // disabled={!(formObject.name)}
                            onClick={() => { }}
                        >
                            Add
              </FormBtn>


                    </form>
                </Col>

                <Col size="md-4">
                    <h4>Living spaces</h4>
                    <form>
                        <FormGroup check inline>
                            <label check>
                                Living room <Checkbox
                                    onChange={() => { }}
                                    name="Living room"
                                />   </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Kitchen <Checkbox
                                    onChange={() => { }}
                                    name="Kitchen"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Study <Checkbox
                                    onChange={() => { }}
                                    name="Study"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Rumpus <Checkbox
                                    onChange={() => { }}
                                    name="Rumpus"
                                />
                            </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Dining <Checkbox
                                    onChange={() => { }}
                                    name="Dining"
                                />
                            </label>
                        </FormGroup>
                        <FormBtn
                            // disabled={!(formObject.name)}
                            onClick={() => { }}
                        >
                            Add
              </FormBtn>


                    </form>
                    <h4>Utilities</h4>
                    <form>
                        <FormGroup check inline>
                            <label check>
                                Laundry <Checkbox
                                    onChange={() => { }}
                                    name="Laundry"
                                />   </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Pantry <Checkbox
                                    onChange={() => { }}
                                    name="Pantry"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Cellar <Checkbox
                                    onChange={() => { }}
                                    name="Cellar"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Attic <Checkbox
                                    onChange={() => { }}
                                    name="Attic"
                                />
                            </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Basement <Checkbox
                                    onChange={() => { }}
                                    name="Basement"
                                />
                            </label>
                        </FormGroup>
                        <FormBtn
                            // disabled={!(formObject.name)}
                            onClick={() => { }}
                        >
                            Add
              </FormBtn>


                    </form>

                    <h4>Outdoor</h4>
                    <form>
                        <FormGroup check inline>
                            <label check>
                                Porch <Checkbox
                                    onChange={() => { }}
                                    name="Porch"
                                />   </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Patio <Checkbox
                                    onChange={() => { }}
                                    name="Patio"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Carport <Checkbox
                                    onChange={() => { }}
                                    name="Carport"
                                />
                            </label>
                        </FormGroup>
                        <FormGroup check inline>
                            <label check>
                                Garage <Checkbox
                                    onChange={() => { }}
                                    name="Garage"
                                />
                            </label>
                        </FormGroup>

                        <FormGroup check inline>
                            <label check>
                                Garden <Checkbox
                                    onChange={() => { }}
                                    name="Garden"
                                />
                            </label>
                        </FormGroup>
                        <FormBtn
                            // disabled={!(formObject.name)}
                            onClick={() => { }}
                        >
                            Add
              </FormBtn>


                    </form>
                </Col>

                {/* <Col size="md-4 sm-12">


                    {rooms.length ? (
                        <List>
                            {rooms.map(room => {
                                return (
                                    <ListItem key={room._id}>
                                        <a href={"/rooms/" + room._id}>
                                            <strong>
                                                {room.name}
                                            </strong>
                                        </a>
                                        <DeleteBtn onClick={() => { }} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col> */}
            </Row>

        </Container >

    );
}


export default HouseProfile;