import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import SchoolService from "../../services/schoolService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import SchoolAddModal from "./SchoolAddModal";
import SchoolUpdateModal from "./SchoolUpdateModal";

export default function SchoolInformations({ curriculumVitae }) {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService.getAllByCurriculumVitae(1).then((result) => {
      setSchools(result.data.data);
    });
  }, []);

  function deleteSchool(schoolId) {
    let schoolService = new SchoolService();
    schoolService.delete(schoolId).then((result) => {
      document.getElementById(schoolId).remove();
    });
  }
  return (
    <div>
      <Card fluid>
        <Card.Header textAlign="center">
          <strong>Update School Informations</strong>
          <SchoolAddModal
            curriculumVitae={curriculumVitae}
            trigger={
              <Button floated="right" positive>
                Add
              </Button>
            }
          />
        </Card.Header>
        {schools.map((school) => (
          <Form id={school.id}
            key={school.id}
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
                name="schoolName"
                value={school.name}
                label={<HrmsLabel name="School Name" />}
              />

              <Form.Input
                fluid
                name="department"
                value={school.department}
                label={<HrmsLabel name="Department" />}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="startDate"
                value={school.startDate}
                label={<HrmsLabel name="Start Date" />}
              />

              <Form.Input
                fluid
                name="finishDate"
                value={school.finishDate}
                label={<HrmsLabel name="Finish Date" />}
              />

              <Form.Input
                fluid
                name="graduateYear"
                value={school.graduateYear}
                label={<HrmsLabel name="Graduate Year" />}
              />
            </Form.Group>

            <SchoolUpdateModal
              school={school}
              curriculumVitae={curriculumVitae}
              trigger={
                <Button floated="right" positive>
                  Update
                </Button>
              }
            />
            <Button
              onClick={() => {
                deleteSchool(school.id);
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
