import React from 'react';
import Carousel from './Carousel';
import NavBar from './NavBar';


function App() {
  return (
    <div>
      <NavBar 
        brand="My App" 
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

      <div className="content" style={{minHeight: 'calc(100vh - 112px)'}}>
       <Carousel images={['./zayed-mosque.jpg', './dubai-night.jpg']}/>
      </div>

      <NavBar 
        brand="My App" 
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
