import React from "react";
import { Grid } from "semantic-ui-react";
import JobPositionList from "../pages/job/JobPosition/JobPositionList";
import JobAdvertisementList from "../pages/job/JobAdvertisement/JobAdvertisementList";
import Sidebar from "./Sidebar";
import CandidateList from "../pages/user/Candidate/CandidateList";
import EmployerList from "../pages/user/Employer/EmployerList";

export default function Dashboard() {
  return (  
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
              {/* <JobPositionList/> */}
              <JobAdvertisementList/>
              {/* <CandidateList/>
              <EmployerList/> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
