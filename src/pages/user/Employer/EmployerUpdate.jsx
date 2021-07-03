import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Label,
  Form,
  Input,
  Message,
  Button,
  Accordion,
  Icon,
} from "semantic-ui-react";
import EmployerService from "../../../services/employerService";
import HrmsLabel from "../../../utilities/customFormControls/HrmsLabel";
import * as Yup from "yup";
import EmployerContentService from "../../../services/employerContentService";

export default function EmployerUpdate() {
  const [employer, setEmployer] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isConfirmed, setİsConfirmed] = useState(true);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(2).then((result) => {
      setEmployer(result.data.data);
    });

    let employerContentService = new EmployerContentService();
    employerContentService.getByStatusFalse(2).then((result)=> {
      if (result.data.data!==null){setİsConfirmed(false)}
      else{setİsConfirmed(true)};
     })
  }, []);

  const formik = useFormik({
    initialValues: {
      id: employer.id,
      email: employer.email,
      password: employer.password,
      companyName: employer.companyName,
      webAddress: employer.webAddress,
      phoneNumber: employer.phoneNumber,
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is not null"),
      companyName: Yup.string().required("Company name is not null"),
      webAddress: Yup.string().required("Web address is not null"),
      phoneNumber: Yup.number().required("Phone number is not null"),
    }),
    onSubmit: (values) => {
      let contentModel ={
        employerId:values.id,
        content:{
          id:values.id,
          companyName:values.companyName,
          email:values.email,
          password:values.password,
          phoneNumber:values.phoneNumber,
          webAddress:values.webAddress,
        }
      }
      let employerContentService = new EmployerContentService();
      employerContentService.add(contentModel).then((result)=>(window.location.reload()));
      // let employersService = new EmployerService();
      // employersService.update(values).then((result) => {
      //   window.location.reload();
      // });
    },
    enableReinitialize: true,
  });

  return (
    <div>
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={(e, props) => {
            handleClick(e, props);
          }}
        >
          <Icon name="dropdown" />
          Employer Informations
        </Accordion.Title>
        {isConfirmed? "" :<Label color="red" ribbon="right" size="large" >Onay bekleniyor</Label>}
        <Accordion.Content active={activeIndex === 0}>
            <Form 
              style={{
                marginLeft: "15px",
                marginRight: "15px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
              
            >
              <HrmsLabel name="Company Name" /> <br />
              <Input 
                fluid
                name="companyName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.companyName}
              />
              {formik.errors.companyName && formik.touched.companyName ? (
                <Message pointing color="red">
                  {formik.errors.companyName}
                </Message>
              ) : null}
              <br />
              <HrmsLabel name="Email" /> <br />
              <Input
                fluid
                name="email"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <Message pointing color="red">
                  {formik.errors.email}
                </Message>
              ) : null}
              <br />
              <HrmsLabel name="Web Address" /> <br />
              <Input
                fluid
                name="webAddress"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.webAddress}
              />
              {formik.errors.webAddress && formik.touched.webAddress ? (
                <Message pointing color="red">
                  {formik.errors.webAddress}
                </Message>
              ) : null}
              <br />
              <HrmsLabel name="Phone Number" /> <br />
              <Input
                fluid
                name="phoneNumber"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <Message pointing color="red">
                  {formik.errors.phoneNumber}
                </Message>
              ) : null}
              <br />
              {isConfirmed?<Button positive onClick={formik.handleSubmit} type="submit">
                Save
              </Button>:<Button positive disabled type="submit">
                Save
              </Button>}
            </Form>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          Change Password
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
