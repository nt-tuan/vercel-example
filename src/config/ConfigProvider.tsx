import React from "react";

interface ConfigContextType {
  apiURL: string;
}
export const ConfigContext = React.createContext<ConfigContextType>({
  apiURL: "",
});
export const useApiURL = () => {
  const { apiURL } = React.useContext(ConfigContext);
  return apiURL;
};
export const ConfigProvider = ({
  children,
  apiURL,
}: {
  children: React.ReactNode;
  apiURL: string;
}) => {
  return (
    <ConfigContext.Provider value={{ apiURL }}>
      {children}
    </ConfigContext.Provider>
  );
};
