/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'docusaurus-example',
  tagline: 'Dinosaurs are cool',
  url: 'https://docusaurus-example.netlify.com',
  noIndex: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kmakoto0212', // Usually your GitHub org/user name.
  projectName: 'docusaurus-example', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'docusaurus-example',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/kmakoto0212/docusaurus-example',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: 'https://docusaurus.io/docs/',
            },
          ],
        },
        {
          title: 'Docusaurus Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kmakoto0212/docusaurus-example',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} kmakoto0212, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kmakoto0212/docusaurus-example/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kmakoto0212/docusaurus-example/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
