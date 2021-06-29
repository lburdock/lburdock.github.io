import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ButtonLink from "../components/external-link/buttonLink";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`${siteConfig.title}, ${siteConfig.tagline}`}
    >
      <main className={clsx("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <ButtonLink href="https://www.linkedin.com/in/lauren-burdock/">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </ButtonLink>
            <ButtonLink href="https://github.com/lburdock">
              <GitHubIcon className="margin-right--xs" />
              <span>GitHub</span>
            </ButtonLink>
          </div>
        </div>
      </main>
    </Layout>
  );
}
