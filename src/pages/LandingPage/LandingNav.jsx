import React from 'react'
import { AppBar, Toolbar,  Typography,Button } from '@material-ui/core';
import useStyles from './styles'
import {Link} from 'react-router-dom'
const LandingNav = () => {
    const classes = useStyles();
    const scroll = (element) => {
        let ele = document.getElementById(element);
        window.scrollTo(ele.offsetLeft, ele.offsetTop);
    }

    return (
        <>
         <AppBar position="fixed" className={classes.appbar} color='inherit'  >
             <Toolbar>


             <Typography variant='h5' className={classes.title} color='inherit' component={Link} to='/'>
            <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut9_arzmbn.jpg' alt="Commerce.js"
            height='25px' className={classes.image}
            
            />
Lizzie Cakes 
             </Typography>
          

             <div >
             <div spacing={2} direction="row" className={classes.grow}>
      <Button variant="text" className={classes.link} onClick={() => scroll('about')}>About us</Button>
      <Button variant="text" className={classes.link} onClick={() => scroll('contact')}>Contact us</Button>
      <Button variant="text" className={classes.link} component={Link} to='/products'>Products</Button>
      
     
    </div>
                 </div>
                <div className={classes.order}>

             <Button component={Link} to='/products'  variant="contained" color="secondary" className={classes.orderBtn} >
             Order Now
             </Button>
                </div>

             
             </Toolbar>
             
             </AppBar>   
        </>
    )
}

export default LandingNav
