


import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

export const Description = () => {
  const data = JSON.parse(localStorage.getItem('description')) 
  console.log(data);

  return (
    <Card style={{ backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card.ImgOverlay style={{ display: 'flex', flexDirection: 'column', marginLeft:'30%' }}>
        <Card.Title style={{  marginBottom: '20px', marginLeft:'130px'}}>Product Name: {data.Name}</Card.Title>
        <Carousel style={{ width: '50%', marginBottom: '20px' }}>
          <Carousel.Item interval={1000}>
            <img style={{height:'50vh',marginLeft:'50px'}}
              src={data.Image2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
             style={{height:'50vh',marginLeft:'50px'}}
              src={data.Image}
              alt="Second slide"
            />
            <Carousel.Caption>
             
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="video-wrapper" style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
              <iframe
                src={data.Url}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
              />
            </div>
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

        <Card.Text>
        <span style={{fontSize:'15px',fontWeight:'bold'}}>About Product:</span>   {data.Description}
        </Card.Text>
        <Card.Text><span style={{fontSize:'15px',fontWeight:'bold'}}>Price: </span> {data.Price}$</Card.Text>
       
        <Card.Text>
        <span style={{fontSize:'15px',fontWeight:'bold'}}>Category:</span>   {data.Category}
        </Card.Text>
      
      </Card.ImgOverlay>
    </Card>
  );
};
