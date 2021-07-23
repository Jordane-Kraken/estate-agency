import React from 'react';
import {
  MDBNavbar, 
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
  } from "mdbreact";
  import Link from 'next/link';

export const Header = () => {
  return (
    <MDBNavbar color="rgba-cyan-light" expand="md">
    <MDBNavbarToggler />
      <MDBCollapse id="navbarCollapse" navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
          <Link href="/" passHref>
            <a className="nav-link">
              <MDBIcon icon="home" className="mr-1"/>Accueil
            </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
          <Link href="/proprietes" passHref>
            <a className="nav-link">
            Liste des biens
            </a>
          </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}