import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbar = () => {
    document.documentElement.classList.toggle('nav-open');
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="#home"
            title="Coded by Uma Bici"
          >
            Uma Bici
          </NavbarBrand>
          <button
            className={classnames('navbar-toggler navbar-toggler')}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#sobre" title="Sobre o projeto" onClick={toggleNavbar}> Sobre </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#porque" title="Por que?" onClick={toggleNavbar}> Por que? </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#rota" title="Roteiro" onClick={toggleNavbar}> Roteiro </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#interesse" title="Tenho Interesse" onClick={toggleNavbar}> Tenho Interesse </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/umabici"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/@umabici"
                target="_blank"
                title="Acompanhe no YouTube"
              >
                <i className="fa fa-youtube" />
                <p className="d-lg-none">YouTube</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/umabici"
                target="_blank"
                title="Dê uma estrela no GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
