import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Label,Dropdown, Button,Segment } from "semantic-ui-react";
import CityService from "../services/cityService";
import EmploymentTypeService from "../services/employmentTypeService";
import WorkTypeService from "../services/workTypeService";

export default function Sidebar() {
  const [cities, setCities] = useState([])
  const [employmentTypes, setEmploymentTypes] = useState([])

  const [filteredCity, setFilteredCity] = useState(null)
  const [filteredEmploymentType, setFilteredEmploymentType] = useState(null)

  useEffect(()=>{
    let cityService = new CityService();
    cityService.getCities().then((result)=>{setCities(result.data.data)})

   let employmentTypeService = new EmploymentTypeService();
   employmentTypeService.getEmploymentTypes().then((result)=>{setEmploymentTypes(result.data.data)})
  },[])

  const cityOptions = cities.map((city,index)=>({
    key:index,
    text:city.name,
    value:city.id
  }))

  const employmentTypeOptions = employmentTypes.map((employmentType,index)=>({
    key:index,
    text:employmentType.name,
    value:employmentType.id
  }))

 const handleChangeCity=(e,value)=>{
      setFilteredCity(value)   

  }

  const handleChangeEmploymentType= (e,value)=>{
    setFilteredEmploymentType(value)
  }

  

  return (
    <div>
      
      <Segment>
        <Label ribbon="left" size="large">Location</Label> <br/><br/>
        <Dropdown fluid search selection  placeholder="Select location"
        options={cityOptions} onChange={(e,data)=>{
          handleChangeCity(e,data.value)
        }}/>
      </Segment>
      <Segment>
        <Label ribbon="left" size="large">Employment Type</Label> <br/><br/>
        <Dropdown fluid search selection  placeholder="Employment Type"
        options={employmentTypeOptions} onChange={(e,data)=>{
          handleChangeEmploymentType(e,data.value)
        }} />
      </Segment>
     <Button positive fluid><Link style={{color:"white"}} to={`/jobAdvertisement/${filteredCity}/${filteredEmploymentType}`}>Search</Link></Button> 
    </div>
  );
}
