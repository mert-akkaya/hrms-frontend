import React from 'react'
import { Label } from 'semantic-ui-react'

export default function HrmsLabel({...props}) {

    return (
      <Label >{props.name}</Label>
    )
}
