import Fileupload from '../../components/fileupload.js'
import Link from 'next/link'
import { DatePicker } from 'antd';

const wrap = {
  backgroundColor: "#F1EAE2",
  minHeight: "calc(100vh - 132px)",
  padding:15,
  boxSizing: 'content-box'
}
const header = {
  width: '80%',
  margin: '0 auto'
}
const title = {
  textTransform: "uppercase",
  fontSize: 30,
  paddingTop: 15,
}
const subTitle = {
  fontSize: 25,
}
const content = {
  width: '80%',
  margin: '0 auto',
  padding: '5px 9px 5px 9px',
  backgroundColor: '#D3C9C0',
  marginTop: 15,
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

const PostLink = (props) => (
  <li className="postshow">
    <Link href={`/article/post?title=${props.id}`}>
      <h2 style={articleTitle}>{props.title}</h2>
    </Link>
    <h3 style={articleSubTitle}>
      <span className="date">{props.date}</span>, Created by <span className="author">{props.author}</span>
    </h3>
    <div style={postsummary}>搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站搬瓦工VPS搭建网站</div>
    <Link href={`/post?title=${props.title}`} as={`/${props.id}`}><a style={{ fontSize: 12, fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif' }}>更多参考</a></Link>
    <style jsx>{`
      a,h2{
        cursor:pointer;
        color: #713417;
      }
      a:hover,h2:hover {
        text-decoration: underline;
        color: #3E2312;
      }
    `}</style>
  </li>
)

const Index = () => (
  <div style={wrap}>
    <div style={header}>
      <h1 style={title}>笔记</h1>
      <h2 style={{ ...title, ...subTitle }}>
        &lt;&lt;学习记录及个人文档&gt;&gt;
          <div style={{ float: "right" }}><Fileupload /></div>
        <DatePicker />
      </h2>
    </div>
    <div style={content}>
      <div className="left">
        <ul>
          <PostLink title="1.搬瓦工VPS搭建网站" date="December 12, 2016" author="suushore" id="111" />
          <PostLink title="2.搬瓦工VPS搭建网站的一些问题" date="December 12, 2016" author="suushore" id="222" />
        </ul>
      </div>
      <div className="right"></div>
    </div>
    <style global jsx>{`
      h1,h2,a{
        color: #713417;
      }
    `}</style>
  </div>
)

export default Index