import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import { Button, Icon, Popup, Table, Header, Modal } from "semantic-ui-react";

export default function JobAdvertisementConfirm() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  console.log(jobAdvertisements)
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  const filteredJobAdvertisements = jobAdvertisements.filter(
    (jobAdvertisement) => jobAdvertisement.active == false
  );

  const setActiveTrue = (id) => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.setActiveTrue(id).then(alert("Success"));
    window.location.reload();
  };

  const deleteJobAdvertisement = (jobAdvertisement) => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .deleteJobAdvertisement(jobAdvertisement)
      .then(alert("Success"));
    window.location.reload();
  };

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
          <p>Are you sure you want to approve this job posting?</p>
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
              setActiveTrue(id);
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
              <Table.HeaderCell>Job position</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>
              <Table.HeaderCell>Min salary</Table.HeaderCell>
              <Table.HeaderCell>Max salary</Table.HeaderCell>
              <Table.HeaderCell>Work type</Table.HeaderCell>
              <Table.HeaderCell>Employment type</Table.HeaderCell>
              <Table.HeaderCell>Open position count</Table.HeaderCell>
              <Table.HeaderCell>Create Date</Table.HeaderCell>
              <Table.HeaderCell>Application deadline</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Confirm</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredJobAdvertisements.map((jobAdvertisement) => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>
                  {jobAdvertisement.employer?.companyName}
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.jobTitle?.title}</Table.Cell>
                <Table.Cell>{jobAdvertisement.city?.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.workType?.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.employmentType?.name}</Table.Cell>
                <Table.Cell>{jobAdvertisement.countOfOpenPosition}</Table.Cell>
                <Table.Cell>{jobAdvertisement.createDate}</Table.Cell>
                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                <Table.Cell>
                  <Button
                    icon="check"
                    positive
                    onClick={() => {
                      setOpen(true);
                      setId(jobAdvertisement.id);
                    }}
                  ></Button>
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    trigger={
                      <Button
                        onClick={() => deleteJobAdvertisement(jobAdvertisement)}
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
