import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      location: "",
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      mobile: "",
      location: "",
    });
  }

  render() {
    return (
      <Form style={{ color: "#004547" }} onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter name" 
          value={this.state.name}
          name="name" 
          onChange={this.handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter Mobile Number" 
          value={this.state.mobile}
          name="mobile" 
          onChange={this.handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Enter Location" 
          value={this.state.location}
          name="location" 
          onChange={this.handleChange} />
        </Form.Group>


        <Button variant="primary" type="submit" style={{ color: "#dbf1f3", backgroundColor: "#00a9b8", border: "none" }}>
          Add Contact
        </Button>
      </Form>
    );
  }
}

export default ContactsForm;
