import React from 'react'
import { Checkbox as MuiCheckbox, FormControl, FormControlLabel } from '@material-ui/core';

export default function Checkbox(props) {
 const {onChange, checked,name,label,value} = props;

const convertToDefEventPara = (name,value) => ({
 target: {
  name, value
 }
});

 return (
  <FormControl>
   <FormControlLabel
   control={<MuiCheckbox
    checked={value}
    onChange={(e) => onChange(convertToDefEventPara(name,e.target.checked))}
    color="primary"
    name={name}
   />}
   label={label}
/>

  </FormControl>

 )
}
