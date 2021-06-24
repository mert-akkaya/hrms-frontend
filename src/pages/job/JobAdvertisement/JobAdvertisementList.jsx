import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [currentJob, setCurrentJob] = useState({});


  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByIsActiveTrue()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  let setCurrentJobAdvertisement = (jobAdvertisement)=>{
    setCurrentJob(jobAdvertisement);
  }
  let getCurrentJobClass = (jobAdvertisement)=>{
    if (jobAdvertisement==currentJob) {
      return "ui link card "
    }else{
      return ""
    }
  }
 
  return (
    <div>
      {jobAdvertisements.map((jobAdvertisement) => ( 
        <Card.Group onMouseEnter={(e)=>setCurrentJobAdvertisement(jobAdvertisement)}  as={NavLink} to={`/jobAdvertisementDetail/${jobAdvertisement.id}`} key={jobAdvertisement.id}>
          <Card className={getCurrentJobClass(jobAdvertisement)} fluid>
            <Card.Content>
              <Card.Header textAlign="center">
                {jobAdvertisement.jobTitle.title}
                <Card.Meta>
                  {jobAdvertisement.employer.companyName}
                  <p style={{fontSize:"13px"}}>({jobAdvertisement.city.name})</p>
                </Card.Meta>
              </Card.Header>

              <Card.Description>
               {jobAdvertisement.description} 
                <p style={{textAlign:"right"}}>Application deadline : {jobAdvertisement.applicationDeadline}</p> 
              </Card.Description>
              
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
