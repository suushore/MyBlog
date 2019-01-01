const wrap = {
  backgroundColor: "#36363d",
  minHeight: "calc(100vh - 132px)",
  padding:15,
  boxSizing: 'content-box'
}
const header = {
  width: '80%',
  margin: '0 auto'
}
const title = {
  fontSize: 25,
  marginTop: 20,
  textAlign: "center"
}
const content = {
  margin: '0 auto',
  padding: '5px 9px 5px 9px',
  marginTop: 15,
}

const Index = () => (
  <div style={wrap}>
    <div>
      <div style={header}>
        <h1 style={title}> 关于本站 </h1>
      </div>
      <div style={content}>
        aaaa
      </div>
    </div>
    <style jsx>{`
      *{
        color:#ccc!important
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)

export default Index