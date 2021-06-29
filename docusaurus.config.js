/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Lauren Burdock",
  tagline: "Senior Front End Engineer",
  url: "https://lburdock.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lburdock",
  projectName: "lburdock.github.io",
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      logo: {
        alt: "Lauren Burdock",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "js-test",
          position: "left",
          label: "Cheatsheets",
        },
        {
          href: "https://github.com/lburdock",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
};
