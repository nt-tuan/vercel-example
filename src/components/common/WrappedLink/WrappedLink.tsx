import React from "react";
import { Link as MUILink, LinkProps } from "@mui/material";
import { Link } from "react-router-dom";

const MyLink = React.forwardRef(
  (
    { href, className, children }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <Link ref={ref} to={href ?? "/"} className={className}>
        {children}
      </Link>
    );
  }
);

export const WrappedLink = (props: LinkProps) => {
  return (
    <MUILink {...props} component={MyLink}>
      {props.children}
    </MUILink>
  );
};
