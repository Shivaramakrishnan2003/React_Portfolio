import React from 'react'
import "./Resumestyle.css"
import Carousel from 'react-bootstrap/Carousel';
// import { Button } from '@mui/material';
import Button from 'react-bootstrap/Button';
import img1 from "./Screenshot 2023-04-18 222547.png";
import img2 from "./Screenshot 2023-04-18 222602.png"
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

function Resume() {
//     const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
  return (
    // <div className='res'>
    //     {/* <Document file="./ECE REACT LAB MANUAL.pdf" onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //     </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p> */}
    //   {/* <img src="C:\Users\shiva\OneDrive\Pictures\Screenshots\Screenshot 2023-04-18 222547.png" alt='img1'/>
    //   <img src="C:\Users\shiva\OneDrive\Pictures\Screenshots\Screenshot 2023-04-18 222602.png" alt='img2'/> */}
    //   <div style={{display:"flex", justifyContent:"center"}}>
    //   <img src={i1} alt='img1'/>
    //   </div>
    //   <div style={{display:"flex", justifyContent:"center"}}>
    //   <img src={i2} alt='img2'/>
    //   </div>
    // </div>
    <div>
      <Carousel fade>
      <Carousel.Item>
        <center>
        <img
          
          width={"30%"}
          height={"30%"}
          src={img1}
          alt="First slide"
        />
        </center>
        <Carousel.Caption style={{color:"black"}}>
          {/* <h3>First slide label</h3> */}
          <p>Page 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <center>
        <img

          width={"30%"}
          height={"30%"}
          src={img2}
          alt="Second slide"
        />
        </center>
        <Carousel.Caption style={{color:"black"}}>
          {/* <h3>Second slide label</h3> */}
          <p>Page 2</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <center style={{paddingTop:"2%"}}>
    <a href="Shivaramakrishnan R - resume_1.pdf" download="Shivaramakrishnan R - resume_1.pdf">
        <Button variant="primary">Get Resume</Button>
        {/* <Button variant="primary">Primary</Button>{' '} */}
    </a>
    </center>
    </div>
  )
}

export default Resume