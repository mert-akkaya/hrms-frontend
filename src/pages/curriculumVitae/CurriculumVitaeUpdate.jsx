import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button, Card, Image, Modal } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import CandidateInformation from "../user/Candidate/CandidateInformation";
import SchoolInformations from "../school/SchoolInformations";
import CandidateService from "../../services/candidateService";

export default function CurriculumVitaeUpdate() {
  const [candidate, setCandidate] = useState({});
  const [candidateId, setCandidateId] = useState(1); // şimdilik elle veriyorum düzeltilecek
  const [curriculumVitae, setCurriculumVitae] = useState({});

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidateById(candidateId).then((result) => {
      setCandidate(result.data.data);
    });

    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaeByCandidateId(candidateId)
      .then((result) => {
        setCurriculumVitae(result.data.data);
      });
  }, []);

  return (
    <Card fluid>
      <CandidateInformation candidate={candidate} curriculumVitae={curriculumVitae} />
      <SchoolInformations curriculumVitae={curriculumVitae} />
    </Card>
  );
}
