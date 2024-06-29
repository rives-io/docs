import clsx from 'clsx';
import { useState, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import CartesiSvg from '@site/static/img/cartesi.svg';

import styles from './index.module.css';

type Cart = {
  cover: string;
  title: string;
  author: string;
  reference: string;
  sqfs: string;
};

const CartridgeList: Cart[] = [
  {
    cover: '/img/carts/antcopter.png',
    title: 'Antcopter',
    author: 'edubart',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/antcopter.sqfs',
  },
  {
    cover: '/img/carts/freedoom.png',
    title: 'Freedoom',
    author: 'dude',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/freedoom.sqfs',
  },
  {
    cover: '/img/carts/blockie.png',
    title: 'Blockie',
    author: 'ednekebno',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/jam1/blockie.sqfs',
  }
];

const TapeList: Cart[] = [
  {
    cover: '/img/tapes/antcopter.png',
    title: 'quick run',
    author: 'edubart',
    reference: 'Antcopter',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/antcopter.sqfs&tape=https://raw.githubusercontent.com/edubart/cartridges/main/tapes/antcopter.rivtape',
  },
  {
    cover: '/img/tapes/freedoom.png',
    title: 'you are doomeed',
    author: 'max',
    reference: 'Freedoom',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/freedoom.sqfs&tape=https://raw.githubusercontent.com/edubart/cartridges/main/tapes/freedoom-30min.rivtape',
  },
  {
    cover: '/img/tapes/blockie.png',
    title: 'blocks',
    author: 'carlo',
    reference: 'Blockie',
    sqfs: 'https://emulator.rives.io/#simple=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/jam1/blockie.sqfs&tape=https://raw.githubusercontent.com/edubart/cartridges/main/tapes/blockie.rivtape',
  }
];


function Cartridge({cover, title, author, reference, sqfs, setIframeSrc, iframeRef}) {
  function play() {
    setIframeSrc(sqfs + "&now=" + new Date().getTime());
    iframeRef.current.focus();
  }
  return (
    <div className={styles.cartCard} onClick={play}>
      <div className={styles.cartCardBody}>
        <img src={useBaseUrl('/img/logo_white.png')} className={clsx(styles.cartCardLogo,"pixelated")}/>
        <img src={useBaseUrl(cover)} className={clsx(styles.cartCardImage,"pixelated")}/>
        <h6 className={styles.cartCardTitle}>{title}</h6>
        <h6 className={styles.cartCardBy}>by <a>{author}</a></h6>
      </div>
    </div>
  );
}

function Tape({cover, title, author, reference, sqfs, setIframeSrc, iframeRef}) {
  function play() {
    setIframeSrc(sqfs + "&now=" + new Date().getTime());
    iframeRef.current.focus();
  }
  return (
    <div className={clsx(styles.cartCard,styles.tapeCard)} onClick={play}>
      <div className={clsx(styles.cartCardBody,styles.tapeCardBody)}>
        <img src={useBaseUrl('/img/logo_white.png')} className={clsx(styles.cartCardLogo,"pixelated")}/>
        <img src={useBaseUrl(cover)} className={clsx(styles.cartCardImage,styles.tapeCardImage,"pixelated")}/>
        <h6 className={styles.cartCardTitle}>{title}</h6>
        <h6 className={styles.cartCardBy}>by <a>{author}</a></h6>
        <h6 className={styles.cartCardOn}>on <a>{reference}</a></h6>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const introSrc = "https://emulator.rives.io/#simple=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/intro.sqfs";
  const [iframSrc, setIframeSrc] = useState(introSrc);
  const iframeRef = useRef(null);
  return (
    <>
      <header className={clsx('hero', styles.heroBanner, 'pixelated')}>
        <div className="container">
          <ThemedImage sources={{
            light: useBaseUrl('/img/logo_white.png'),
            dark: useBaseUrl('/img/logo_white.png')
          }} className="pixelated" alt="RIVES logo" width="256"/>
          <h3 className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</h3>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg margin--xs"
              to="https://app.rives.io">
              ENTER
            </Link>
            <Link
              className="button button--primary button--lg margin--xs"
              to={useBaseUrl('/docs/category/riv')}>
              CREATE
            </Link>
          </div>
          <iframe
            id="mainCartridgeFrame" className="rivemu-frame margin-top--md"
            src={iframSrc}
            ref={iframeRef}
            scrolling="no"
            allowFullScreen />
        </div>
      </header>
      <section style={{backgroundColor:"var(--ifm-footer-background-color)"}}>
        <div className="container">
          <div className="row padding-vert--md text--center">
            <div className="col col--6">
              <div className={styles.cartContainer}>
                {CartridgeList.map((props, idx) => (
                  <Cartridge key={idx} iframeRef={iframeRef} setIframeSrc={setIframeSrc} {...props} />
                ))}
              </div>
              <div>
                Create, collect and play <a><strong>cartridges</strong></a>:<br/>
                retro games or tools
              </div>
            </div>
            <div className="col col--6">
              <div className={styles.cartContainer}>
                {TapeList.map((props, idx) => (
                  <Tape key={idx} iframeRef={iframeRef} setIframeSrc={setIframeSrc} {...props} />
                ))}
              </div>
              <div>
                Create, collect and watch <a><strong>tapes</strong></a>:<br/>
                interactions with cartridges
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="RIVES - RISC-V Verifiable Entertainment System">
      <HomepageHeader />
      <main className="landing">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
