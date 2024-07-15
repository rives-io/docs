import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fun and easy to create',
    icon: '/img/feats/fun.png',
    description: (
      <>
        Create small games using a minimalistic API and simple tools. Build in a constrained enjoyable environment, similar to retro consoles, and be more creative.
      </>
    ),
  },
  {
    title: 'Verifiable gameplays',
    icon: '/img/feats/verifiable.png',
    description: (
      <>
        Every game built for RIVES is verifiable onchain by default. RIVES verifies and stores submitted gameplay logs as collectible tapes.
      </>
    ),
  },
  {
    title: 'Compete onchain',
    icon: '/img/feats/contests.png',
    description: (
      <>
        Every cartridge submitted can have its own custom leaderboard(s). Players can compete for prizes and achievements.
      </>
    ),
  },
  {
    title: 'RISC-V Linux Console',
    icon: '/img/feats/linux.png',
    description: (
      <>
        RIVES is built and runs in a Linux OS on a RISC-V emulator. Use any programming language to create a game. C, C++, Rust, Nim, Zig, Nelua and more.
      </>
    ),
  },
  {
    title: 'Mod Cartridges',
    icon: '/img/feats/mod.png',
    description: (
      <>
        Extend games, change their rules, build custom maps and compose on top of other cartridges.
      </>
    ),
  },
  {
    title: 'Rollup powered by Cartesi',
    icon: '/img/feats/cartesi.png',
    description: (
      <>
        RIVES runs in a Rollup powered by <a target="_blank" href="https://cartesi.io">Cartesi</a>. Live on Ethereum testnet, to be on Base mainnet soon.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className="pixelated" src={useBaseUrl(icon)} width="128" height="128"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <h2>YOUR ONCHAIN FANTASY CONSOLE</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
