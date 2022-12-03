import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container">
              {/* <a className="navbar-brand" href="#">SMK</a> */}
              <Link className="navbar-brand" to={'/'}>SMK</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                      </li>
                      <li className="nav-item" >
                          <Link className="nav-link" to={'/about'}>About</Link>
                      </li>
                       <li className="nav-item">
                          <Link className="nav-link" to={'/profile'}>Profile</Link>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Informasi
                          </a>
                          <ul className="dropdown-menu">
                              <li><Link className="dropdown-item" to={'/pendalumni'}>Pendaftaran Alumni</Link></li>
                              <li><Link className="dropdown-item" to={'/pendnonalumni'}>Pendaftaran Non Alumni</Link></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><Link className="dropdown-item" to={'/infolowker'}>Lowongan Kerja</Link></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

  )
}

export default NavBar