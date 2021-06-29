import React from "react";

export default function ExternalLink({ children, ...props }) {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}
