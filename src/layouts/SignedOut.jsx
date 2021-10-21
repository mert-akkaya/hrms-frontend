import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button onClick={signIn} primary>Login</Button>
          
          <Button as={NavLink} to="/register/registerForCandidate" positive style={{ marginLeft: "0.5em" }}>
            Candidate Registration 
          </Button>
          <Button.Or />
          <Button as={NavLink} to="/register/registerForEmployer" positive style={{ marginLeft: "0.5em" }}>
            Employer Registration
          </Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
