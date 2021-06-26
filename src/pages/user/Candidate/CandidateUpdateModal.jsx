import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Form, Modal, Input, Message } from "semantic-ui-react";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import CandidateService from "../../../services/candidateService";
import * as Yup from "yup";

export default function CandidateUpdateModal({candidate, curriculumVitae, trigger }) {
  const [open, setOpen] = useState(false);
  


  const formik = useFormik({
    initialValues:{
     firstName: candidate.firstName,
    lastName: candidate.lastName,
    email: candidate.email,
    identityNumber: candidate.identityNumber,
    birthYear: candidate.birthYear,
    password: candidate.password,
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
        curriculumVitae: {
          id: curriculumVitae.id,
        },
        id: candidate.id,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        identityNumber: values.identityNumber,
        birthYear: values.birthYear,
        password: candidate.password,
      };

      let candidateService = new CandidateService();
      candidateService.update(candidateModel).then((result) => {
        window.location.reload();
      });
    },
    enableReinitialize:true
  });

  return (
    <div>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="tiny"
    >
      <Modal.Header>Update Candidate Informations</Modal.Header>
      <Modal.Content>
        <Form
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <Modal.Description>
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
            <br />
            <HrmsLabel name="Identity Number" /> <br />
            <Input
              fluid
              name="identityNumber"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.identityNumber}
            />
            <br />
            <HrmsLabel name="Birth Year" /> <br />
            <Input
              fluid
              name="birthYear"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.birthYear}
            />
            <br />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button positive onClick={formik.handleSubmit} type="submit">
              Update
            </Button>
          </Modal.Description>
        </Form>
      </Modal.Content>
    </Modal>
    </div>
    
  );
}
