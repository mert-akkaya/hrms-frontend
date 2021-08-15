import React from 'react'
import { Route } from 'react-router-dom'
import {Grid } from 'semantic-ui-react'
import ProfileActiveAdvertisements from './ProfileActiveAdvertisements'
import ProfileInformations from './ProfileInformations'
import ProfilePendingAdvertisements from './ProfilePendingAdvertisements'
import ProfileSideBar from './ProfileSideBar'


export default function ProfileEmployer() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <ProfileSideBar/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route exact path="/profile/employer" component={ProfileInformations} />
                        <Route exact path="/profile/employer/active-advertisements" component={ProfileActiveAdvertisements} />
                        <Route exact path="/profile/employer/pending-advertisements" component={ProfilePendingAdvertisements} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

