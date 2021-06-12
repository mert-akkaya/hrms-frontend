import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import { Dropdown, Form,Select} from "semantic-ui-react";
import JobPositionService from "../../../services/jobPositionService";
import CityService from "../../../services/cityService";

export default function JobAdvertisementAdd() {
  const [jobTitles, setJobTitles] = useState([]);
  const [cities, setCities] = useState([])

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPositions().then((result) => setJobTitles(result.data.data));
    let cityService = new CityService()
    cityService.getCities().then((result) => setCities(result.data.data)); 
  },[]);

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      description: "",
      countOfOpenPosition: "",
      applicationDeadline: "",
      minSalary: "",
      maxSalary: "",
      employerId: "",
      cityId: "",
      jobTitleId: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Description is not null"),
      countOfOpenPosition: Yup.number().required("Open position is not null"),
      applicationDeadline: Yup.date().required(   "Application deadline is not null" ),
      minSalary: Yup.number(),
      maxSalary: Yup.number(),
      employerId: Yup.number(),
      cityId: Yup.number().required("City is not null"),
      jobTitleId: Yup.string().required("Job position is not null"),
    }),
    onSubmit: (values) => {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService.addJobAdvertisement(values);
    },
  });

   const jobTitleDropdown=jobTitles.map((jobTitle)=>({
     value : jobTitle.id,
     text : jobTitle.title,
  }))
  const cityDropdown=cities.map((city)=>({
    value : city.id,
    text : city.name,
 }))
 
  return (
    <div>
      <Form onSubmit={handleSubmit}>
            {/* <Dropdown value={values.jobTitleId} placeholder="Select Position" selection options={jobTitleDropdown}/> */}
            {/* <Select placeholder='Select Position' options={jobTitleDropdown} value={values.minSalary} /> */}

          
        <p>Job : {values.jobTitleId}</p>
     
            <Dropdown value={values.cityId} placeholder="Select City" selection options={cityDropdown}/>

        <p>Job : {values.cityId}</p>
      
        <label>Minimum Salary</label>
               <input name="minSalary" placeholder='Minimum Salary' value={values.minSalary} onChange={handleChange} />
                 {
                     errors.minSalary && touched.minSalary &&
                     <div>{errors.minSalary}</div>
                }
    
        <p>Job : {values.minSalary}</p>
 
          <label>Description</label>
          <input
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
          />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}
  
      </Form>
    </div>
  );
}
