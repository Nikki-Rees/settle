import React from "react";
import { CustomInput, Form, FormGroup, Label, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="4" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
}


export function Checkbox(props) {
  return (

    <Input type="checkbox" />

  );
}

export function Switches(props) {
  return (

    <div>
      <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />

    </div>

  );
}


export function CustomSelect(props) {
  return (

    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
      <option value="">Select</option>
      <option></option>

    </CustomInput>

  );
}

export function FileBrowser(props) {
  return (

    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Upload an image" />

  );
}

export function RoomToolbar(props) {

  return (

    <ButtonToolbar label="Bedrooms">
      <h4> Bedrooms  </h4>
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
    </ButtonToolbar>

  );

}