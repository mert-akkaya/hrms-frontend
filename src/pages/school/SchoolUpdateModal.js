import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Input, Modal, Form,Label } from "semantic-ui-react";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";
import SchoolService from "../../services/schoolService";

export default function SchoolUpdateModal({school,curriculumVitae,trigger}) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      schoolName: school.name,
      department: school.department,
      startDate: school.startDate,
      finishDate: school.finishDate,
      graduateYear: school.graduateYear,
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required("School name is not null"),
      department: Yup.string().required("Department name is not null"),
      startDate: Yup.date().required("Start date is not null"),
      finishDate: Yup.date(),
      graduateYear: Yup.date(),
    }),
    onSubmit: (values) => {
        let schoolModel = {
            curriculumVitae:{
                id:curriculumVitae.id
            },
            id:school.id,
            name:values.schoolName,
            department:values.department,
            startDate:values.startDate,
            finishDate:values.finishDate,
            graduateYear:values.graduateYear
        }
        let schoolService = new SchoolService();
        schoolService.update(schoolModel).then((result)=>{
            window.location.reload();
        })
    },
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      size="tiny"
    >
      <Modal.Header>Update School Informations</Modal.Header>
      <Modal.Content>
        <Form
          style={{
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <Modal.Description>
            <HrmsLabel name="School Name" /> <br />
            <Input
              fluid
              name="schoolName"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.schoolName}
            />
            {formik.errors.schoolName && formik.touched.schoolName ? (
                    <Label pointing color="red">{formik.errors.schoolName}</Label>
              ) : null}
            <br />
            <HrmsLabel name="Department" /> <br />
            <Input
              fluid
              name="department"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.department}
            />{" "}
            <br />
            <HrmsLabel name="Start Date" /> <br />
            <Input
              fluid
              name="startDate"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.startDate}
            />{" "}
            <br />
            <HrmsLabel name="Finish Date" /> <br />
            <Input
              fluid
              name="finishDate"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.finishDate}
            /><br/>
            <HrmsLabel name="Graduate Year" /> <br />
            <Input
              fluid
              name="graduateYear"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.graduateYear}
            />
            <br />
            <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
            <Button positive onClick={formik.handleSubmit} type="submit">Update</Button>
          </Modal.Description>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
