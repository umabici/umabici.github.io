/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Footer from '@/components/Footers/Footer';
import LandingPageHeader from '@/components/Headers/LandingPageHeader';

// core components
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

function LandingPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove('nav-open');
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });
  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      {/*<div className="main">*/}
      {/*  <div className="section landing-section">*/}
      {/*    <Container>*/}
      {/*      <Row>*/}
      {/*        <Col className="ml-auto mr-auto" md="8">*/}
      {/*          <h2 className="text-center">Keep in touch?</h2>*/}
      {/*          <Form className="contact-form">*/}
      {/*            <Row>*/}
      {/*              <Col md="6">*/}
      {/*                <label>Name</label>*/}
      {/*                <InputGroup>*/}
      {/*                  <InputGroupAddon addonType="prepend">*/}
      {/*                    <InputGroupText>*/}
      {/*                      <i className="nc-icon nc-single-02" />*/}
      {/*                    </InputGroupText>*/}
      {/*                  </InputGroupAddon>*/}
      {/*                  <Input placeholder="Name" type="text" />*/}
      {/*                </InputGroup>*/}
      {/*              </Col>*/}
      {/*              <Col md="6">*/}
      {/*                <label>Email</label>*/}
      {/*                <InputGroup>*/}
      {/*                  <InputGroupAddon addonType="prepend">*/}
      {/*                    <InputGroupText>*/}
      {/*                      <i className="nc-icon nc-email-85" />*/}
      {/*                    </InputGroupText>*/}
      {/*                  </InputGroupAddon>*/}
      {/*                  <Input placeholder="Email" type="text" />*/}
      {/*                </InputGroup>*/}
      {/*              </Col>*/}
      {/*            </Row>*/}
      {/*            <label>Message</label>*/}
      {/*            <Input*/}
      {/*              placeholder="Tell us your thoughts and feelings..."*/}
      {/*              type="textarea"*/}
      {/*              rows="4"*/}
      {/*            />*/}
      {/*            <Row>*/}
      {/*              <Col className="ml-auto mr-auto" md="4">*/}
      {/*                <Button className="btn-fill" color="danger" size="lg">*/}
      {/*                  Send Message*/}
      {/*                </Button>*/}
      {/*              </Col>*/}
      {/*            </Row>*/}
      {/*          </Form>*/}
      {/*        </Col>*/}
      {/*      </Row>*/}
      {/*    </Container>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Footer />
    </>
  );
}

export default LandingPage;
