import React from 'react'
import useStyles from './styles'
import LandingNav from './LandingNav';
import {Typography} from '@material-ui/core'
import CarouselComponent from '../../components/Carousel/Carousel';




const Home = () => {
    const classes = useStyles();

    return (
        <>
            <LandingNav />
                <div className={classes.carousel}>

            <CarouselComponent  />
                </div>


            {/* <section id="about" className={classes.about}>
            <Typography variant="h1">
            Hello am the about
            </Typography>
            </section>
            <section id="contact" className={classes.contact}>
            <Typography variant="h1">
            Hello am the Contact
            </Typography>
            </section> */}
        </>
    )
}

export default Home
