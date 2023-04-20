import React from 'react'
// import { Grid } from '@mui/material';
import "./Footerstyle.css"

function Footer() {
  return (
    <footer id='home-footer'>
    <div className='footer'>
        <hr style={{ marginTop: "5px", width: "95%" }} />
        <div id="main-footer">
        {/* <hr style={{marginRight:"10%", color:"rgb(247, 208, 96)", borderWidth:"5px"}}/>
          <Grid item><p style={{fontSize:"xx-large", paddingBottom:"0.7%", marginBottom:"-0.07%", marginRight:"10%"}}>Shivaramakrishnan</p></Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>All Right Reserved</p> </Grid>
        </Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>Terms of Service</p></Grid>
          <Grid item><p>Privacy</p></Grid>
          <Grid item><p>About</p></Grid>
          <Grid item><p>Developers</p></Grid>
          <Grid item><p>India(English)</p></Grid>
          <Grid item><p>Contact : +91987654321</p></Grid>
        </Grid> */}
                 <div>
                     <h5 style={{ paddingBottom: "10px" }}> PORTFOLIO </h5>
                     <hr style={{ marginTop: "5px"}} />
                     <div>
                         <img
                            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png"
                            alt="phone icon"
                        />
                        <p style={{paddingLeft:"10px"}}>support@abc.com</p>
                    </div>
                    <div>
                        <img
                            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png"
                            alt="phone icon"
                        />
                        <p style={{paddingLeft:"10px"}}>+91987654321</p> 
                    </div>
                </div>
                <div>
                    <h5 >COMPANY</h5>
                    <hr style={{ marginTop: "5px" }} />
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Careers</a>
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <h5>POLICIES</h5>
                    <hr style={{ marginTop: "5px" }} />
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                </div>
    </div>
    </div>
    </footer>
  );
}

export default Footer;
