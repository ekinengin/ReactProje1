import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {

    state= { email:"", city:"", password:"",desc:"" };

    onChange=(event)=>
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value});
    }

    onSubmit=(event)=>
    {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!!", 2);
    }

    render() {
        return (
            <div>
                <Form onSubmit={ this.onSubmit }>
                    <FormGroup>
                        <Label for="email"><b>E-mail:</b></Label>
                        <Input type="email" name="email" placeholder="Enter e-mail" required="true" onChange={this.onChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password"><b>Password:</b></Label>
                        <Input type="password" name="password" placeholder="Enter password" required="true" onChange={this.onChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="desc"><b>Description:</b></Label>
                        <Input type="textarea" name="desc" placeholder="Your text.." required="true" onChange={this.onChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city"><b>City:</b></Label>
                        <Input type="select" name="city" required="true" onChange={this.onChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Zonguldak</option>
                            <option>Kocaeli</option>
                            <option>Rize</option>
                        </Input>
                    </FormGroup>

                    <Button type="submit" > Save </Button>
                </Form>
            </div>
        )
    }
}
