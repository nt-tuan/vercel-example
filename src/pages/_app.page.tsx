import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import App, { AppContext, AppProps } from "next/app";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import getConfig from "next/config";
import "styles/styles.css";
import { ConfigProvider } from "config/ConfigProvider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { publicRuntimeConfig } = getConfig();
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider apiURL={publicRuntimeConfig.apiURL}>
        <Head>
          <title>DC Support</title>
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context); // Retrieves page's `getInitialProps`

  return {
    ...pageProps,
  };
};

export default MyApp;
