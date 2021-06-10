import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button onClick={signIn} primary>Login</Button>
          <Button.Or />
          <Button positive style={{ marginLeft: "0.5em" }}>
            Register
          </Button>
        </Button.Group>
      </Menu.Item>
    </div>
  );
}
