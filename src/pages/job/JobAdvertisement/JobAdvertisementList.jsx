import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Grid, Pagination } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import SideBar from "../../../layouts/Sidebar";
import {setPageSizeAction } from "../../../store/actions/pageSizeActions";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [jobAdvertisementsCount, setJobAdvertisementsCount] = useState(0);
  const [currentJob, setCurrentJob] = useState({});
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({})
  const jobAdvertisementService = new JobAdvertisementService();
  const dispatch = useDispatch();
  const {pageSize} = useSelector((state)=> state.pageSize) 
  

  useEffect(() => {
    jobAdvertisementService
        .getAllByIsActiveTrueAndFilter(page,pageSize,filter).then((result)=>{
          setJobAdvertisements(result.data.data);
          setJobAdvertisementsCount(parseInt(result.data.message));
        })
    },[filter,pageSize,page]);

    
  function applyFilters(filterOption) {
    if(filterOption.cityId.length === 0){
      filterOption.cityId = null;
    }
    if(filterOption.employmentTypeId.length === 0){
      filterOption.employmentTypeId = null;
    }
    let filterModel ={
      cityId:[
        filterOption.cityId
      ],
      employmentTypeId:[
        filterOption.employmentTypeId
      ]
    }
    setFilter(filterModel);
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
    setPage(1); 
    dispatch(setPageSizeAction(value));
  };

  const handleChangePage= (e,{activePage}) => {
    setPage(activePage);
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
              firstItem={null}
              lastItem={null}
              activePage={page}
              onPageChange={handleChangePage}
              totalPages={Math.ceil(jobAdvertisementsCount/pageSize)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
