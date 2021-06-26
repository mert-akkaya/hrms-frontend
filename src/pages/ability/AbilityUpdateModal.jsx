import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Input, Modal, Form,Label } from "semantic-ui-react";
import *as Yup from 'yup'
import AbilityService from '../../services/abilityService';
import HrmsLabel from '../../utilities/customFormControls/HrmsLabel';

export default function AbilityUpdateModal({ability,curriculumVitae,trigger}) {
    const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      ability: ability.ability,
    },
    validationSchema: Yup.object({
      ability: Yup.string()
    }),
    onSubmit: (values) => {
        let abilityModel = {
            curriculumVitae:{
                id:curriculumVitae.id
            },
            id:ability.id,
            ability:values.ability,
        }
       let abilityService = new AbilityService();
       abilityService.update(abilityModel).then((result)=>{window.location.reload()})
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
      <Modal.Header>Update Ability Informations</Modal.Header>
      <Modal.Content>
        <Form
          
        >
          <Modal.Description>
            <HrmsLabel name="Ability Name" /> <br />
            <Input
              fluid
              name="ability"
              onChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.ability}
            />
            {formik.errors.ability && formik.touched.ability ? (
              <Label pointing color="red">
                {formik.errors.ability}
              </Label>
            ) : null}
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
    )
}
