import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Input, Modal, Form, Label } from "semantic-ui-react";
import * as Yup from "yup";
import ForeignLanguageService from "../../services/foreignLanguageService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";

export default function ForeignLanguageUpdateModal({foreignLanguage,curriculumVitae,trigger}) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      languageName: foreignLanguage.language?.name,
      level: foreignLanguage.level,
    },
    validationSchema: Yup.object({
      languageName: Yup.string().required("Language name is not null"),
      level: Yup.string().required("Level is not null"),
    }),
    onSubmit: (values) => {
        let foreignLanguageModel = {
            curriculumVitae:{
                id:curriculumVitae.id
            },
            id:foreignLanguage.id,
            language:{
                id:foreignLanguage.language.id,
                name:values.languageName
            },
            level:values.level
        }
        let foreignLanguageService = new ForeignLanguageService();
        foreignLanguageService.update(foreignLanguageModel).then((result)=>{window.location.reload()})
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
    <Modal.Header>Language Informations</Modal.Header>
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
          <HrmsLabel name="Language" /> <br />
          <Input
            fluid
            name="languageName"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.languageName}
          />
          {formik.errors.languageName && formik.touched.languageName ? (
            <Label pointing color="red">
              {formik.errors.languageName}
            </Label>
          ) : null}
          <br />
          <HrmsLabel name="Level" /> <br />
          <Input
            fluid
            name="level"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.level}
          />{" "}
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
