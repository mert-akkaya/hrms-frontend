import React from "react";
import {Icon,Menu } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
       <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="bullhorn" 
        > 
          <Icon name="bullhorn" />
          Job Advertisement
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Candidate
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Employer
        </Menu.Item>
      </Menu>
    </div> 
  );
}
