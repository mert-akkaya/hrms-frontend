import React, { useEffect, useState } from "react";
import { Card, Input, Form, Button } from "semantic-ui-react";
import ForeignLanguageService from "../../services/foreignLanguageService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import ForeignLanguageUpdateModal from "./ForeignLanguageUpdateModal";
import ForeignLanguageAddModal from "./ForeignLanguageAddModal";

export default function ForeignLanguageInformation({ curriculumVitae }) {
  const [foreignLanguages, setForeignLanguages] = useState([]);

  useEffect(() => {
    let foreignLanguageService = new ForeignLanguageService();
    foreignLanguageService.getAllByCurriculumVitaeId(1).then((result) => {
      setForeignLanguages(result.data.data);
    });
  }, []);

  function deleteForeignLanguage(foreignLanguageId) {
    let foreignLanguageService = new ForeignLanguageService();
    foreignLanguageService.delete(foreignLanguageId).then((result) => {
      window.location.reload();
    });
  }
  return (
    <div>
      <Card fluid>
        <Card.Header textAlign="center">
          <strong>Update Language Informations</strong>
          <ForeignLanguageAddModal
            curriculumVitae={curriculumVitae}
            trigger={
              <Button floated="right" positive>
                Add
              </Button>
            }
          />
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
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="languageName"
                value={foreignLanguage.language?.name}
                label={<HrmsLabel name="Language" />}
              />

              <Form.Input
                fluid
                name="level"
                value={foreignLanguage.level}
                label={<HrmsLabel name="Level" />}
              />
            </Form.Group>

            <ForeignLanguageUpdateModal
              foreignLanguage={foreignLanguage}
              curriculumVitae={curriculumVitae}
              trigger={
                <Button floated="right" positive>
                  Update
                </Button>
              }
            />
            <Button
              floated="right"
              onClick={() => {
                deleteForeignLanguage(foreignLanguage.id);
              }}
              negative
            >
              Delete
            </Button>
          </Form>
        ))}
      </Card>
    </div>
  );
}
