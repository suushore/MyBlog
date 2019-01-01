const fs=require("fs")
const crypto = require('crypto');

function splitBuffer(buffer,sep) {
    let arr = [];
    let pos = 0;//当前位置
    let sepPosIndex = -1;//分隔符的位置
    let sepPoslen = Buffer.from(sep).length;//分隔符的长度，以确定下一个开始的位置
    do{
        sepPosIndex=buffer.indexOf(sep,pos)   
        if(sepPosIndex==-1){
            //当sepPosIndex是-1的时候，代表已经到末尾了，那么直接读完最后的buffer
            arr.push(buffer.slice(pos));
        }else{
            arr.push(buffer.slice(pos,sepPosIndex));
        }
      pos = sepPosIndex+sepPoslen
    }while(-1!==sepPosIndex)
    return arr
}
///////元数据格式
// ------WebKitFormBoundaryl8ZHdPtwG2eePQ2F
// Content-Disposition: form-data; name="file"; filename="blob"
// Content-Type: application/octet-streamk
// 换行*2
// 乱码
// 换行*1
// ------WebKitFormBoundaryl8ZHdPtwG2eePQ2F--
function copeData(buffer,boundary){
    let lines = splitBuffer(buffer,boundary);
    lines=lines.slice(1,-1);//去掉第一个、最后一个的空行
    let obj={};
    console.log(111)
    lines.forEach(line=>{
        let [head,tail] = splitBuffer(line,"\r\n\r\n");
        head = head.toString();
        if(head.includes('filename')){ // 这是文件
            obj["file"]= line.slice(head.length + 4, -2)
        }else{
          // 文本
          let name = head.match(/name="(\w*)"/)[1];
          let value= tail.toString().slice(0,-2);
          obj[name]=value
        }
    });
    let fileOriName=crypto.createHash("md5").update(obj.fileOriName).digest("hex")
    let fileSuffix=obj.fileOriName.substring(obj.fileOriName.lastIndexOf(".")+1)
    if(parseInt(obj.start)===0){
        fs.writeFileSync(__dirname+`/uploads/${fileOriName}.${fileSuffix}`,obj.file);
    }else{
        fs.appendFileSync(__dirname+`/uploads/${fileOriName}.${fileSuffix}`,obj.file);
    }
}
function fileUpload(){
    return async (ctx,next)=>{
        let buf = [];
        let string;
        let boundary ="";
        try {
          console.log(ctx.headers["content-type"])
            boundary=ctx.headers["content-type"].split("=")[1]
            boundary = '--'+boundary
            await new Promise((rs,rj)=>{
                ctx.req.on("data",(data)=>{
                    buf.push(data);
                });
                ctx.req.on("end",(data)=>{
                    if(buf.length>0){
                        string=Buffer.concat(buf)
                        copeData(string,boundary)
                    }
                    rs();
                })
            })
            console.log(111)
            await next();
        } catch (error) {
            await next();
        }
    }
}
module.exports = fileUpload;
