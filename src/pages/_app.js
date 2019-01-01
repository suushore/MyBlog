import App, {Container} from 'next/app';
import Layout from '../components/Layout';
import RouterTitle from '../constants/RouterTitle';
import Colours from '../constants/Colours';

export default class MyApp extends App {
 constructor(props) {
    super(props);
    const { Component, pageProps, router } = props;
    this.state = { Component, pageProps, router };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.Component !== prevState.Component
      || nextProps.pageProps !== prevState.pageProps
      || nextProps.router !== prevState.router) {
      return {
        Component: nextProps.Component,
        pageProps: nextProps.pageProps,
        router: nextProps.router
      };
    }
    return null;
  }
  
  render () {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Layout
        title={RouterTitle[router.pathname]?RouterTitle[router.pathname]:"suushore'blog"}
        headerOption={Colours[router.pathname]&&Colours[router.pathname].headerOption?Colours[router.pathname].headerOption:{ isShow: true }}
        footerOption={Colours[router.pathname]&&Colours[router.pathname].footerOption?Colours[router.pathname].footerOption:{ backgroundcolor : "#36363d", fontcolor : "#aaa", linkcolor:"#ccc" }}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}