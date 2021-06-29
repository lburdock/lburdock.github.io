import LinkIcon from "@material-ui/icons/Link";
import React from "react";
import ExternalLink from "./link";

export default function ReferenceLink({ children, ...props }) {
  return (
    <ExternalLink {...props}>
      <LinkIcon />
    </ExternalLink>
  );
}
