import React from "react";
import { TraderList as TraderTable } from "components/trader/TraderList";
import { getTraders } from "services/trader";
import { Trader } from "models/trader";
import { AdminLayout } from "layouts/AdminLayout";

const TraderList = () => {
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
  return (
    <div>
      <AdminLayout.Header>Traders</AdminLayout.Header>
      <AdminLayout.Content>
        <TraderTable traders={traders} />
      </AdminLayout.Content>
    </div>
  );
};

export default TraderList;
