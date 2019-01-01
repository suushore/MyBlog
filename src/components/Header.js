import Link from 'next/link'
import { withRouter } from 'next/router'

const linkStyle = {
  display: "flex",
  minWidth: "2rem",
  minWidth: "calc(100% / 12)",
  height: "100%",
  padding: "0 10px",  
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "20px",
  fontWeight: 300,
  transition: "color 0.2s ease-out 0s",
  textDecoration: "none",
  fontSize: "14px",
  flexDirection: "row"
}
const indexLinkStyle = {
  width: "calc(100% / 10)",
  padding: 0,
  marginRight: 10,
  fontSize: "16px",
  minWidth: "35px",
  fontWeight: 700,
  color: "#EEEEEE",
}
const NavLink = withRouter((props) => (
  <div>
    <Link href={props.href}>
      <a style={linkStyle} className={props.router.route == props.href ? "active" : ""}>{props.children}</a>
    </Link>
    <style jsx>{`
      a.active{
        color: rgb(97, 218, 251);
      }
      a.active::after{
        content:"";
        width:100%;
        position: absolute;
        bottom: -1px;
        height: 4px;
        left: 0px;
        right: 0px;
        z-index: 1;
        background: rgb(97, 218, 251);
      }
      a{
        color: #EEEEEE;
        position:relative;
      }
    `}</style>
  </div>
))
const Header = ({isShow}) => (
  <div className="container" style={isShow?{display:'block'}:{display:'none'}}>
    <div className="warper">
      <Link href="/">
        <a style={{ ...linkStyle, ...indexLinkStyle }} className="indexLink">
          <span className="indexLinkText">
            首页
          </span>
        </a>
      </Link>
      <nav className="nav">
        <NavLink href="/article">笔记</NavLink>
        <NavLink href="/image">图片</NavLink>
        <NavLink href="/video">视频</NavLink>
        <NavLink href="/music">音乐</NavLink>
        <NavLink href="/file">文件</NavLink>
        <NavLink href="/about">关于</NavLink>
      </nav>
    </div>
    <style jsx>{`
      .container,.warper{
        height: 50px;
      }
      .warper{
        display: flex;
        background-color: #20232a;
        color: #EEEEEE;
        position: fixed;
        z-index: 1;
        width: 80%;
        padding:0 10%;
        top: 0;
        left: 0;
      }
      .indexPageText{
        color: inherit;
        margin-left: 10px;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
      }
      nav{
        display:flex;
        height: 100%;
      }
      *{
        box-sizing: content-box!important
      }
    `}</style>
  </div>
)

export default Header