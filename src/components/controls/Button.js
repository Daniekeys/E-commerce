import React from 'react'
import {Button as MuiButton  } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
 btnDefault:{
  color:"white",
  backgroundColor:'#333996',
  marginRight:'1rem',
  textTransform:'none',
  '&.MuiButton-root': {
   color:'#ffffff',
   backgroundColor:'#333996',

  }
 },

 label:{
  textTransform:'none'
 }
}))


export default function Button(props) {
 
 const classes = useStyles();

 const{variant, size, color, onClick, text, type, ...other} = props;

 return (
  <MuiButton
  variant={variant || "contained"}
  size={size}
  color={color}

  className={color?'': `${classes.btnDefault}`}
  
  onClick={onClick}
  type={type}
  >
   {text}
  </MuiButton>
 )
}
