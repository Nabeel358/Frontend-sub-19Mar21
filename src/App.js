import React, { useState } from 'react';
import Carousel from './Carousel';
import Card from './Card';
import NavBar from './NavBar';
import Grid from './Grid';


const cardContent = [
  {
    title: 'Affordable properties',
    description: 'Something for everyone',        
    imgSrc: './house2.jpg'
  },
  {
    title: 'Explore our villas',
    description: 'In the heart of Abu Dhabi',
    imgSrc: './house3.jpg'
  },
  {
    title: 'Book apartment tour',
    description: 'For bachelors and families',
    imgSrc: './apartment1.jpg'
  },
]


{/*const CounterButton = () => {
  
  const [state, setState] = useState(0);
  
    

return (<button className="btn-light">{state}</button>) */}

<body style="background-color: red"></body>

function App() { 
  return (
    <div>

      { /* Main navgation */ }
      <NavBar 
        brand="OwnHomes" 
        links={
          [
            {
              'path': '/',
              'label': 'Home'
            },
            {
              'path': '/about',
              'label': 'About'
            },
            {
              'path': '/contact',
              'label': 'Contact'
            }
          ]
        } 
      />

      <div className="content" style={{minHeight: 'calc(100vh - 150px)'}}>
       
       { /* Carousel goes here */ }
       <Carousel images={['./abudhabi1.jpg', './house1.jpg']}/>

       { /* Cards go here */ }
       <div className="container my-4">
         <div className="row">

            {
              cardContent.map(
                (arrElement) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-4">
                        <Card 
                            className="mb-4 m-auto"
                            title={arrElement.title}
                            imgSrc={arrElement.imgSrc}
                            description={arrElement.description}
                        />
                      </div>
                    )
                }
              )
            }
            
          </div>
       </div>

      </div>

     

      { /* Footer navigation */ }
      <NavBar 
        brand="OwnHomes" 
        links={
          [
            {
              'path': '/',
              'label': 'Home'
            },
            {
              'path': '/about',
              'label': 'About'
            },
            {
              'path': '/contact',
              'label': 'Contact'
            }
          ]
        } 
      />
    </div>
  );
}

export default App;
