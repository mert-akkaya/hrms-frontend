import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import EmployeeService from "../../../services/employeeService";
import { Button, Card, Input, Form, Message } from "semantic-ui-react";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import * as Yup from "yup";
import HrmsTextInput from "../../../utilities/customFormControls/HrmsTextInput";

export default function EmployeeUpdate() {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getEmployerById(12).then((result) => {
      setEmployee(result.data.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      id:employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      password: employee.password,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is not null"),
      lastName: Yup.string().required("Last name is not null"),
      email: Yup.string().required("Email is not null"),
      password: Yup.number().required("Password is not null"),
    }),
    onSubmit: (values) => {
        let employeeService = new EmployeeService();
       employeeService.update(values).then((result)=>{window.location.reload()})
    },
    enableReinitialize: true,
  });
  return (
    <div>
      <Card fluid>
        <Card.Header textAlign="center">
          <strong>Employee Update Form</strong>
        </Card.Header>
        <Form
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <HrmsLabel name="First Name" /> <br />
          <Input
            fluid
            name="firstName"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <Message pointing color="red">
              {formik.errors.firstName}
            </Message>
          ) : null}
          <br />
          <HrmsLabel name="Last Name" /> <br />
          <Input
            fluid
            name="lastName"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <Message pointing color="red">
              {formik.errors.lastName}
            </Message>
          ) : null}
          <br />
          <HrmsLabel name="Email" /> <br />
          <Input
            fluid
            name="email"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <Message pointing color="red">
              {formik.errors.email}
            </Message>
          ) : null}
          <br />
          <HrmsLabel name="Password" /> <br />
          <Input
            fluid
            name="password"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <Message pointing color="red">
              {formik.errors.password}
            </Message>
          ) : null}
          <br />
          <Button positive onClick={formik.handleSubmit} type="submit">
            Update
          </Button>
        </Form>
      </Card>
    </div>
  );
}
