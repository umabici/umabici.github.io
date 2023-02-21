import React from 'react';
import { Container, Row } from 'reactstrap';

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, feito com {' '}
              <i className="fa fa-heart heart" /> por Uma Bici
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
