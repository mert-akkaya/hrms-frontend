import React, { useEffect, useState } from 'react'
import AbilityService from '../../services/abilityService'
import { Card, Input, Form,Button } from "semantic-ui-react";
import HrmsLabel from '../../utilities/customFormControls/HrmsLabel';
import AbilityUpdateModal from './AbilityUpdateModal';

export default function AbilityInformation({curriculumVitae}) {

    const [abilities, setAbilities] = useState([])

    useEffect(()=>{
        let abilityService = new AbilityService();
        abilityService.getAllByCurriculumVitaeId(1).then((result)=>{setAbilities(result.data.data)})
    },[])

    return (
        <div>
            <Card fluid>
                <Card.Header>
                <strong>Ability Informations</strong>
                </Card.Header>
            {abilities.map((ability)=>(
                <div>
                    <Form key={ability.id} style={{marginLeft:"15px",marginRight:"15px",marginTop:"15px",marginBottom:"15px"}}>
                  <HrmsLabel name="Ability Name"/>  <br/>
                  <Input fluid
                    name="ability"
                    value={ability.ability}
                  />
                </Form>
                    <AbilityUpdateModal ability={ability} curriculumVitae={curriculumVitae} trigger={<Button style={{marginRight:"10px"}} floated="right" positive>Update</Button>} />
                </div>
                
            ))}
            </Card>
           
        </div>
    )
}
