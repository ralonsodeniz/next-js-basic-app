import {ThemeProvider} from '@material-ui/core'
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout/Layout';
import muiTheme from "../styles/muiTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
