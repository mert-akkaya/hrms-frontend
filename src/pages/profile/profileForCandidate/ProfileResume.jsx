import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Card,Image } from "semantic-ui-react";
import CurriculumVitaeService from "../../../services/curriculumVitaeService";

export default function ProfileResume() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);
  const [currentCurriculumVitae, setCurrentCurriculumVitae] = useState({})
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService.getCurriculumVitaeByCandidateId(1).then((result) => {
      setCurriculumVitaes(result.data.data);
    });
  }, []);

  let setCurrentResume = (curriculumVitae) => {
    setCurrentCurriculumVitae(curriculumVitae);
  };
  let getCurrentClass = (curriculumVitae) => {
    if (curriculumVitae == currentCurriculumVitae) {
      return "ui link card ";
    } else {
      return "";
    }
  };

  console.log(curriculumVitaes);
  return (
    <div>
      {curriculumVitaes.map((curriculumVitae) => (
        <Card fluid>
        <Card.Group
          onMouseEnter={(e) => setCurrentResume(curriculumVitae)}
          as={NavLink}
          to={`/curriculumVitaeUpdate/${curriculumVitae.id}`}
          key={curriculumVitae.id}
        >
          <Card className={getCurrentClass(curriculumVitae)} fluid>
            <Card.Content>
              <Image
              floated='left'
              size='mini'
              src={curriculumVitae.photoUrl}
              />
              <Card.Header >{curriculumVitae.candidate.firstName} {curriculumVitae.candidate.lastName}</Card.Header>
              <p style={{ textAlign: "right" , color:"black" }}>
                          {curriculumVitae.candidate.email}
                        </p>
            </Card.Content>
          </Card>
        </Card.Group>
      </Card>
      ))}
    </div>
  );
}
