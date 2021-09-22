import React from 'react'
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EmployeeForm from './EmployeeForm';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
pageContent: {
 margin: theme.spacing(5),
 padding: theme.spacing(3)
}
}))

const Employee = () => {
 const classes = useStyles();

 return (
  <>
   <PageHeader 
   title="New Employee"
   subTitle="Form Design with validation"
    icon={< PeopleOutlineIcon  fontSize="large"/>}
   />
   <Paper className={classes.pageContent}>


   <EmployeeForm />
   </Paper>
  </>
 )
}

export default Employee
