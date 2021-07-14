import React, { useEffect, useState } from "react";
import {} from "formik";
import { Form, Button, Card, Image } from "semantic-ui-react";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import CandidateService from "../../../services/candidateService";
import CandidateUpdateModal from "./CandidateUpdateModal";

export default function CandidateInformation({ curriculumVitae }) {
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidateById(1).then((result) => {
      setCandidate(result.data.data);
    });
  }, []);

  return (
    <Card fluid>
      <Image src={curriculumVitae.photoUrl} size="small" circular centered />
      <br />
      <br />
      <Card.Header textAlign="center">
        <strong>Update Informations</strong>
      </Card.Header>
      <Form
        action
        style={{
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="firstName"
            value={candidate.firstName}
            label={<HrmsLabel name="First Name" />}
          />
          <Form.Input
            fluid
            name="lastName"
            value={candidate.lastName}
            label={<HrmsLabel name="Last Name" />}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="email"
            value={candidate.email}
            label={<HrmsLabel name="Email" />}
          />

          <Form.Input
            fluid
            name="identityNumber"
            value={candidate.identityNumber}
            label={<HrmsLabel name="Identity Number" />}
          />

          <Form.Input
            fluid
            name="birthYear"
            value={candidate.birthYear}
            label={<HrmsLabel name="Birth Year" />}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="githubAddress"
            value={curriculumVitae.githubAddress}
            label={<HrmsLabel name="Github Address" />}
          />

          <Form.Input
            fluid
            name="linkedinAddress"
            value={curriculumVitae.linkedinAddress}
            label={<HrmsLabel name="LinkedIn Address" />}
          />
        </Form.Group>

        <CandidateUpdateModal
          candidate={candidate}
          curriculumVitae={curriculumVitae}
          trigger={
            <Button floated="right" positive>
              Update
            </Button>
          }
        />
      </Form>
    </Card>
  );
}
