import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const styleForCity = {
    fontSize: 13
  };
  const styleForDate = {
    fontSize: 13,
    textAlign:"right"
  };
  return (
    <div>
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card.Group key={jobAdvertisement.id}>
          <Card fluid>
            <Card.Content>
              <Card.Header textAlign="center">
                {jobAdvertisement.jobTitle.title}
                <Card.Meta>
                  {jobAdvertisement.employer.companyName}
                  <p style={styleForCity}>({jobAdvertisement.city.name})</p>
                </Card.Meta>
              </Card.Header>

              <Card.Description>
               {jobAdvertisement.description} 
                <p style={styleForDate}>Application deadline : {jobAdvertisement.applicationDeadline}</p> 
              </Card.Description>
              
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
