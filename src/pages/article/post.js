import { withRouter } from 'next/router'
import Layout from '../../components/Layout.js'
import Header from '../../components/Header.js'
import Head from 'next/head'

const wrap = {
  backgroundColor: "#F1EAE2"
}
const content = {
  width: '80%',
  margin: '0 auto',
  padding: '5px 9px 5px 9px',
  backgroundColor: '#D3C9C0',
  padding:"15px",
  marginTop:15,
  marginBottom:15
}
const articleSubTitle = {
  fontSize: 15,
  color: "#3E2312",
  textTransform: "uppercase",
  marginTop: 5,
}
const articleTitle = {
  color: "#713417",
  fontSize: 25
}
const postsummary = {
  marginTop: 15,
  color: "#4A3A2D",
  textAlign: "justify",
  fontSize: 18
}

const Content = withRouter((props) => (
  <div style={wrap}>
    <Head>
      <title>articles</title>
    </Head>
    <Header />
    <Layout>
      <div style={content}>
        <div className="left">
          <h2 style={articleTitle}>{props.router.query.title}</h2>
          <h3 style={articleSubTitle}>
            <span className="date">000000</span>, Created by <span className="author">0000000</span>
          </h3>
          <div style={postsummary}>
          搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建
          网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站111111111111
          </div>
        </div>
        <div className="right"></div>
      </div>
    </Layout>
    <style global jsx>{`
      h1,h2{
        color: #713417;
      }
    `}</style>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default Page
