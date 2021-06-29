import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import FavoriteService from "../../../services/favoriteService";
import { Button, Card, Grid, Rating, Label } from "semantic-ui-react";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});
  const [favorite, setFavorite] = useState({});
  const [isFavorite, setİsFavorite] = useState(false);

  const favoriteService = new FavoriteService();
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setJobAdvertisement(result.data.data));
    favoriteService
      .getByCandidateAndJobAdvertismenetId(1, id)
      .then((result) => {
        setFavorite(result.data.data);
        if (result.data.data !== null) {
          setİsFavorite(true);
        }
      });
  }, []);

  const addToFavorites = (jobAdvertisementId) => {
    let favoriteModel = {
      candidate: {
        id: 1,
      },
      jobAdvertisement: {
        id: jobAdvertisementId,
      },
    };
    if (isFavorite) {
      favoriteService.delete(favorite);
      setİsFavorite(false)
    } else {
      favoriteService.add(favoriteModel);
      setİsFavorite(true)
    }
  };

  return (
    <div>
      <h2>{jobAdvertisement.jobTitle?.title}</h2>
      <span>{jobAdvertisement.employer?.companyName}</span>
      <br />
      <span>Turkey</span>
      <Label
      color="red"
        icon={isFavorite? "heart" : "heart outline"}
        ribbon="right"
        size="huge"
        onClick={() => {
          addToFavorites(jobAdvertisement.id);
        }}
      >
      </Label>
      <br />
      <br />
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Card.Description style={{ fontSize: "15px" }}>
                    <strong>Requirements : </strong>
                    {jobAdvertisement.description}
                    <br />
                    <strong>Open position count : </strong>
                    {jobAdvertisement.countOfOpenPosition}
                    <br />
                    <strong>Min Salary : </strong> {jobAdvertisement.minSalary}
                    $ <br />
                    <strong>Max Salary : </strong> {jobAdvertisement.maxSalary}
                    $ <br />
                    <strong>City : </strong> {jobAdvertisement.city?.name}
                    <br />
                    <strong>Employment type : </strong>{" "}
                    {jobAdvertisement.employmentType?.name}
                    <br />
                    <strong>Work type : </strong>
                    {jobAdvertisement.workType?.name}
                    <br />
                    <strong>Application Deadline :</strong>
                    {jobAdvertisement.applicationDeadline}
                    <br />
                    <Button positive style={{ float: "right" }}>
                      Apply
                    </Button>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={5}>
            <Card.Group>
              <Card fluid>
                <Card.Header textAlign="center" style={{ fontSize: "20px" }}>
                  <br />
                  <strong>{jobAdvertisement.employer?.companyName}</strong>
                </Card.Header>
                <br />
                <Card.Description>
                  <strong style={{ marginLeft: "5px" }}>Web Address :</strong>{" "}
                  {jobAdvertisement.employer?.webAddress}
                  <br />
                  <strong style={{ marginLeft: "5px" }}>Email :</strong>{" "}
                  {jobAdvertisement.employer?.email}
                  <br />
                  <strong style={{ marginLeft: "5px" }}>
                    Phone Number :
                  </strong>{" "}
                  {jobAdvertisement.employer?.phoneNumber}
                  <br />
                  <br />
                </Card.Description>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
