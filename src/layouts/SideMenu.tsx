import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useRouter } from "next/router";
import Link from "next/link";

interface MenuItemProps {
  children: React.ReactNode;
  path: string;
  icon: React.ReactNode;
  exact?: boolean;
}
const MenuItem = ({ children, path, icon, exact = false }: MenuItemProps) => {
  const router = useRouter();
  const selected = React.useMemo(() => {
    if (exact) {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  }, [router, exact, path]);
  return (
    <Link href={path}>
      <ListItemButton selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={children} />
      </ListItemButton>
    </Link>
  );
};

export const SideMenu = () => (
  <div>
    <MenuItem icon={<AccountBalanceIcon />} path="/organization">
      Organizations
    </MenuItem>
    <MenuItem icon={<PeopleIcon />} path="/user">
      Users
    </MenuItem>
  </div>
);
