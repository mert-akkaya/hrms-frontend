import React, { useEffect } from "react";
import { useState } from "react";
import { Accordion, Button, Card, Form, Icon } from "semantic-ui-react";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import CandidateService from "../../../services/candidateService";
import * as Yup from 'yup';
import { useFormik } from "formik";

export default function ProfileInformations() {
  const [candidate, setCandidate] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidateById(1).then((result) => {
      setCandidate(result.data.data);
    });
  }, {});


  const formik = useFormik({
    initialValues:{
    firstName: candidate.firstName,
    lastName: candidate.lastName,
    email: candidate.email,
    identityNumber: candidate.identityNumber,
    birthYear: candidate.birthYear,
  }
    ,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is not null"),
      lastName: Yup.string().required("Last name is not null"),
      email: Yup.string().required("Email is not null"),
      identityNumber: Yup.string().required("Identity number is not null"),
      birthYear: Yup.number(),
    }),
    onSubmit: (values) => {
      let candidateModel = {
        id: candidate.id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        identityNumber: values.identityNumber,
        birthYear: values.birthYear,
        password: candidate.password,
      };

      let candidateService = new CandidateService();
      candidateService.update(candidateModel).then((result)=>{
          window.location.reload()
        });
    },
    enableReinitialize:true
  });

  function changePassword(currentPassword,newPassword,newPasswordAgain) {
      //todo:tamamla
  }

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
            Personal İnformations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Form
              action
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Form.Input
                fluid
                name="firstName"
                value={formik.values.firstName}
                label={<HrmsLabel name="First Name" />}
                onChange={(e)=>{formik.handleChange(e)}}
              />
              <Form.Input
                fluid
                name="lastName"
                value={formik.values.lastName}
                label={<HrmsLabel name="Last Name" />}
                onChange={(e)=>{formik.handleChange(e)}}
              />

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="email"
                  value={formik.values.email}
                  label={<HrmsLabel name="Email" />}
                  onChange={(e)=>{formik.handleChange(e)}}
                />

                <Form.Input
                  fluid
                  name="identityNumber"
                  value={formik.values.identityNumber}
                  label={<HrmsLabel name="Identity Number" />}
                  onChange={(e)=>{formik.handleChange(e)}}
                />

                <Form.Input
                  fluid
                  name="birthYear"
                  value={formik.values.birthYear}
                  label={<HrmsLabel name="Birth Year" />}
                  onChange={(e)=>{formik.handleChange(e)}}
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
              action
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
