import React from 'react'
import { Grid } from '@material-ui/core'
import Product from '../Product/Product'
import useStyles from './styles'


// const products = [
//     {id:1, name:'donut', description:'African Donut', price:'#100', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut9_arzmbn.jpg'},
//     {id:2, name:'donut', description:'Assorted Donut', price:'#150', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut7_lkrxtf.jpg'},
  
//     {id:3, name:'Donut', description:'America Donut', price:'#150', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut6_ymsj2z.jpg'},
//     {id:4, name:'Cupcakes', description:'Chocolate cupcake', price:'#350', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake10_l3fzyq.jpg'},
//     {id:5, name:'Cupcakes', description:'Romantic Cupcake', price:'#500', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake9_mhzhng.jpg'},
//     {id:6, name:'Cupcake', description:'Royal Cupcake', price:'#650', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake6_oee3vh.jpg'},
//     {id:7, name:'Cake', description:'Wedding Cake', price:'#10000', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139129/cake11_xp9naz.jpg'},
//     {id:8, name:'Cake', description:'Italian Cake', price:'#5000' , image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139129/cake9_fc8bwr.jpg'},
//     {id:9, name:'Donut', description:'America Donut', price:'#150', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139131/donut6_ymsj2z.jpg'},
//     {id:10, name:'Cake', description:'Beads Cake', price:'#400', image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake1_u2lq79.jpg'},
//     {id:11, name:'Cupcake', description:'Family Cupcake', price:'#250' , image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139130/cupcake5_wgeqy0.jpg'},
//     {id:12, name:'Cupcake', description:'Bisucit Cake', price:'#700' , image:'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1614139129/cake8_rfbj66.jpg'},

// ]

const Products = ({products,onAddToCart}) => {

        
    // const isEmpty = !cart.total_items;
const classes = useStyles();


    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
            <Product product={product} onAddToCart={onAddToCart} />


                    </Grid>
            ))}
            </Grid>
        </main>
    )
}

export default Products
