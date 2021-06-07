import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

export default function JobPositionList() {
    return (
        <div>
            <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>(jobName)</Card.Header>
        {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
        <Card.Description>
         (description)  
        </Card.Description> 
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
        </div>
    )
}
