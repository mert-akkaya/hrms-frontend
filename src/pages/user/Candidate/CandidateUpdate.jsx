import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import HrmsTextInput from "../../../utilities/customFormControls/HrmsTextInput";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import CurriculumVitaeService from "../../../services/curriculumVitaeService";
import CandidateService from "../../../services/candidateService";
import { toast } from "react-toastify";

export default function CandidateUpdate() {
  const [curriculumVitae, setCurriculumVitae] = useState({});
  const initialValues = {
    id: 1,
    firstName: curriculumVitae.candidate?.firstName,
    lastName: curriculumVitae.candidate?.lastName,
    email: curriculumVitae.candidate?.email,
    identityNumber: curriculumVitae.candidate?.identityNumber,
    birthYear: curriculumVitae.candidate?.birthYear,
    password: curriculumVitae.candidate?.password,
  };

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaeByCandidateId(1)
      .then((result) => setCurriculumVitae(result.data.data));
  }, []);

  const updateCandidate = (candidate) => {
    let candidateService = new CandidateService();
    candidateService.update(candidate).then(toast.success("Update success"));
    
  };
  return (
    <Card fluid>
      <Card.Header>
        <strong>Candidate Informations</strong>
      </Card.Header>
      <Image size="small" centered src={curriculumVitae.photoUrl} />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => {
          updateCandidate(values);
        }}
      >
        <Form className="ui form">
          <HrmsLabel name="First Name" />
          <HrmsTextInput name="firstName" placeholder="First Name" />
          <HrmsLabel name="Last Name" />
          <HrmsTextInput name="lastName" placeholder="Last Name" />
          <HrmsLabel name="Email" />
          <HrmsTextInput name="email" placeholder="Email" />
          <HrmsLabel name="Identity Number" />
          <HrmsTextInput name="identityNumber" placeholder="Identity Number" />
          <HrmsLabel name="Birth Year" />
          <HrmsTextInput name="birthYear" placeholder="Birth Year" />

          <Button type="submit">Update</Button>
        </Form>
      </Formik>
    </Card>
  );
}
