import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import CartesiSvg from '@site/static/img/cartesi.svg';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, 'pixelated')}>
      <div className="container">
        <ThemedImage sources={{
          light: useBaseUrl('/img/logo_white.png'),
          dark: useBaseUrl('/img/logo_white.png')
        }} className="pixelated" alt="RIVES logo" width="256"/>
        <h3 className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</h3>
        <iframe src="https://emulator.rives.io/?-no-audio#nocontrols=true&autoplay=true&cartridge=https://raw.githubusercontent.com/edubart/cartridges/main/intro.sqfs" allowFullScreen className="rivemu-compact-frame"></iframe>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin--xs"
            to="https://emulator.rives.io">
            Play Games
          </Link>
          <Link
            className="button button--secondary button--lg margin--xs"
            to={useBaseUrl('/docs/category/riv')}>
            Create Games
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="RIVES - RISC-V Verifiable Entertainment System">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="hero hero--dark" style={{backgroundColor:"#161617", padding:"2rem 1rem"}}>
          <div className="container text--center">
            <h6 style={{marginBottom: 4}}>Powered By</h6>
            <a href="https://cartesi.io">
              <CartesiSvg className="block fill-current transition-colors" style={{color:"white"}}/>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
