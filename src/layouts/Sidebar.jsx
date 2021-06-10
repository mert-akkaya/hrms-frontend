import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item as={NavLink} to="/jobAdvertisements" name="bullhorn">
          <Icon name="bullhorn" />
           Job Advertisement
        </Menu.Item>

        <Menu.Item as={NavLink} to="/candidates" name="user">
          <Icon name="user" />
          Candidate
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employers" name="user">
          <Icon name="user" />
          Employer
        </Menu.Item>
      </Menu>
    </div>
  );
}
