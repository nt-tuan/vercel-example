import React from "react";
import { TraderList } from "../components/trader/TraderList";
import { getTraders } from "../services/traders";
import { Trader } from "../models/trader";
import { AdminLayout } from "layouts/AdminLayout";

const TraderListPage = () => {
  const [traders, setTraders] = React.useState<Trader[]>();
  React.useEffect(() => {
    let subscription = true;
    getTraders().then((resposne) => {
      if (!subscription) return;
      setTraders(resposne);
    });
    return () => {
      subscription = false;
    };
  }, []);
  console.log(traders);
  return (
    <div>
      <AdminLayout.Header>Traders</AdminLayout.Header>
      <TraderList traders={traders} />
    </div>
  );
};

export default TraderListPage;
