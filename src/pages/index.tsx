import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <ThemedImage sources={{
          light: useBaseUrl('/img/logo.png'),
          dark: useBaseUrl('/img/logo_white.png')
        }} className="pixelated" alt="RIVES logo" width="256"/>
        <h3 className="hero__subtitle">{siteConfig.tagline}</h3>
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
      </main>
    </Layout>
  );
}
