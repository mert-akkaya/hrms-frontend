import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import * as Yup from 'yup';
import { useFormik } from "formik";
import AuthService from '../../../../../services/authService';
import { useHistory } from 'react-router';

export default function RegisterForCandidate() {

    const history = useHistory();

    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
            identityNumber: "",
            birthYear: "",
            password:"",
            passwordConfirm:""
          },
        validationSchema: Yup.object({
          firstName: Yup.string().required("First name is not null"),
          lastName: Yup.string().required("Last name is not null"),
          email: Yup.string().required("Email is not null"),
          identityNumber: Yup.string().required("Identity number is not null"),
          birthYear: Yup.number(),
        }),
        onSubmit: (values) => {
         let registerForCandidateModel ={
             firstName : formik.values.firstName,
             lastName : formik.values.lastName,
             email : formik.values.email,
             identityNumber : formik.values.identityNumber,
             birthYear : formik.values.birthYear,
             password : formik.values.password,
             passwordConfirm : formik.values.passwordConfirm
         }
         let authService = new AuthService();
         authService.registerForCandidate(registerForCandidateModel).then((result)=>{
            history.push("/");
         })
        },
        enableReinitialize:true
      });
    return (
        <div>
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Register Page
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Group widths="equal">
                                <Form.Input name="firstName" fluid icon='user' iconPosition='left' placeholder='First Name' onChange={(e)=>{formik.handleChange(e)}} />
                                <Form.Input name="lastName" fluid icon='user' iconPosition='left' placeholder='Last Name' onChange={(e)=>{formik.handleChange(e)}} />
                            </Form.Group>
                            <Form.Input name="email" fluid icon='mail' iconPosition='left' placeholder='E mail' onChange={(e)=>{formik.handleChange(e)}}/>
                            <Form.Group widths="equal">
                                <Form.Input name="identityNumber" fluid icon='unhide' iconPosition='left' placeholder='Identity Number' onChange={(e)=>{formik.handleChange(e)}} />
                                <Form.Input name="birthYear" fluid icon='birthday cake' iconPosition='left' placeholder='Birth Year' onChange={(e)=>{formik.handleChange(e)}} />
                            </Form.Group>
                            <Form.Input
                                name="password"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={(e)=>{formik.handleChange(e)}}
                            />
                            <Form.Input
                                name="passwordConfirm"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password Confirm'
                                type='password'
                                onChange={(e)=>{formik.handleChange(e)}}
                            />

                            <Button onClick={formik.handleSubmit} color='teal' fluid size='large'>
                                Register
                            </Button>
                        </Segment>
                    </Form>
                   
                </Grid.Column>
            </Grid>
        </div>
    )
}
