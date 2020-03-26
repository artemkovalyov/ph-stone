module.exports = {
  title: 'SAP Cloud SDK',
  tagline: 'A one stop shop for developing and extending SAP application in a Cloud.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'SAP', // Usually your GitHub org/user name.
  projectName: 'SAP Cloud SDK documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SAP Cloud SDK',
      logo: {
        alt: 'SAP Cloud SDK',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          label: 'Docs',
          position: 'left',
        },
        {
	  to: 'blog',
	  label: 'Blog',
	  position: 'left'
	},
        {
	  to: 'support',
	  label: 'Support',
	  position: 'left'
	},
        {
          href: 'https://github.com/SAP/cloud-sdk',
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
              label: 'SAP Cloud SDK overview',
              to: 'docs/doc1',
            },
            {
              label: 'Clod SDK for Java',
              to: 'docs/doc2',
            },
            {
              label: 'Clod SDK for JS',
              to: 'docs/doc2',
            },
            {
              label: 'Clod SDK for CI/CD',
              to: 'docs/doc2',
            },
            {
              label: 'Cloud SDK Tutorials',
              href: 'https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sap-cloud-sdk',
            },
            {
              label: 'SAP Developers Portal',
              href: 'https://developers.sap.com/topics/cloud-sdk.html',
            },
            {
              label: 'SAP Developers Portal',
              href: 'https://community.sap.com/topics/cloud-sdk',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sap',
            },
            {
              label: 'Facebook',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sapdevs',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/user/sapdevs',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/sap-developers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SAP Cloud SDK`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
