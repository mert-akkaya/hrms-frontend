import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {Menu} from "semantic-ui-react";

export default function ProfileSideBar() {
  const [activeItem, setActiveItem] = useState("profile")
  const handleItemClick =(e,name)=>{
      setActiveItem(name);
  }
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item
          name='profile' 
          active={activeItem === 'profile'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
          as={NavLink} to="/profile/employer"
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name='resume'
          active={activeItem === 'resume'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
          as={NavLink} to="/profile/employer/active-advertisements"
        >
          Active Advertisements
        </Menu.Item>

        <Menu.Item
          name='application'
          active={activeItem === 'application'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
          as={NavLink} to="/profile/employer/pending-advertisements"
        >
          Pending Advertisements
        </Menu.Item>
      </Menu>
    </div>
  );
}
