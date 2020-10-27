import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap';

import "./style.css"

export function AddressForm(props) {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Property Name">Property Name</Label>
                        <Input type="text" name="name" id="Name" placeholder="Property name or nickname" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="Property Type">Property Type</Label>
                        <CustomInput type="select" id="propertyType" name="propertyType">
                            <option value="">Select</option>
                            <option>Apartment</option>
                            <option>House</option>
                            <option>Unit</option>
                            <option>Townhouse</option>

                        </CustomInput>
                    </FormGroup>
                </Col>

            </Row>
            <FormGroup>
                <Label for="Address">Address</Label>
                <Input type="text" name="address" id="Address" placeholder="123 Lovely St" />
            </FormGroup>
            <FormGroup>
                <Label for="Address2">Address 2</Label>
                <Input type="text" name="address2" id="Address2" placeholder="Unit number" />
            </FormGroup>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" name="city" id="City" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="State">State</Label>
                        <Input type="text" name="state" id="State" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <Label for="Zip">Postcode</Label>
                        <Input type="text" name="postcode" id="Zip" />
                    </FormGroup>
                </Col>
            </Row>
            <Button>Save details</Button>

        </Form >
    );
}