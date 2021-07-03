import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Icon, Popup, Table, Header, Modal } from "semantic-ui-react";
import EmployerContentService from "../../../services/employerContentService";

export default function EmployerUpdateConfirm() {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [updateContents, setUpdateContents] = useState([]);

    useEffect(()=>{
        let employerContentService = new EmployerContentService();
        employerContentService.getAllByStatusFalse().then((result)=>{setUpdateContents(result.data.data)});
        
    },[])
    const confirmContent=(id)=>{
        let employerContentService = new EmployerContentService();
        employerContentService.confirmContent(id).then((result)=>{window.location.reload()});
    }
  return (
    <div>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Header icon>
          <Icon name="check" />
          Are you sure ?
        </Header>
        <Modal.Content>
          <p>Are you sure you want to approve this update request?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => {
              setOpen(false);
              confirmContent(id)
            }}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      {
        <Table striped size="small" textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employer</Table.HeaderCell>
              <Table.HeaderCell>Content</Table.HeaderCell>
              <Table.HeaderCell>Confirm</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {updateContents.map((updateContent) => (
              <Table.Row key={updateContent.id}>
                <Table.Cell>
                  {updateContent.employerId}
                </Table.Cell>
                <Table.Cell>{`{${updateContent.content.companyName} , ${updateContent.content.email} ,
                ${updateContent.content.password} , ${updateContent.content.phoneNumber} , ${updateContent.content.id}
            }`}</Table.Cell>
                <Table.Cell>
                  <Button
                    icon="check"
                    positive
                    onClick={() => {
                      setOpen(true);
                      setId(updateContent.employerId);
                    }}
                  ></Button>
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={
                      <Button
                        onClick={() => ""}
                        negative
                        icon="remove"
                      />
                    }
                    content="Delete this job advertisement"
                    basic
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      }
    </div>
  );
}
