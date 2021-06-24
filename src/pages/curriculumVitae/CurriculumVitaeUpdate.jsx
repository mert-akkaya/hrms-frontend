import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import CandidateUpdate from "../user/Candidate/CandidateUpdate";

export default function CurriculumVitaeUpdate() {
  const [curriculumVitae, setCurriculumVitae] = useState({});
  const initialValues = {
    firstName: curriculumVitae.candidate?.firstName,
    lastName: curriculumVitae.candidate?.lastName,
    email: curriculumVitae.candidate?.email,
    identityNumber: curriculumVitae.candidate?.identityNumber,
    birthYear: curriculumVitae.candidate?.birthYear,
  };

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaeByCandidateId(1)
      .then((result) => setCurriculumVitae(result.data.data));
  }, []);
  return (
    <Card fluid>
      <CandidateUpdate/>
    </Card>
  );
}
