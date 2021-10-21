import React from 'react'
import { Button, Form, Grid, Header, Image, Label, Message, Segment } from 'semantic-ui-react'
import * as Yup from 'yup';
import { useFormik } from "formik";
import AuthService from '../../../../../services/authService';
import { useHistory } from 'react-router';

export default function RegisterForEmployer() {

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            companyName: "",
            webAddress: "",
            email: "",
            phoneNumber: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required("Company name is not null"),
            webAddress: Yup.string().required("Web Address  is not null"),
            email: Yup.string().required("Email is not null").email(),
            phoneNumber: Yup.string().required("Phone number is not null").length(10),
            password : Yup.string().required("Password is not null").min(4,"Password must be more than 4 character"),
            passwordConfirm: Yup.string().required("Password confirm is not null").min(4,"Password confirm must be more than 4 character")
        }),
        onSubmit: (values) => {
            let registerForEmployerModel = {
                companyName: formik.values.companyName,
                webAddress: formik.values.webAddress,
                email: formik.values.email,
                phoneNumber: formik.values.phoneNumber,
                password: formik.values.password,
                passwordConfirm: formik.values.passwordConfirm
            }
            let authService = new AuthService();
            authService.registerForEmployer(registerForEmployerModel).then((result) => {
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
                       Employer Register Page
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Group widths="equal">
                                <Form.Input name="companyName" fluid icon='world' iconPosition='left' placeholder='Company Name' onChange={(e) => { formik.handleChange(e) }} />
                           <br/>   
                             {formik.errors.companyName && formik.touched.companyName ? (
                    <Label  basic pointing="left" color="red">{formik.errors.companyName}</Label>
              ) : null}
              
                                <Form.Input name="webAddress" fluid icon='internet explorer' iconPosition='left' placeholder='Web Address' onChange={(e) => { formik.handleChange(e) }} />
                                {formik.errors.webAddress && formik.touched.webAddress ? (
                    <Label  basic pointing="left" color="red">{formik.errors.webAddress}</Label>
              ) : null}
                            </Form.Group>
                            <Form.Input name="email" fluid icon='mail' iconPosition='left' placeholder='E mail' onChange={(e) => { formik.handleChange(e) }} />
                            {formik.errors.email && formik.touched.email ? (
                    <Label  basic pointing color="red">{formik.errors.email}</Label>
              ) : null}
                            
                                <Form.Input focus="Don't put zero at the beginning please" type="number" name="phoneNumber" fluid icon='phone' iconPosition='left' placeholder='Phone Number' onChange={(e) => { formik.handleChange(e) }} />
                                {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                    <Label  basic pointing="left" color="red">{formik.errors.phoneNumber}</Label>
              ) : null}
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
