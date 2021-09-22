import React from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroupCustom(props) {
 const {name,label,value,onChange,items} = props;

 return (
  <FormControl>
   <FormLabel >{label}</FormLabel>
   <RadioGroup row

    value={value}
    onChange={onChange}
    name={name}

   >
   
  {
   items.map(
    (item, index) => (
     <FormControlLabel value={item.id} key={index}
     control={<Radio />} label={item.title}
     />
    )
   )
  }


   </RadioGroup>
  </FormControl>
 )
}
