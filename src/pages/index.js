import Link from 'next/link'

const title = {
  paddingTop: 62,
}
const mainTitle = {
  fontSize: 80,
  color: '#eee',
  lineHeight: '110px',
  fontFamily: '"Montserrat", sans-serif',
  textAlign: 'center',
}
const subTitle = {
  fontSize: 30,
  lineHeight: '42px',
  fontFamily: '"playfairdisplay", serif',
  textAlign: 'center',
  marginTop: 30
}
const container = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '50px auto 0px',
}
const showcase = {
  flex: 4,
  textAlign: 'center',
  cursor: 'pointer',
  overflow: 'hidden'
}
const content = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  transformOrigin: '50% 50%',
  transition: 'transform 0.3s,opacity 0.3s',
}

const Entry = (props) => (
  <Link href={`/${props.target}`}>
    <div style={showcase} className="showcase">
      <div style={{ backgroundColor: props.backgroundcolor, ...content }} className='content'>
        <p style={{ fontSize: '22px' }}>{props.title}</p>
      </div>
    </div>
  </Link>
)

const Index = () => (
  <div className="wrap">
    <div style={title} className="title">
      <h1 style={mainTitle}>sushore</h1>
      <p style={subTitle}>基于个人兴趣搭建的私人博客类网站</p>
    </div>
    <div style={container} className="container">
      <Entry title="笔记" target="article" backgroundcolor="#A79496"></Entry>
      <Entry title="图片" target="image" backgroundcolor="#375B73"></Entry>
      <Entry title="视频" target="video" backgroundcolor="#DB5252"></Entry>
      <Entry title="音乐" target="music" backgroundcolor="red"></Entry>
      <Entry title="文件" target="file" backgroundcolor="#0066CC"></Entry>
      <Entry title="关于" target="about" backgroundcolor="#323232"></Entry>
    </div>
    <style global jsx>{`
      .wrap{
        min-height:calc(100vh - 52px);
        color: #eee;
        box-sizing:content-box;
      }
      body{
        background: url(/static/background/bg-01.jpg) no-repeat;
        background-size: cover;
        background-attachment: fixed;
      }
      @font-face {
        font-family: 'Montserrat';
        src:url('/static/fonts/Montserrat-Regular.otf');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'playfairdisplay';
        src:url('/static/fonts/playfairdisplay-regular.ttf');
        font-weight: normal;
        font-style: normal;
      }
      .content{
        opacity: 0.87
      }
      .content:hover{
        position: relative;
        z-index: 100;
        opacity: 0.96;
        transform: scale(1.5);
      }
      .container{
        width: 70%;
      }
      .showcase{
        height: 200px;
        min-Width:33%;
      }
      /*适配不同屏幕*/
      @media screen and (min-width: 992px) and (max-width:1200px){
        .container{
          width: 80%;
          }
          .showcase{
          height: 180px;
        }
      }
      @media screen and (min-width: 768.5px) and (max-width:992px){
        .container{
          width: 85%;
        }
        .showcase{
          height: 170px;
        }
      }
      @media screen and (min-width: 648px) and (max-width:768.5px){
        .container{
          width: 90%;
          }
        .showcase{
          height: 160px;
        }
      }
      @media screen and (max-width:648px){
        .container{
          width: 96%;
          }
        .showcase{
          min-Width:150px;
          height: 150px;
        }
      }
    `}</style>
  </div>
)

export default Index
