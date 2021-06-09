import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import JobPositionService from "../../../services/jobPositionService";

export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);
  return (
    <div>
      {jobPositions.map((jobPosition) => (
        <Card.Group key={jobPosition.id}>
          <Card>
            <Card.Content>
              <Card.Header>{jobPosition.title}</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
