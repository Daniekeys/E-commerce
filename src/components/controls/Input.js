import React from 'react'
import {TextField} from '@material-ui/core';


export default function Input(props) {
 const {label,name, onChange,value,error=null} = props;
 return (
  <TextField
   variant="outlined"
   label={label}
   value={value}
   name={name}
   onChange={onChange}
  
   {...(error && {error:true, helperText:error})}
  />
 )
}
