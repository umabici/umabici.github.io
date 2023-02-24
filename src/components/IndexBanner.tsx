import React, { createRef, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Container } from 'reactstrap';

const slidingTexts = [
  'várias histórias.',
  'vários lugares.',
  'várias pessoas.',
  'vários momentos.'
];

function IndexBanner() {
  const pageHeader = createRef<any>();
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1);
    }, 2000);
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
        }
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: 'url(/img/background.png)' }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <img alt="Uma bici, várias histórias." src="/img/logo-white.svg" height={240} width={240} />
            <h1>
              Uma bici,&nbsp;
              <TextTransition inline springConfig={presets.gentle}>
                <strong>{slidingTexts[index % slidingTexts.length]}</strong>
              </TextTransition>
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexBanner;
