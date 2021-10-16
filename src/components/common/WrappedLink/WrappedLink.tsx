import React from "react";
import { Link as MUILink, LinkProps } from "@mui/material";
import Link from "next/link";
const MyLink = React.forwardRef(
  (
    { href, className, children }: LinkProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <Link href={href ?? "/"}>
        <a ref={ref} className={className}>
          {children}
        </a>
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
