import React from 'react'
import {Grid } from 'semantic-ui-react'
import ProfileSideBar from './ProfileSideBar'

export default function Profile() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <ProfileSideBar/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
