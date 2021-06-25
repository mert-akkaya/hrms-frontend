import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Container, Menu } from "semantic-ui-react";
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

  const [isAuthenticated, setİsAuthenticated] = useState(false)

  function handleSignIn() {
    setİsAuthenticated(true);
  }

  function handleSignOut() {
    setİsAuthenticated(false);
  }
    return (
        <div>
            <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large"/>
            HRMS
          </Menu.Item>
          <Menu.Item as={NavLink} to="/" name="Home" />
          <Menu.Item as={NavLink} to="/jobAdvertisements" name="Job Advert" />
          <Menu.Item name="About us" />
          <Menu.Menu position="right">
            {/* <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}  

            {/* <Menu.Item>
              <Button.Group>
                <Button primary>Sign Up</Button>
                <Button.Or />
                <Button positive>Sign In</Button>
              </Button.Group>
            </Menu.Item> */}
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut  signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
