import React, { useState } from "react";
import { Card,Form,Button,TextArea } from "semantic-ui-react";
import CoverLetterUpdateModal from "./CoverLetterUpdateModal";


export default function CoverLetterInformation({ curriculumVitae }) {
  return (
    <div>
      <Card fluid>
        <Card.Header>
          <strong>Cover Letter</strong>
        </Card.Header>

        <Form
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <TextArea placeholder='Tell us more' value={curriculumVitae.coverLetter} /><br/><br/>
          <CoverLetterUpdateModal curriculumVitae={curriculumVitae} trigger={<Button  floated="right" positive>Update</Button>} />
        </Form>
        
      </Card>
    </div>
  );
}
