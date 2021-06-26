import { useFormik } from "formik";
import React, { useState } from "react";
import { Label, Button, Form, TextArea, Modal, Input } from "semantic-ui-react";
import * as Yup from "yup";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";

export default function CoverLetterUpdateModal({ curriculumVitae, trigger }) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      coverLetter: curriculumVitae.coverLetter,
    },
    validationSchema: Yup.object({
      coverLetter: Yup.string(),
    }),
    onSubmit: (values) => {
      curriculumVitae.coverLetter = values.coverLetter;
      let curriculumVitaeService = new CurriculumVitaeService();
      curriculumVitaeService
        .update(curriculumVitae)
        .then(window.location.reload());
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
      <Modal.Header>Update Cover Letter</Modal.Header>
      <Modal.Content>
        <Form>
          <Modal.Description>
            <HrmsLabel name="Cover Letter" /> <br />
            <TextArea
              name="coverLetter"
              placeholder="Tell us more"
              value={formik.values.coverLetter}
              onChange={(e) => {
                formik.handleChange(e);
              }}
            />
            {formik.errors.coverLetter && formik.touched.coverLetter ? (
              <Label pointing color="red">
                {formik.errors.coverLetter}
              </Label>
            ) : null}
            <br />
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
