import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../../../services/jobAdvertisementService";
import { Dropdown, Form,Message,Select} from "semantic-ui-react";
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

  const formik = useFormik({
    initialValues: {
      description: "",
      countOfOpenPosition: "",
      applicationDeadline: "",
      minSalary: "",
      maxSalary: "",
      employerId:"",
      cityId: "",
      jobTitleId:"",
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
      let jobAdvertisementModel = {
        jobTitle:{
          id: values.jobTitleId
        },
        employer:{
          id: 2
        },
        city:{
          id: values.cityId
        },
        description : values.description,
        countOfOpenPosition : values.countOfOpenPosition,
        applicationDeadline : values.applicationDeadline,
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
      }

      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService.addJobAdvertisement(jobAdvertisementModel).then((result)=>console.log(result));
      alert("Success")
    },
  });

   const handleChangeSemantic= (field,value)=>{
     formik.setFieldValue(field,value);
   }

   const jobTitleOptions = jobTitles.map((jobTitle,index)=>({
     key:index,
     text:jobTitle.title,
     value:jobTitle.id
   }))

   const citiesOptions = cities.map((city,index)=>({
     key:index,
     text:city.name,
     value:city.id
   }))
 
  return (
    <div>
      <Form>
     
      <Form.Group widths={2}>
          <Form.Dropdown required label="Job Positions" placeholder="Select Job" selection search value={formik.values.jobTitleId.id} options={jobTitleOptions} onChange={(event,data)=>{
            handleChangeSemantic("jobTitleId",data.value)
          }}/>
          {formik.errors.jobTitleId && formik.touched.jobTitleId ? (
                    <Message color="red">{formik.errors.jobTitleId}</Message>
              ) : null}
          <Form.Dropdown required label="Cities" placeholder="Select City" selection search value={formik.values.cityId} options={citiesOptions} onChange={(event,data)=>{
            handleChangeSemantic("cityId",data.value)
          }}/>
          {formik.errors.cityId && formik.touched.cityId ? (
                    <Message color="red">{formik.errors.cityId}</Message>
              ) : null}
        </Form.Group>
      <Form.Group widths={3}>
        <Form.Input  label=" Minimum Salary" name="minSalary" placeholder='Minimum Salary' value={formik.values.minSalary} onChange={formik.handleChange} />
       {
       formik.errors.minSalary && formik.touched.minSalary ?(
            <Message color="red">{formik.errors.minSalary}</Message> 
       ):null
       
       }
        <Form.Input  label=" Maximum Salary"  name="maxSalary" placeholder='Maximum Salary' value={formik.values.maxSalary} onChange={formik.handleChange} />
       {
       formik.errors.maxSalary && formik.touched.maxSalary ?(
           <Message color="red">{formik.errors.maxSalary}</Message>
       ):null
       
       }
       <Form.Input required label="Open position count" name="countOfOpenPosition" placeholder="Open position count" value={formik.values.countOfOpenPosition} onChange={formik.handleChange}/>
       {formik.errors.countOfOpenPosition && formik.touched.countOfOpenPosition ? (
                    <Message color="red">{formik.errors.countOfOpenPosition}</Message>
              ) : null}
        </Form.Group>
        <Form.Input required width={6}  label="Application Deadline" name="applicationDeadline" placeholder="Application deadline" value={formik.values.applicationDeadline} onChange={formik.handleChange} />
        {formik.errors.applicationDeadline && formik.touched.applicationDeadline ? (
                    <Message color="red">{formik.errors.applicationDeadline}</Message>
              ) : null}
        <Form.Group inline>
          
        </Form.Group>
        <Form.TextArea label='Description' required name="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange}/>
          {formik.errors.description && formik.touched.description ? (
                    <Message color="red">{formik.errors.description}</Message>
              ) : null}
        <Form.Button onClick={formik.handleSubmit}  type="submit" positive>Submit</Form.Button>
      
      </Form>
    </div>

  );
}
