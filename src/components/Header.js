import React from 'react'
import {makeStyles,AppBar,Toolbar,Grid,IconButton,Badge,InputBase} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
   root:{
      backgroundColor:'#fff',
      transform:'translateZ(0)'

   },
gridItem:{
 border:'1px solid #fff',
},
gridItem2: {
 border:'1px solid black',
},
searchInput:{
opacity:'0.6',
padding:'0px 8px',
fontSize:'0.8rem',
'&:hover' : {
   backgroundColor:'#f2f2f2'
},
'& .MuiSvgIcon-root':{
   marginRight:theme.spacing(1),
   
}

},


}))
const Header = () => {
 const classes = useStyles();

 return (
  <>
   <AppBar position="static" className={classes.root}>
   <Toolbar>
    <Grid container align-items="center">
       <Grid item >
   <InputBase className={classes.searchInput}
   placeholder="Search Answers"
   startAdornment={<SearchIcon fontSize="small" />}
   />
   </Grid>
   <Grid item sm >
   </Grid>
   <Grid item >
   <IconButton >

   <Badge badgeContent={4} color="secondary">
    <NotificationsNoneIcon fontSize="small" />
   </Badge>
   </IconButton >
<IconButton>
   <Badge badgeContent={3} color="primary">
    <ChatBubbleOutlineIcon fontSize="small" />
   </Badge>
   </IconButton>


    <IconButton>
   <PowerSettingsNewIcon fontSize="small" />

    </IconButton>
   </Grid>
   

    </Grid>
   </Toolbar>

   </AppBar>
  </>
 )
}

export default Header
