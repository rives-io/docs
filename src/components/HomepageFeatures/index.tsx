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
    title: 'Minimalist and Easy',
    icon: 'noto:package',
    description: (
      <>
        Create small games using a minimal API and simple tools.
      </>
    ),
  },
  {
    title: 'RISC-V Linux Environment',
    icon: 'logos:linux-tux',
    description: (
      <>
        Use existing Linux tools to create games,
        everything is built and runs inside a Linux OS
        on top of a RISC-V emulator.
      </>
    ),
  },
  {
    title: 'Retro Nostalgia',
    icon: 'twemoji:video-game',
    description: (
      <>
        Feel like you are back to the past in a constrained environment,
        with limited colors, resolution, memory and processing.
      </>
    ),
  },
  {
    title: 'Tapes',
    icon: 'emojione-v1:tape-cartridge',
    description: (
      <>
        Record game sessions into tiny tapes that can be later replayed and verified.
        Use it even for game testing.
      </>
    ),
  },
  {
    title: 'Language Agnostic',
    icon: 'logos:terminal',
    description: (
      <>
        Use any programming language with support for RISC-V to create a game.
        C, C++, Rust, Nim, Zig, Nelua and more.
      </>
    ),
  },
  {
    title: 'Run Anywhere',
    icon: 'logos:webassembly',
    description: (
      <>
        Play games on any device that has a browser with WebAssembly support.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
