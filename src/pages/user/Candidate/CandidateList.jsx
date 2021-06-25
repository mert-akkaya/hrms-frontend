import React, { useState,useEffect } from "react";
import CandidateService from "../../../services/candidateService";
import { Card, Image } from 'semantic-ui-react'

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  });
  return (
    <div>
      {candidates.map((candidate) => (
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src="ic" />
              <Card.Header>{candidate.firstName}  {candidate.lastName}</Card.Header>
              <Card.Meta>{candidate.email}</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
