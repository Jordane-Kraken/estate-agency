import React, {useState} from 'react';
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
  import useAuth from '../../auth/context';
  import {useRouter} from 'next/router';

export const Header = () => {
  const {logout, user, isAuthenticated} = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MDBNavbar color="rgba-cyan-light" expand="md" dark>
    <MDBNavbarToggler color="primary" onClick={handleToggle} />
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname === "/"}>
          <Link href="/">
            <a className="nav-link">
              <MDBIcon icon="home" className="mr-1"/>
            </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
          <Link href="/proprietes">
            <a className="nav-link">
            Liste des biens
            </a>
          </Link>
          </MDBNavItem>
          <MDBNavItem active={router.pathname === "/contact"}>
            <Link href="/contact">
              <a className="nav-link">
                Contact
              </a>
            </Link>
          </MDBNavItem>
          {
            isAuthenticated && user.role === "admin" && (
              <MDBNavItem>
          <Link href="/propriete/liste" passHref>
            <a className="nav-link">
            Tableau de bord
            </a>
          </Link>
          </MDBNavItem>
            )
          }
        </MDBNavbarNav>
        <MDBNavbarNav right>
          {
            !isAuthenticated && (
          <MDBNavItem active={router.pathname === "/connexion"}>
            <Link href="/connexion">
              <a className="nav-link">
                <MDBIcon icon="user-alt" className="mr-1" />
                Connexion
              </a>
            </Link>
          </MDBNavItem>              
            )
          }

          {
            isAuthenticated && (
              <>
              <MDBNavItem>
                <div className="nav-link">
                  <MDBIcon icon="user-alt" className="mr-1" />
                  Bonjour {user.username}
                </div>
              </MDBNavItem>

              <MDBNavItem>
                <div className="nav-link" onClick={logout}>
                <a>
                 <MDBIcon icon="power-off" className="mr-1" />
                  Déconnexion
                </a>
                </div>
              </MDBNavItem>
              </>
            )
          }

        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  )
}