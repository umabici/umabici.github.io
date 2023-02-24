import Footer from '@/components/Footer';
import InterestForm from '@/components/Forms/InterestForm';
import IndexAbout from '@/components/IndexAbout';
import IndexBanner from '@/components/IndexBanner';
import IndexNavbar from '@/components/IndexNavbar';
import MapsRoute from '@/components/MapsRoute';
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
      <IndexBanner />
      <IndexAbout />
      <MapsRoute />

      <div className="main">
        <div className="section landing-section">
          <InterestForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
