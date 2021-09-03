import { ThemeProvider } from '@material-ui/core';
import { SWRConfig } from 'swr';
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '@Components/Layout';
import muiTheme from '@Styles/muiTheme';
import { swrConfig } from '@Http/index';
import RenderProvider from "@Contexts/RenderContext";

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
