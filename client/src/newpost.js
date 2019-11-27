import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "", 
            description: "" 
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

    async componentDidMount() {
        const data = await fetch("http://localhost:9000/message/newpost");
        const user = await data.json();
        console.log(user);
    }



    async handleSubmit(event) {
        const payload = {
            text: this.state.description
        }

        let data = JSON.stringify(payload);
        
        try {
          const response = await fetch("http://localhost:9000/message/", {
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
                <h1>New Post</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label xs={2} lg={2}>Title:</Label>
                        <Col xs={12} lg={8}>
                            <Input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label xs={4} lg={2}>Description:</Label>
                        <Col xs={12} lg={8}>
                            <Input type="text" name="description" value={this.state.description} onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <Button className="post-submit-button" type="submit" value="Submit">Submit</Button>
                </Form>
            </div>
        );
    }

}

export default NewPost;