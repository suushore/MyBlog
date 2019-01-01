const Copyleft = {
  margin: 0,
  padding: '22px 0 18px 0',
  lineHeight: '12px',
  fontSize: '12px',
  textAlign: "center",
}

const Footer = ({ backgroundcolor = "#36363d", fontcolor = "#aaa", linkcolor="#ccc" }) => (
  <div className="footer">
    <p style={{ ...Copyleft, backgroundColor: backgroundcolor, color: fontcolor }}>
      Copyleft©2016-3016
      <a style={{ color: linkcolor, padding: '0 5px' }} href="/">SUSHORE.COM</a>
      Designed by sushore.com
    </p>
  </div>
)

export default Footer
