import React from 'react'

const Header = () => {
  return(
    <div>
      <header>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg">
            <h3 className="navbar-brand"><a href="/" style={{textDecoration: 'none'}}>Coronavirus.py</a></h3>
            <div className="mr-auto"></div>
            <h6 className="about"><a href="about">About us</a></h6>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header
