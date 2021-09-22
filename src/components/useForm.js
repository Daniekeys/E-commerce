import React,{useState} from 'react'
import {  makeStyles } from '@material-ui/core';
export  const useForm = (initialFValues,validateOnChange=false, validate) => {

 const [values, setValues] = useState(initialFValues);

 const [errors,setErrors] = useState({})

 const resetForm = () => {
    setValues(initialFValues);
    setErrors({})
    }

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setValues({
   ...values,
   [name]: value
  })
 }
 return {
  values,
  setValues,
  handleInputChange,
  errors,
  setErrors,
  resetForm
 }
}



const useStyles = makeStyles(theme =>  ({
root: {
'& .MuiFormControl-root' :
{
width:'80%',
margin: theme.spacing(1),

}

}

}))

export  function Form(props) {
 const classes = useStyles();
 const {children, ...other } = props;
 return (
  <form className={classes.root} autoComplete="off" {...other}>
   {props.children}
  </form>
 )
}

