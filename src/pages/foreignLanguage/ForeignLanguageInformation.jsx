import React, { useEffect, useState } from "react";
import { Card, Input, Form, Button } from "semantic-ui-react";
import ForeignLanguageService from "../../services/foreignLanguageService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import ForeignLanguageUpdateModal from "./ForeignLanguageUpdateModal";

export default function ForeignLanguageInformation({ curriculumVitae }) {
  const [foreignLanguages, setForeignLanguages] = useState([]);

  useEffect(() => {
    let foreignLanguageService = new ForeignLanguageService();
    foreignLanguageService.getAllByCurriculumVitaeId(1).then((result) => {
      setForeignLanguages(result.data.data);
    });
  }, []);
  return (
    <div>
      <Card fluid>
        <Card.Header>
          <strong>Language Informations</strong>
        </Card.Header>
        {foreignLanguages.map((foreignLanguage) => (
          <Form
            key={foreignLanguage.id}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <HrmsLabel name="Language" /> <br />
            <Input
              fluid
              name="languageName"
              value={foreignLanguage.language?.name}
            />{" "}
            <br />
            <HrmsLabel name="Level" /> <br />
            <Input fluid name="level" value={foreignLanguage.level} /> <br />

            <ForeignLanguageUpdateModal foreignLanguage={foreignLanguage} curriculumVitae={curriculumVitae} trigger={<Button floated="right" positive>Update</Button>} />
          </Form>
        ))}
      </Card>
    </div>
  );
}
