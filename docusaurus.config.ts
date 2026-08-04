import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
      navbar: {
        title: 'TegridyFarm',
        logo: {
          alt: 'TegridyFarm Logo',
          src: 'img/logo.svg',
        },
      
        items: [
          {
            href: 'https://tegridyfarm.de',
            label: 'Homepage',
            position: 'left',
          },
          {
            to: '/docs/tbox',
            label: 'TBOX',
            position: 'left',
            activeBaseRegex: '/docs/tbox/',
          },
          {
            label: 'TempBox',
            position: 'left',
            items: [
              {
                label: 'Documentation coming later',
                to: '/docs/tbox',
              },
            ],
          },
      
          {
            label: 'TBOX',
            position: 'right',
            items: [
              {
                label: 'TBOX',
                to: '/docs/tbox/devices/tbox/technical-data',
              },
              {
                label: 'SBOX',
                to: '/docs/tbox/devices/sbox/technical-data',
              },
              {
                label: 'PBOX',
                to: '/docs/tbox',
              },
              {
                label: 'VBOX',
                to: '/docs/tbox',
              },
              {
                label: 'HBOX',
                to: '/docs/tbox',
              },
            ],
          },
      
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
      
          {
            href: 'https://github.com/TegridyFarm96',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'TegridyFarm',
          items: [
            {
              label: 'Homepage',
              href: 'https://tegridyfarm.de',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TegridyFarm96',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              href: 'https://tegridyfarm.de/impressum',
            },
            {
              label: 'Datenschutz',
              href: 'https://tegridyfarm.de/datenschutz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TegridyFarm. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
