import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

function Headre() {

  return (
    <div className='header home'>
        <div className='container-fluid'>
          <div className='header-top row align-items-center'>
            <div className='col-lg-3'>
              <div className='brand'>
                <Link to='/'>
                  <img src={logo} alt='Logo' />
                </Link>
              </div>
            </div>
            <div className='col-lg-9'>
              <div className='topbar'>
                <div className='topbar-col'>
                  <a href="tel:+012 345 67890"><i className='fa fa-phone-alt' />+31 6 6811 6900</a>
                </div>
                <div className='topbar-col'>
                  <a href="mailto:info@example.com"><i className='fa fa-envelope' />info@ouardanettoyage.com</a>
                </div>
                <div className='topbar-col'>
                  <div className='topbar-social'>
                    <a href={"https://www.facebook.com/"} target='_blank' rel="noreferrer"><i className='fab fa-facebook-f' /></a>
                    <a href={"https://www.instagram.com/"} target='_blank' rel="noreferrer"><i className='fab fa-instagram' /></a>
                  </div>
                </div>
              </div>
              <div className='navbar navbar-expand-lg bg-light navbar-light'>
                <button className='navbar-brand btn'>MENU</button>
                <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                  <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='navbarCollapse'>
                  <div className='navbar-nav ml-auto'>
                    <NavLink to='/' className={({isActive}) => (isActive ? "active" : 'none') + ' nav-item nav-link'}>
                      Accueil
                    </NavLink>
                    {/* className={splitLocation[1] === "" ? "active" : ""} */}
                    <NavLink to='/about' className={({isActive}) => (isActive ? "active" : 'none') + ' nav-item nav-link'}>
                      A-Propos
                    </NavLink>
                    <NavLink to='/service' className={({isActive}) => (isActive ? "active" : 'none') + ' nav-item nav-link'}>
                      Service
                    </NavLink>
                    <NavLink to='/contact' className={({isActive}) => (isActive ? "active" : 'none') + ' nav-item nav-link'}>
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero row align-items-center'>
            <div className='col-md-7'>
              <h2>Meilleur &amp; Fiable</h2>
              <h2>Service de <span>nettoyage</span></h2>
              <Link to='/contact' className='btn'>
                Contactez-Nous
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Headre
