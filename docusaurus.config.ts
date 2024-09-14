import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RIVES',
  tagline: 'RISC-V Verifiable Entertainment System',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rives.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rives-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social_card.png',
    navbar: {
      logo: {
        alt: 'RIVES Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_white.png',
        className: 'pixelated',
      },
      items: [
        {
          to: 'https://app.rives.io',
          label: 'Enter',
          position: 'left',
          className: 'button button--secondary margin--xs'
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: 'Documentation',
              to: '/docs/category/riv',
            },
            {
              label: 'Cheatsheet',
              to: '/docs/riv/cheatsheet',
            },
            {
              label: 'Playground',
              to: '/playground',
            },
          ],
        },
        {
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'App',
              to: 'https://app.rives.io',
            },
            {
              label: 'Emulator',
              to: 'https://emulator.rives.io',
            },
          ],
        },
        {
          items: [
            {
              html: `
                <a class="footer__link-item footer-icon" href="https://discord.gg/FQnQqKWVn8" target="_blank" rel="noreferrer noopener" aria-label="Discord">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>
                </a>
                <a class="footer__link-item footer-icon" href="https://x.com/rives_io" target="_blank" rel="noreferrer noopener" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
                </a>
                <a class="footer__link-item footer-icon" href="https://github.com/rives-io" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} RIVES`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'shell-session', 'c', 'lua', 'nim', 'json'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'doom-olympics-1',
      content:
        'Join the DOOM Olympics, 7 days, 7 contests, $15k in Prizes from 12th-19th of September. Live now! Play <a href="https://app.rives.io/contests/">here</a>!',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    algolia: {
      appId: 'I3YBBP2IWW',
      apiKey: 'ab5c971336228be397ef6f77af4de93b',
      indexName: 'rives',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
