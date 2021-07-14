import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import WorkExperienceService from "../../services/workExperienceService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import WorkExperienceAddModal from "./WorkExperienceAddModal";
import WorkExperienceUpdateModal from "./WorkExperienceUpdateModal";

export default function WorkExperienceInformation({ curriculumVitae }) {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    let workExperienceService = new WorkExperienceService();
    workExperienceService
      .getAllByCurriculumVitaeIdAndOrderByFinishDateDesc(1)
      .then((result) => {
        setWorkExperiences(result.data.data);
      });
  }, []);

  function deleteWorkExperience(workExperienceId) {
    let workExperienceService = new WorkExperienceService();
    workExperienceService.delete(workExperienceId).then((result) => {
      document.getElementById(workExperienceId).remove();
    });
  }

  return (
    <div>
      <Card fluid>
        <Card.Header textAlign="center">
          <strong>Update Experience Informations</strong>
          <WorkExperienceAddModal
            curriculumVitae={curriculumVitae}
            trigger={
              <Button floated="right" positive>
                Add
              </Button>
            }
          />
        </Card.Header>
        {workExperiences.map((workExperience) => (
          <Form id={workExperience.id}
            key={workExperience.id}
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
                name="workplaceName"
                value={workExperience.workplaceName}
                label={<HrmsLabel name="Workplace Name" />}
              />

              <Form.Input
                fluid
                name="position"
                value={workExperience.position}
                label={<HrmsLabel name="Position" />}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="startDate"
                value={workExperience.startDate}
                label={<HrmsLabel name="Start Date" />}
              />
              <Form.Input
                fluid
                name="finishDate"
                value={workExperience.finishDate}
                label={<HrmsLabel name="Finish Date" />}
              />
            </Form.Group>

            <WorkExperienceUpdateModal
              workExperience={workExperience}
              curriculumVitae={curriculumVitae}
              trigger={
                <Button floated="right" positive>
                  Update
                </Button>
              }
            />
            <Button
              onClick={() => {
                deleteWorkExperience(workExperience.id);
              }}
              floated="right"
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
