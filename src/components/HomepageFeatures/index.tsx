import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type FeatureItem = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<'Icon'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fun and easy to create',
    icon: 'twemoji:video-game',
    description: (
      <>
        Create small games using a minimalistic API and simple tools. Build in a constrained enjoyable environment, similar to retro consoles, and be more creative.
      </>
    ),
  },
  {
    title: 'Verifiable gameplays',
    icon: 'emojione-v1:tape-cartridge',
    description: (
      <>
        Every game built for RIVES is verifiable onchain by default. RIVES verifies and stores submitted gameplay logs as collectible tapes.
      </>
    ),
  },
  {
    title: 'Compete onchain',
    icon: 'noto:trophy',
    description: (
      <>
        Every cartridge submitted can have its own custom leaderboard(s). Players can compete for prizes and achievements.
      </>
    ),
  },
  {
    title: 'RISC-V Linux Console',
    icon: 'logos:linux-tux',
    description: (
      <>
        RIVES is built and runs in a Linux OS on a RISC-V emulator. Use any programming language to create a game. C, C++, Rust, Nim, Zig, Nelua and more.
      </>
    ),
  },
  {
    title: 'Mod Cartridges',
    icon: 'noto:package',
    description: (
      <>
        Extend games, change their rules, build custom maps and compose on top of other cartridges.
      </>
    ),
  },
  {
    title: 'Rollup powered by Cartesi',
    icon: 'token:ctsi',
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
        <Icon className={styles.featureIcon} icon={icon} role="img" />
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
