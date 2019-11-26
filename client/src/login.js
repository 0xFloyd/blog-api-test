import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "", 
            password: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //function to update user inputs and set state as user types
     handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    async handleSubmit(event) {
        const payload = {
            email: this.state.email,
            password: this.state.password
        }

        let data = JSON.stringify(payload);
        
        try {
          const response = await fetch("http://localhost:9000/user/login", {
            method: "POST",
            body: data,
            headers: { "Content-type": "application/json" }
          });
          const result = await response.json();
        } catch (error) {
          console.error("Error:", error);
        }
        
        event.preventDefault();
    }

    render() {
        return (
            <div className="blog-post-form">
                <h1>Log In</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label xs={4} lg={2}>email:</Label>
                        <Col xs={12} lg={8}>
                            <Input type="text" name="email" value={this.state.email} onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                     <FormGroup row>
                        <Label xs={4} lg={2}>password:</Label>
                        <Col xs={12} lg={8}>
                            <Input type="text" name="password" value={this.state.password} onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <Button className="post-submit-button" type="submit" value="Submit">Submit</Button>
                </Form>
            </div>
        );
    }

}

export default Login;