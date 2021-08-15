import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Accordion, Button, Card, Form, Icon } from "semantic-ui-react";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import EmployerService from "../../../services/employerService";
import * as Yup from 'yup';
import { useFormik } from "formik";

export default function ProfileInformations() {
  const [employer, setEmployer] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(2).then((result) => {
      setEmployer(result.data.data);
    });
  },[]);

  const formik = useFormik({
    initialValues: {
      companyName: employer.companyName,
      email: employer.email,
      webAddress: employer.webAddress,
      phoneNumber: employer.phoneNumber,
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Company name is not null"),
      email: Yup.string().required("Email is not null"),
      webAddress: Yup.string().required("Web Address is not null"),
      phoneNumber: Yup.string().required("Phone number is not null"),
    }),
    onSubmit: (values) => {
      let employerModel ={
        id: employer.id,
        companyName: values.companyName,
        webAddress: values.webAddress,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: employer.password
      }
      let employerService = new EmployerService();
      employerService.update(employerModel).then(window.location.reload());
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <Card fluid>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Corporate İnformations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Form
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Form.Input
                fluid
                name="companyName"
                value={formik.values.companyName}
                label={<HrmsLabel name="Company Name" />}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              />
              <Form.Input
                fluid
                name="email"
                value={formik.values.email}
                label={<HrmsLabel name="Email" />}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
              />

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="webAddress"
                  value={formik.values.webAddress}
                  label={<HrmsLabel name="Web Address" />}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                />

                <Form.Input
                  fluid
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  label={<HrmsLabel name="Phone Number" />}
                  onChange={(e) => {
                    formik.handleChange(e);
                  }}
                />

              </Form.Group>
              <Button onClick={formik.handleSubmit} size="large" positive>
                Save
              </Button>
            </Form>
          </Accordion.Content>
        </Accordion>
      </Card>
      <Card fluid>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Change Password
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Form
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Form.Input
                type="password"
                fluid
                name="currentPassword"
                label={<HrmsLabel name="Current Password" />}
              />
              <Form.Input
                type="password"
                fluid
                name="newPassword"
                label={<HrmsLabel name="New Password" />}
              />
              <Form.Input
                type="password"
                fluid
                name="newPasswordAgain"
                label={<HrmsLabel name="New Password" />}
              />
              <Button size="large" positive>
                Change
              </Button>
            </Form>
          </Accordion.Content>
        </Accordion>
      </Card>
    </div>
  );
}
