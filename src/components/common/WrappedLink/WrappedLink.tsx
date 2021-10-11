import React from "react";
import { Link as MUILink, LinkProps } from "@mui/material";
import { Link } from "react-router-dom";

const MyLink = ({ href, className, children }: LinkProps) => {
  return (
    <Link to={href ?? "/"} className={className}>
      {children}
    </Link>
  );
};

export const WrappedLink = (props: LinkProps) => {
  return (
    <MUILink {...props} component={MyLink}>
      {props.children}
    </MUILink>
  );
};
