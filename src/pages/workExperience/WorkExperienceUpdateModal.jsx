import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Input, Modal, Form, Label } from "semantic-ui-react";
import * as Yup from "yup";
import WorkExperienceService from "../../services/workExperienceService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";

export default function WorkExperienceUpdateModal({ workExperience,curriculumVitae, trigger }) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      workplaceName: workExperience.workplaceName,
      position: workExperience.position,
      startDate: workExperience.startDate,
      finishDate: workExperience.finishDate,
    },
    validationSchema: Yup.object({
      workplaceName: Yup.string().required("Workplace name is not null"),
      position: Yup.string().required("Position name is not null"),
      startDate: Yup.date().required("Start date is not null"),
      finishDate: Yup.date(),
    }),
    onSubmit: (values) => {
      let workExperienceModel = {
          curriculumVitae :{
              id:curriculumVitae.id
          },
          id:workExperience.id,
          workplaceName:values.workplaceName,
          position:values.position,
          startDate:values.startDate,
          finishDate:values.finishDate
      }

      let workExperienceService = new WorkExperienceService();
      workExperienceService.update(workExperienceModel).then((result)=>{window.location.reload()})
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
      <Modal.Header>Update Work Experience Informations</Modal.Header>
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
            <HrmsLabel name="Workplace Name" /> <br />
            <Input
              fluid
              name="workplaceName"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.workplaceName}
            />
            {formik.errors.workplaceName && formik.touched.workplaceName ? (
              <Label pointing color="red">
                {formik.errors.workplaceName}
              </Label>
            ) : null}
            <br />
            <HrmsLabel name="Position" /> <br />
            <Input
              fluid
              name="position"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.position}
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
            />
            <br />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button positive onClick={formik.handleSubmit} type="submit">
              Update
            </Button>
          </Modal.Description>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
