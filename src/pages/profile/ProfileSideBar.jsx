import React from "react";
import { useState } from "react";
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
        >
          Profile
        </Menu.Item>

        <Menu.Item
          name='resume'
          active={activeItem === 'resume'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
        >
          Resumes
        </Menu.Item>

        <Menu.Item
          name='application'
          active={activeItem === 'application'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
        >
          Aplications
        </Menu.Item>
        <Menu.Item
          name='favorite'
          active={activeItem === 'favorite'}
          onClick={(e,data)=>{handleItemClick(e,data.name)}}
        >
          Favorites
        </Menu.Item>
      </Menu>
    </div>
  );
}
