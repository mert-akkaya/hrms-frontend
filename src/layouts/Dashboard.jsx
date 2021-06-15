import React from "react";
import { Grid } from "semantic-ui-react";
import JobPositionList from "../pages/job/JobPosition/JobPositionList";
import JobAdvertisementList from "../pages/job/JobAdvertisement/JobAdvertisementList";
import Sidebar from "./Sidebar";
import { Route } from "react-router";
import CandidateList from "../pages/user/Candidate/CandidateList";
import EmployerList from "../pages/user/Employer/EmployerList";
import JobAdvertisementDetail from "../pages/job/JobAdvertisement/JobAdvertisementDetail";
import JobAdvertisementAdd from "../pages/job/JobAdvertisement/JobAdvertisementAdd";
import jobAdvertisementConfirm from "../pages/job/JobAdvertisement/JobAdvertisementConfirm";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/jobAdvertisements" component={JobAdvertisementList}/>
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/employers" component={EmployerList}/>
            <Route exact path="/jobPositions" component={JobPositionList}/>
            <Route exact path="/jobAdvertisementDetail/:id" component={JobAdvertisementDetail}/>
            <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd}/>
            <Route exact path="/jobAdvertisementConfirm" component={jobAdvertisementConfirm}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
