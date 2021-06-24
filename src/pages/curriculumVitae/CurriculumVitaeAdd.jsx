import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";

export default function CurriculumVitaeAdd() {
    // devam edilecek 
    const initialValues ={
        
    }
  return (
    <div>
      <Formik 
      initialValues={initialValues}
      onSubmit={(values)=>{console.log(values)}}
      >
        <Form className="ui form">
          <HrmsLabel name="First Name" />
          <HrmsTextInput name="firstName" placeholder="First Name" />
          <HrmsLabel name="Last Name" />
          <HrmsTextInput name="lastName" placeholder="Last Name" />
          <Button type="submit" >add</Button>
        </Form>
      </Formik>
    </div>
  );
}
