import Footer from '@/components/Footers/Footer';
import LandingPageHeader from '@/components/Headers/LandingPageHeader';
import IndexNavbar from '@/components/Navbars/IndexNavbar';
import Head from 'next/head';
import React from 'react';

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
      <Head>
        <title>Uma bici 🚲⛰️</title>
        <meta name="author" content="Francis Targanski" />
        <meta name="author" content="Marcelo Luiz Onhate" />
        <meta
          name="description"
          content="Um emocionante experimento que irá envolver pessoas de diferentes cidades, um revezamento pedalando em uma única bicicleta, passando por várias localidades."
        />
        <meta name="keywords" content="bicicleta, desafio, união, jornada, revezamento, mountain, bike, bici, MTB" />
      </Head>

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
