import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import {Link,useLocation} from 'react-router-dom'
const Navbar = ({totalItems}) => {

    const location = useLocation();
 
    const classes = useStyles();
    return (
        <>
         <AppBar position="fixed" className={classes.appbar} color='inherit' >
             <Toolbar>


             <Typography variant='h5' className={classes.title} color='inherit' component={Link} to='/'>
            <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut9_arzmbn.jpg' alt="Commerce.js"
            height='25px' className={classes.image}
            
            />
Lizzie Cakes 
             </Typography>
             <div className={classes.grow} />
            { location.pathname === '/' && (
             <div className={classes.button}>
                 
            <IconButton component={Link} to='/cart'>
                <Badge badgeContent={totalItems} color="secondary" >
                <ShoppingCart />
                </Badge>
            </IconButton>
            
             </div>
            )

            }
             </Toolbar>
             
             </AppBar>   
        </>
    )
}

export default Navbar
