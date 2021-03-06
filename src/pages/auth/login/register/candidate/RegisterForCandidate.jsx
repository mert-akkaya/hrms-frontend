import React from 'react'
import { Button, Form, Grid, Header, Image, Label, Message, Segment } from 'semantic-ui-react'
import * as Yup from 'yup';
import { useFormik } from "formik";
import AuthService from '../../../../../services/authService';
import { useHistory } from 'react-router';

export default function RegisterForCandidate() {

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            identityNumber: "",
            birthYear: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is not null"),
            lastName: Yup.string().required("Last name is not null"),
            email: Yup.string().required("Email is not null").email(),
            identityNumber: Yup.string().required("Identity number is not null").length(11),
            birthYear: Yup.number().required("Birth year is not null").min(4),
            password : Yup.string().required("Password is not null").min(4,"Password must be more than 4 character"),
            passwordConfirm: Yup.string().required("Password confirm is not null").min(4,"Password confirm must be more than 4 character")
        }),
        onSubmit: (values) => {
            let registerForCandidateModel = {
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                identityNumber: formik.values.identityNumber.toString(),
                birthYear: formik.values.birthYear,
                password: formik.values.password,
                passwordConfirm: formik.values.passwordConfirm
            }
            let authService = new AuthService();
            authService.registerForCandidate(registerForCandidateModel).then((result) => {
                history.push("/");
            })
        },
        enableReinitialize: true
    });
    return (
        <div>
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 750 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                       Candidate Register Page
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Group widths="equal">
                                <Form.Input name="firstName" fluid icon='user' iconPosition='left' placeholder='First Name' onChange={(e) => { formik.handleChange(e) }} />
                           <br/>   
                             {formik.errors.firstName && formik.touched.firstName ? (
                    <Label  basic pointing="left" color="red">{formik.errors.firstName}</Label>
              ) : null}
              
                                <Form.Input name="lastName" fluid icon='user' iconPosition='left' placeholder='Last Name' onChange={(e) => { formik.handleChange(e) }} />
                                {formik.errors.lastName && formik.touched.lastName ? (
                    <Label  basic pointing="left" color="red">{formik.errors.lastName}</Label>
              ) : null}
                            </Form.Group>
                            <Form.Input name="email" fluid icon='mail' iconPosition='left' placeholder='E mail' onChange={(e) => { formik.handleChange(e) }} />
                            {formik.errors.email && formik.touched.email ? (
                    <Label  basic pointing color="red">{formik.errors.email}</Label>
              ) : null}
                            <Form.Group widths="equal">
                                <Form.Input type="number" name="identityNumber" fluid icon='unhide' iconPosition='left' placeholder='Identity Number' onChange={(e) => { formik.handleChange(e) }} />
                                {formik.errors.identityNumber && formik.touched.identityNumber ? (
                    <Label  basic pointing="left" color="red">{formik.errors.identityNumber}</Label>
              ) : null}
                                <Form.Input type="number" name="birthYear" fluid icon='birthday cake' iconPosition='left' placeholder='Birth Year' onChange={(e) => { formik.handleChange(e) }} />
                                {formik.errors.birthYear && formik.touched.birthYear ? (
                    <Label  basic pointing="left" color="red">{formik.errors.birthYear}</Label>
              ) : null}
                            </Form.Group>
                            <Form.Input
                                name="password"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={(e) => { formik.handleChange(e) }}
                            />
                            {formik.errors.password && formik.touched.password ? (
                    <Label  basic pointing color="red">{formik.errors.password}</Label>
              ) : null}
                            <Form.Input
                                name="passwordConfirm"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password Confirm'
                                type='password'
                                onChange={(e) => { formik.handleChange(e) }}
                            />
                            {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? (
                    <Label  basic pointing color="red">{formik.errors.passwordConfirm}</Label>
              ) : null}
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
