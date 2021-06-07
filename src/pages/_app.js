import { ThemeProvider } from '@material-ui/core';
import { SWRConfig } from 'swr';
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout/Layout';
import muiTheme from '../styles/muiTheme';
import { swrConfig } from '../http';
import RenderProvider from "../contexts/RenderContext";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={swrConfig}>
      <RenderProvider>
        <ThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RenderProvider>
    </SWRConfig>
  );
}

export default MyApp;
