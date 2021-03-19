import React from 'react';

const Grid = (props) => {
    return(

<div className={ `grid ${props.className}` }>

  
<div className="container">
<div className="row row-cols-3">
  <div className="col text-center border"><h4>Pricing</h4>&nbsp;Not sure if you can afford your dream home? We can help you. We have many different payment options which offer great flexibility and convenience.<h5>&nbsp;</h5>
  <a href="#" className="btn btn-dark"      >Check plans</a></div>
  <div className="col text-center border"><h4>Investment</h4>&nbsp;Our properties are not just a place that you can call home, but they are also a secure invesment for your future.<h5>&nbsp;</h5>
  <a href="#" className="btn btn-dark mt-4"      >Know more</a></div>
  <div className="col text-center border"><h4>Assistance</h4>&nbsp;We have qualified property experts and consultants who will guide you through the whole process.<h5>&nbsp;</h5>
  <a href="#" className="btn btn-dark mt-4"      >Consult us</a> </div>
</div>
</div>
</div>

)
    }

    


export default Grid; 
