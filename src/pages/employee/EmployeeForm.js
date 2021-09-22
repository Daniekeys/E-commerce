import React from 'react'
import { Grid,makeStyles,  } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';
// import Input from '../../components/controls/Input';
import Controls from '../../components/controls/Controls'
import RadioGroupCustom from '../../components/controls/RadioGroupCustom';
import * as employeeService from '../../services/employeeService' 


const useStyles = makeStyles(theme =>  ({
root: {
'& .MuiFormControl-root' :
{
width:'80%',
margin: theme.spacing(1),

}

}

}))

const genderItems = [
 {id:'male', title:'Male'},
 {id:'Female', title:'Female'},
 {id:'Other', title:'Other'},
]

const initialFValues = {
 id:0,
 fullName:'',
 email:'',
 mobile:'',
 city:'',
 gender: 'male',
 departmentId: '',
 hireDate: new Date(),
 isPermanent:false,
}


const EmployeeForm = () => {
 const classes = useStyles();

 const {values, handleInputChange,errors,setErrors,resetForm} = useForm(initialFValues);
 const validate = () => {
   let temp = {};
   temp.fullName = values.fullName? "" :
   "This field is required";
   temp.email = (/$^|.+@.+..+/).test(values.email)? "" :
   "Email is not valid";
   temp.mobile = values.mobile.length >  9? "" :
   "Minimum 10 numbers is required";
   temp.departmentId = values.departmentId.length != 0 ? "" :
   "This field is required";
   temp.gender = values.gender? '' : "Kindly select your gender";

   setErrors({
      ...temp
   })
   return Object.values(temp).every(x => x == "")

 }
 const handleSubmit = (e) => {
   e.preventDefault()
    if(validate())


  window.alert('testing button')
 }






 return (
  <>
   {/* <form className={classes.root} > */}
   <Form onSubmit={handleSubmit} >
    <Grid container>
     <Grid item xs={6}>
    <Controls.Input label="Full name" value={values.fullName} 
    onChange={handleInputChange}
    name="fullName"
    error={errors.fullName}
    />
      < Controls.Input
      variant="outlined"
      label="Email"
      value={values.email}
      name="email"
      onChange={handleInputChange}
      error={errors.email}
      />
      < Controls.Input
      variant="outlined"
      label="city"
      value={values.city}
      name="city"
      onChange={handleInputChange}
      error={errors.fullName}
      />
      < Controls.Input
      variant="outlined"
      label="mobile"
      value={values.mobile}
      name="mobile"
      onChange={handleInputChange}
      error={errors.mobile}
      />
     </Grid>
     <Grid item xs={6}>
     <RadioGroupCustom 
     name="gender"
     value={values.gender}
     onChange={handleInputChange}
     label="Gender"
     items={genderItems}
     error={errors.gender}

     />
     <Controls.Select
      name="departmentId"
      label="Department"
      value={values.departmentId}
      onChange={handleInputChange}
      options={employeeService.getDepartmentCollection()}
      error={errors.departmentId}

       />
       <Controls.DatePicker
             value={values.hireDate}
             onChange={handleInputChange}
             name="hireDate"
             label="Select Date"
       
       />
       <Controls.Checkbox  
       value={values.isPermanent}
       onChange={handleInputChange}
       name="isPermanent"
       label="Permanent Employee"
       />
       <div>
         <Controls.MuiButton 
         variant="contained"
         color=""
         size="large"
         text="Submit"
         type='submit'
         />
         <Controls.MuiButton 
         variant="contained"
         color="default"
         size="large"
         text="Reset"
         onClick={resetForm}

         />
       </div>
     </Grid>
    </Grid>

   </Form>
  </>
 )
}

export default EmployeeForm
