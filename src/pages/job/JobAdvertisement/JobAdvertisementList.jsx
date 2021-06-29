import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Card, Grid, Pagination } from "semantic-ui-react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import SideBar from "../../../layouts/Sidebar";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [currentJob, setCurrentJob] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  let { cityId, employmentTypeId } = useParams();
  const jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    if (cityId && employmentTypeId) {
    } else if (cityId != undefined && employmentTypeId == null) {
      return jobAdvertisementService.getAllByCityId(cityId).then((result) => {
        setJobAdvertisements(result.data.data);
      });
    } else if (employmentTypeId) {
      return jobAdvertisementService
        .getAllByEmploymentTypeId(employmentTypeId)
        .then((result) => {
          setJobAdvertisements(result.data.data);
        });
    } else {
      return jobAdvertisementService
        .getAllByIsActiveTruePageable(page, pageSize)
        .then((result) => {
          setJobAdvertisements(result.data.data);
        });
    }
  }, []);

  function applyFilters(cityId, employmentTypeId) {
    if (cityId && employmentTypeId) {
      jobAdvertisementService
        .getAllByCityAndEmploymentTypeId(
          cityId,
          employmentTypeId,
          page,
          pageSize
        )
        .then((result) => {
          setJobAdvertisements(result.data.data);
          console.log(cityId + " " + employmentTypeId);
        });
    } else if (cityId) {
      jobAdvertisementService
        .getAllByCityId(cityId, page, pageSize)
        .then((result) => {
          setJobAdvertisements(result.data.data);
        });
    } else {
      jobAdvertisementService
        .getAllByEmploymentTypeId(employmentTypeId, page, pageSize)
        .then((result) => {
          setJobAdvertisements(result.data.data);
        });
    }
  }

  let setCurrentJobAdvertisement = (jobAdvertisement) => {
    setCurrentJob(jobAdvertisement);
  };
  let getCurrentJobClass = (jobAdvertisement) => {
    if (jobAdvertisement == currentJob) {
      return "ui link card ";
    } else {
      return "";
    }
  };

  const handleChangePageSize = (value) => {
    setPageSize(value);
    jobAdvertisementService
      .getAllByIsActiveTruePageable(page, value)
      .then((result) => {
        setJobAdvertisements(result.data.data);
      });
  };

  function handleChangePage(page) {
    setPage(page);
    jobAdvertisementService
      .getAllByIsActiveTruePageable(page, pageSize)
      .then((results) => {
        setJobAdvertisements(results.data.data);
      });
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <SideBar
              applyFilters={applyFilters}
              handleChangePageSize={handleChangePageSize}
            />
          </Grid.Column>
          <Grid.Column width={13}>
            {jobAdvertisements.map((jobAdvertisement) => (
              <Card.Group
                onMouseEnter={(e) =>
                  setCurrentJobAdvertisement(jobAdvertisement)
                }
                as={NavLink}
                to={`/jobAdvertisementDetail/${jobAdvertisement.id}`}
                key={jobAdvertisement.id}
              >
                <Card className={getCurrentJobClass(jobAdvertisement)} fluid>
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
                      {jobAdvertisement.description}
                      <p style={{ textAlign: "right" }}>
                        Application deadline :{" "}
                        {jobAdvertisement.applicationDeadline}
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
            <Pagination
              defaultActivePage={page}
              onPageChange={(e, data) => {
                handleChangePage(data.activePage);
              }}
              totalPages={10}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
