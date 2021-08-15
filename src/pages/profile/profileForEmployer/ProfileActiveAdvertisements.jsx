import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card } from "semantic-ui-react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function ProfileActiveAdvertisements() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [currentJobAdvertisement, setCurrentJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByIsActiveTrueAndEmployerId(2)
      .then((result) => {
        setJobAdvertisements(result.data.data);
      });
  }, []);

  let setCurrentAdvertisement = (jobAdvertisement) => {
    setCurrentJobAdvertisement(jobAdvertisement);
  };

  let getCurrentClass = (jobAdvertisement) => {
    if (jobAdvertisement == currentJobAdvertisement) {
      return "ui link card ";
    } else {
      return "";
    }
  };

  return (
    <div>
      {jobAdvertisements.map((jobAdvertisement) => (
        <Card key={jobAdvertisement.id} fluid>
          <Card.Group
            onMouseEnter={(e) => setCurrentAdvertisement(jobAdvertisement)}
            as={NavLink}
            to={`/jobAdvertisementDetail/${jobAdvertisement.id}`}
          >
            <Card className={getCurrentClass(jobAdvertisement)} fluid>
              <Card.Content>
                <Card.Header textAlign="center">
                  {jobAdvertisement.jobTitle.title}
                  <Card.Meta>
                    {jobAdvertisement.employer.companyName}
                    <p style={{ fontSize: "13px" }}>
                      ({jobAdvertisement.city.name})
                    </p>
                  </Card.Meta>
                </Card.Header>

                <Card.Description>
                  
                  <p style={{ textAlign: "right" }}>
                    Application deadline :{" "}
                    {jobAdvertisement.applicationDeadline}
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Card>
      ))}
    </div>
  );
}
