import React from 'react'
import Sidemenu from './components/Sidemenu';
import {makeStyles,CssBaseline,createMuiTheme, ThemeProvider} from '@material-ui/core'
// import { height } from '@material-ui/system';
import Header from './components/Header'
import Employee from './pages/employee/Employee';


const theme = createMuiTheme({
palette:{
  primary:{
    main:'#333333',
    light:'#3c44b126',
  },
  secondary:{
    main:'#f83245',
    light:'#f8324526'
  },
  background:{
    default:'#f4f5fd',

  }


}
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
    
    height:'100%',


  }
})


const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Sidemenu />
      <div className={classes.appMain}>
      <Header />
        <Employee />
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
