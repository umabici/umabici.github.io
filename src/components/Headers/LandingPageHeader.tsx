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
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef<any>();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&dl=mikkel-bech-yjAFnkLtKY0-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb)'
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <img src="/img/logo-white.svg" height={120} width={120} />
            <h1>Uma bici, várias histórias</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
