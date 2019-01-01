
import { Component } from 'react'

class Fileload extends Component {

  constructor(props) {
    super(props);
    this.state = { fileUploadTip: '选择要上传的文件' };
    this.fileSelected = this.fileSelected.bind(this);
    this.upload = this.upload.bind(this);//必须手动绑定this
    this.file = '';
  }

  fileSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.setState({ fileUploadTip: this.file.name });
    }
  }

  upload(ev) {
    if (this.state.fileUploadTip != '选择要上传的文件') {
      let _this=this;
      let formData = new FormData();
      formData.append(this.file.name, Blob,this.file);
      formData.append('translationType', 'file');
      let request = new XMLHttpRequest();
      request.open("POST", "/fileupload/markdown", true);
      request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      request.onload = function() {
        console.log(request.status)
        if (request.status == 200) {
          _this.setState({ fileUploadTip:"Uploaded"})
        } else {
          _this.setState({ fileUploadTip:"Error"})
        }
      };
      request.send(formData);
      ev.preventDefault();
    }
  }

  render() {
    let fileUploadTip = this.state.fileUploadTip;
    return (
      <div style={{ display: "inline-block" }}>
        <form encType="multipart/form-data" method="post" name="fileinfo" ref="form">
          <div className="file">
            <label htmlFor="file">文件：</label>
            <div className="userdefined-file">
              <input type="text" name="userdefinedFile" id="userdefinedFile" value={fileUploadTip} readOnly />
              <input type="file" name="file" id="file" onChange={this.fileSelected} />
              <button type="button" onClick={this.upload}>上传</button>
            </div>
          </div>
        </form>
        <style jsx>{`
          .file {
          　　position: relative;
              width:350px;
          　　height: 40px;
          　　line-height: 40px;
          }
          .file label {
          　　display: inline-block;
              width: 50px;
              text-align: center;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              border: none;
              cursor: pointer;
              font-weight: 400;
              position: relative;
              top:-7px;
          }
          .userdefined-file {
          　　position: absolute;
          　　top: 0;
          　　right: 0;
          　　z-index: 2;
          　　width: 300px;
          　　height: 40px;
          　　line-height: 40px;
          　　font-size: 0;  /*应对子元素为 inline-block 引起的外边距*/
          }
          .userdefined-file input[type="text"] {
          　　display: inline-block;
          　　vertical-align: middle;
          　　padding-right: 14px;
          　　padding-left: 14px;
          　　width: 220px;
          　　box-sizing: border-box;
          　　border: 1px solid #ccc;
          　　height: 40px;
          　　line-height: 40px;
          　　font-size: 14px;
          　　overflow: hidden;
          　　text-overflow: ellipsis;
          　　white-space: nowrap;
          }
          .userdefined-file button {
          　　display: inline-block;
          　　vertical-align: middle;
          　　width: 80px;
          　　text-align: center;
          　　height: 40px;
          　　line-height: 40px;
          　　font-size: 14px;
          　　background-color: #f54;
          　　border: none;
          　　color: #fff;
          　　cursor: pointer;
          }
          .userdefined-file input[type="file"] {
              position: absolute;
          　　top: 0;
          　　left: 0;
          　　z-index: 3;
          　　opacity: 0;
          　　width: 220px;
          　　height: 40px;
          　　line-height: 40px;
          　　cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

export default Fileload;
