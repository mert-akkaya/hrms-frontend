import React, { useEffect, useState } from 'react'
import { Card, Input, Form,Button } from "semantic-ui-react";
import WorkExperienceService from '../../services/workExperienceService'
import HrmsLabel from '../../utilities/customFormControls/HrmsLabel';
import WorkExperienceUpdateModal from './WorkExperienceUpdateModal';

export default function WorkExperienceInformation({curriculumVitae}) {

    const [workExperiences, setWorkExperiences] = useState([])

    useEffect(()=>{
        let workExperienceService = new WorkExperienceService();
        workExperienceService.getAllByCurriculumVitaeIdAndOrderByFinishDateDesc(1).then((result)=>{setWorkExperiences(result.data.data)})
    },[])

    return (
        <div>
            {workExperiences.map((workExperience)=>(
                <Card key={workExperience.id} fluid>
                <Card.Header>
                  <strong>Work Experiences Informations</strong>
                </Card.Header>
                <Form style={{marginLeft:"15px",marginRight:"15px",marginTop:"15px",marginBottom:"15px"}}>
                  <HrmsLabel name="Workplace Name"/>  <br/>
                  <Input fluid
                    name="workplaceName"
                    value={workExperience.workplaceName}
                  /> <br/>
                  <HrmsLabel name="Position"/>  <br/>
                  <Input fluid
                    name="position"
                    value={workExperience.position}
                  /> <br/>
                  <HrmsLabel name="Start Date"/>  <br/>
                  <Input fluid
                    name="startDate"
                    value={workExperience.startDate}
                  /> <br/>
                  <HrmsLabel name="Finish Date"/>  <br/>
                  <Input fluid
                    name="finishDate"
                    value={workExperience.finishDate}
                  /> <br/>
                  <WorkExperienceUpdateModal workExperience={workExperience} curriculumVitae={curriculumVitae} trigger={<Button floated="right" positive>Update</Button>} />
                </Form>
              </Card>
            ))}
        </div>
    )
}
