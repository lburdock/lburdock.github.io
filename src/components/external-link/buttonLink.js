import React from "react";
import clsx from "clsx";
import ExternalLink from "./link";

export default function ButtonLink({ children, className, ...props }) {
  return (
    <ExternalLink
      className={clsx(
        "button button--primary button--outline button--lg",
        className
      )}
      {...props}
    >
      {children}
    </ExternalLink>
  );
}
