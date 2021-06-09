import React, { useState,useEffect } from 'react'
import EmployerService from '../../../services/employerService';
import {Card} from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService
        employerService.getEmployer().then((result)=>setEmployers(result.data.data))
    });

    return (
        <div>
            {employers.map((employer)=>(
                <Card.Group>
                <Card>
                  <Card.Content>
                    <Card.Header>{employer.companyName}</Card.Header>
                    <Card.Meta>{employer.webAddress}</Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
        </div>
    )
}
