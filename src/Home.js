import React from 'react';
import "./Homestyle.css"
import { Grid, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Home() {
    const Insta = () => {
        const url = 'https://www.instagram.com/im_biju07/';
        window.open(url, '_blank');
      };
    const LinkedIn = () => {
        const url = 'https://www.linkedin.com/in/shivaramakrishnan-r-012413232/';
        window.open(url, '_blank');
      };
    const Twitter = () => {
        const url = 'https://twitter.com/Biju0017';
        window.open(url, '_blank');
    };
    const Email = () => {
        const url = 'https://www.gmail.com/';
        window.open(url, '_blank');
      };
      const containerVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: 'easeInOut',
          },
        },
      };
    
      const textVariants = {
        hidden: {
          x: '-100vw',
        },
        visible: {
          x: 0,
          transition: {
            delay: 0.5,
            duration: 1.5,
            ease: 'easeInOut',
          },
        },
      };
    
  return (
    <div className='homediv'>
        <div className='hometitle1'>
        <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
            <Grid container spacing={100}>
                <Grid item><motion.h1 variants={textVariants}><h1 className='heading'> Shivaramakrishnan R .</h1></motion.h1><hr className='hr'/>
                <Grid item lg={5} className='icons'><InstagramIcon onClick={Insta}/> <LinkedInIcon onClick={LinkedIn}/> <TwitterIcon onClick={Twitter}/> <EmailIcon onClick={Email}/></Grid>
                <h1 className='subheading'>Student<br/>SKCET</h1>
                </Grid>
            </Grid>
        </motion.div>
        </div>
      <div className='splitScreen'>
        <div className='subcontent' style={{marginLeft:"8%"}}>
            {/* <center> */}
            {/* <Grid container >
                <Grid item lg={3.5} spacing={5} className='grid1'>
                  <Grid item>Skills</Grid>
                    <Grid className='skill' lg={10}>C++</Grid>
                    <Grid className='skill' lg={10}>HTML, CSS and JS</Grid>
                    <Grid className='skill' lg={10}>React</Grid>
                    <Grid className='skill' lg={10}>Java</Grid>
                    <Grid className='skill' lg={10}>MySQL</Grid>
                </Grid>
            </Grid> */}
      <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={10}>
        <Paper style={{ backgroundColor:"rgb(108, 117, 125)", padding: '20px', marginBottom: '20px', borderRadius:"100px", color:"aliceblue" }}>Skills</Paper>
        <Grid container justifyContent="center" spacing={2} className='grid1'>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>C++</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>HTML, CSS, JavaScript</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>React</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>Java</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>MySQL</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
        </div>
        <div style={{width:"25%"}}>

        </div>
        <div className='subcontent'>
        <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={10}>
        <Paper style={{ backgroundColor:"rgb(108, 117, 125)", padding: '20px', marginBottom: '20px', borderRadius:"100px", color:"aliceblue" }}>Hobbies and Interests</Paper>
        <Grid container justifyContent="center" spacing={2} className='grid1'>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>Photography</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>Cycling</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>Coding</Paper>
          </Grid>
          {/* <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>Java</Paper>
          </Grid>
          <Grid item xs={12} sm={4} lg={8}>
            <Paper style={{backgroundColor:"rgb(108, 117, 125)", borderRadius:"100px", color:"aliceblue"}} className='skill'>MySQL</Paper>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
        </div>
        </div>
        {/* <div className="topPane">
          topPane
        </div>
        <div className="bottomPane">
          bottomPane
        </div> */}
        <Footer/>
    </div>
  )
}

export default Home