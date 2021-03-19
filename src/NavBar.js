import React from 'react';

const NavBar = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.brand}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" aria-controls="navbarNav"
           aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" 
                aria-current="page" 
                href={props.links[0].path}>
                    {props.links[0].label}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.links[1].path}>
                    {props.links[1].label}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.links[2].path}>
                    {props.links[2].label}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;