import React, { useEffect, useState } from "react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaes()
      .then((result) => setCurriculumVitaes(result.data.data));
  },[]);

  return (
    <div>
      {curriculumVitaes.map((curriculumVitae) => (
        <Card>
          <Image src={curriculumVitae.photoUrl} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{`${curriculumVitae.candidate.firstName} ${curriculumVitae.candidate.lastName}`}</Card.Header>
            <Card.Meta>
              <span className="date">{curriculumVitae.candidate.email}</span>
            </Card.Meta>
            <Card.Description>
              <strong>Identity Number : </strong>{curriculumVitae.candidate.identityNumber}<br/>
              <strong>Birth Year: </strong>{curriculumVitae.candidate.birthYear}<br/>
              <strong>LinkedIn Address : </strong>{curriculumVitae.linkedinAddress}<br/>
              <strong>Github Address : </strong>{curriculumVitae.githubAddress}<br/>
              <strong>Cover Letter : </strong>{curriculumVitae.coverLetter}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
