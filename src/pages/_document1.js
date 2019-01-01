import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="sushore's blog" />
          <meta name="keywords" content="" />
          {/* <!-- 适配手机 --> */}
          <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
          {/* <!-- 删除苹果默认的工具栏和菜单栏 --> */}
          <meta name="apple-mobile-web-app-capable" content="no" />
          {/* <!-- IOS系统状态栏显示样式 --> */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          {/* <!-- 忽略电话、email识别 --> */}
          <meta name="format-detection" content="telephone=no,email=no" />
          {/* <!-- WindowsPhone系统a、input标签被点击时产生的半透明灰色背景去掉 --> */}
          <meta name="msapplication-tap-highlight" content="no" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}