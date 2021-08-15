import React from 'react'
import { Route } from 'react-router-dom'
import {Grid } from 'semantic-ui-react'
import ProfileInformations from './ProfileInformations'
import ProfileSideBar from './ProfileSideBar'
import ProfileResume from './ProfileResume'
import ProfileApplication from './ProfileApplication'
import ProfileFavorite from './ProfileFavorite'

export default function Profile() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <ProfileSideBar/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route exact path="/profile/candidate" component={ProfileInformations}/>
                        <Route exact path="/profile/candidate/resumes" component={ProfileResume} />
                        <Route exact path="/profile/candidate/applications" component={ProfileApplication} />
                        <Route exact path="/profile/candidate/favorites" component={ProfileFavorite} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
