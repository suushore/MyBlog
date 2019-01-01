import Header from '../components/Header.js'
import Footer from '../components/footer.js'
import Head from 'next/head'

const container = {
  minHeight: '100vh'
}
const Layout = ({
  children, title,
  headerOption = { isShow: true },
  footerOption = { backgroundcolor: "#36363d", fontcolor: "#aaa", linkcolor: "#CCC" }
}) => (
    <div style={container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header isShow={headerOption.isShow}></Header>
      <div>
        {children}
      </div>
      <Footer
        backgroundcolor={footerOption.backgroundcolor}
        fontcolor={footerOption.fontcolor}
        linkcolor={footerOption.linkcolor} />
      <style global jsx>{`
      *{
        margin: 0;
        padding: 0;
      }

      html,body{
        width: 100%;
        -webkit-font-smoothing: antialiased;
      }
      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-weight: bold;
        font-style: normal;
      }
      ul,li{
        list-style:none;
      }
      a{
        text-decoration: none;
        cursor: pointer;
      }
    `}</style>
    </div>
  )

export default Layout