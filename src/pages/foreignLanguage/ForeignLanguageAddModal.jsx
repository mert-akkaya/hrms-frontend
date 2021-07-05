import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Input, Modal, Form, Label,Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import ForeignLanguageService from "../../services/foreignLanguageService";
import LanguageService from "../../services/languageService";
import HrmsLabel from "../../utilities/customFormControls/HrmsLabel";

export default function ForeignLanguageAddModal({curriculumVitae,trigger}) {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(()=>{
    let languageService = new LanguageService();
    languageService.getAll().then((result)=>{
        setLanguages(result.data.data)
    });
    
  },[])


  const languageoptions = languages.map((language,index)=>({
    key:index,
    text:language.name,
    value:language.id
  }))

  const handleChangeSemantic= (field,value)=>{
    formik.setFieldValue(field,value);
  }

  const formik = useFormik({
    initialValues: {
      languageId: "",
      level: "",
    },
    validationSchema: Yup.object({
      level: Yup.string().required("Level is not null"),
    }),
    onSubmit: (values) => {
        let foreignLanguageModel = {
            curriculumVitae:{
                id:curriculumVitae.id
            },
            language:{
              id:values.languageId,
          },
            level:values.level
        }
        let foreignLanguageService = new ForeignLanguageService();
        foreignLanguageService.add(foreignLanguageModel).then((result)=>{window.location.reload()})
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
          <Dropdown fluid search selection  placeholder="Languages"
           options={languageoptions} onChange={(e,data)=>{
              handleChangeSemantic("languageId",data.value)
              console.log(data.value);
           }} value={formik.values.languageId} />
          
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
            Add
          </Button>
        </Modal.Description>
      </Form>
    </Modal.Content>
  </Modal>
  );
}
