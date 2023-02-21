import React from 'react';
import { Container } from 'reactstrap';

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
            <img alt="Uma bici, várias histórias." src="/img/logo-white.svg" height={120} width={120} />
            <h1>Uma bici, várias histórias</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
