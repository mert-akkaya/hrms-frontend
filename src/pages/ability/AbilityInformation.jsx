import React, { useEffect, useState } from "react";
import AbilityService from "../../services/abilityService";
import { Card,Form, Button } from "semantic-ui-react";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import AbilityUpdateModal from "./AbilityUpdateModal";
import AbilityAddModal from "./AbilityAddModal";
import { useParams } from "react-router-dom";

export default function AbilityInformation({ curriculumVitae }) {
  const [abilities, setAbilities] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    let abilityService = new AbilityService();
    abilityService.getAllByCurriculumVitaeId(id).then((result) => {
      setAbilities(result.data.data);
    });
  }, []);

  function deleteAbility(abilityId) {
    let abilityService = new AbilityService();
    abilityService.delete(abilityId).then((result) => {
      document.getElementById(abilityId).remove();
    });
  }

  return (
    <div>
      <Card fluid>
        <Card.Header textAlign="center">
          <strong>Update Ability Informations</strong>
          <AbilityAddModal
            curriculumVitae={curriculumVitae}
            trigger={
              <Button floated="right" positive>
                Add
              </Button>
            }
          />
        </Card.Header>
        {abilities.map((ability) => (
          <Form
            id={ability.id}
            key={ability.id}
            style={{
              marginLeft: "15px",
              marginRight: "15px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <Form.Group widths="equal">
              <Form.Input
                name="ability"
                value={ability.ability}
                label={<HrmsLabel name="Ability Name" />}
              />
              </Form.Group>
              <AbilityUpdateModal
                ability={ability}
                curriculumVitae={curriculumVitae}
                trigger={
                  <Button
                    style={{ marginRight: "10px" }}
                    floated="right"
                    positive
                  >
                    Update
                  </Button>
                }
              />
              <Button
                onClick={() => {
                  deleteAbility(ability.id);
                }}
                negative
                floated="right"
              >
                Delete
              </Button>
            
          </Form>
        ))}
      </Card>
    </div>
  );
}
