import React, { useEffect, useState } from "react";

import { Card, Icon, Accordion } from "semantic-ui-react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import CandidateInformation from "../user/Candidate/CandidateInformation";
import SchoolInformations from "../school/SchoolInformations";
import CandidateService from "../../services/candidateService";
import WorkExperienceInformation from "../workExperience/WorkExperienceInformation";
import AbilityInformation from "../ability/AbilityInformation";
import ForeignLanguageInformation from "../foreignLanguage/ForeignLanguageInformation";
import CoverLetterInformation from "../coverLetter/CoverLetterInformation";
import { useParams } from "react-router-dom";

export default function CurriculumVitaeUpdate() {
  const [candidate, setCandidate] = useState({});
  const [candidateId, setCandidateId] = useState(1); // şimdilik elle veriyorum düzeltilecek
  const [curriculumVitae, setCurriculumVitae] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  let {id} = useParams();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getCandidateById(id).then((result) => {
      setCandidate(result.data.data);
    });

    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getById(id)
      .then((result) => {
        setCurriculumVitae(result.data.data);
      });
  }, []);

  return (
    <Card fluid>
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Candidate Informations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <CandidateInformation curriculumVitae={curriculumVitae} />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          School Informations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <SchoolInformations curriculumVitae={curriculumVitae} />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Work Experience Informations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <WorkExperienceInformation curriculumVitae={curriculumVitae} />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Ability Informations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <AbilityInformation curriculumVitae={curriculumVitae} />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Language Informations
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <ForeignLanguageInformation curriculumVitae={curriculumVitae} />
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Cover Letter
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <CoverLetterInformation curriculumVitae={curriculumVitae} />
        </Accordion.Content>
      </Accordion>
    </Card>
  );
}
