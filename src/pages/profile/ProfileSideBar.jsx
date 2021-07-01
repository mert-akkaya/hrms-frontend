import React from "react";
import {  Icon, Menu, Sidebar } from "semantic-ui-react";

export default function ProfileSideBar() {
  return (
    <div>
        <Sidebar
          visible
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Profile
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

    </div>
  );
}
