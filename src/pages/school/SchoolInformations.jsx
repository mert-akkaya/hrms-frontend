import React, { useEffect, useState } from "react";
import { Card, Input, Form,Button } from "semantic-ui-react";
import SchoolService from "../../services/schoolService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import SchoolUpdateModal from "./SchoolUpdateModal";

export default function SchoolInformations({curriculumVitae}) {
  const [schools, setSchools] = useState([]);
  

  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService.getAllByCurriculumVitae(1).then((result) => {
      setSchools(result.data.data);
    });
  }, []);

  return (
    <div>
      <Card fluid>
      <Card.Header>
            <strong>School Informations</strong>
          </Card.Header>
      {schools.map((school) => (
          <Form key={school.id} style={{marginLeft:"15px",marginRight:"15px",marginTop:"15px",marginBottom:"15px"}}>
            <HrmsLabel name="School Name"/>  <br/>
            <Input fluid
              name="schoolName"
              value={school.name}
            /> <br/>
            <HrmsLabel name="Department"/>  <br/>
            <Input fluid
              name="department"
              value={school.department}
            /> <br/>
            <HrmsLabel name="Start Date"/>  <br/>
            <Input fluid
              name="startDate"
              value={school.startDate}
            /> <br/>
            <HrmsLabel name="Finish Date"/>  <br/>
            <Input fluid
              name="finishDate"
              value={school.finishDate}
            /> <br/>
            <HrmsLabel name="Graduate Year"/>  <br/>
            <Input fluid
              name="graduateYear"
              value={school.graduateYear}
            /> <br/>
            <SchoolUpdateModal school={school} curriculumVitae={curriculumVitae} trigger={<Button floated="right" positive>Update</Button>} />
          </Form>
      ))}
      </Card>
      
    </div>
  );
}
