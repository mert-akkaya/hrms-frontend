import React, { useEffect, useState } from 'react'
import {  } from "formik";
import { Form,Button, Card, Image,Input } from "semantic-ui-react";
import HrmsTextInput from "../../../utilities/customFormControls/HrmsTextInput";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import CandidateService from '../../../services/candidateService';
import CandidateUpdateModal from './CandidateUpdateModal';

export default function CandidateInformation({candidate,curriculumVitae}) {
   

    return (
    
         <Card fluid>
          <Card.Header>
            <strong>Candidate Informations</strong>
          </Card.Header>
          <Form  action style={{marginLeft:"15px",marginRight:"15px",marginTop:"15px",marginBottom:"15px"}}>
            <HrmsLabel name="First Name"/>  <br/>
            <Input fluid
              name="firstName"
              value={candidate.firstName}
            /> <br/>
            <HrmsLabel name="Last Name"/>  <br/>
            <Input fluid
              name="lastName"
              value={candidate.lastName}
            /> <br/>
            <HrmsLabel name="Email"/>  <br/>
            <Input fluid
              name="email"
              value={candidate.email}
            /> <br/>
            <HrmsLabel name="Identity Number"/>  <br/>
            <Input fluid
              name="identityNumber"
              value={candidate.identityNumber}
            /> <br/>
            <HrmsLabel name="Birth Year"/>  <br/>
            <Input fluid
              name="birthYear"
              value={candidate.birthYear}
            /> <br/>
            <CandidateUpdateModal curriculumVitae={curriculumVitae} trigger={<Button floated="right" positive>Update</Button>} />
          </Form>
        </Card>
    )
}
