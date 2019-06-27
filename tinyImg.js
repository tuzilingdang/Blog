var fs = require("fs");
var path = require("path");
var tinify = require("tinify");
tinify.key = "vJ53kGoVkOJ8bwlxt0qk3oxzThs8QDDh";

const SRC_PATH = "/Users/jimajingwen107/Documents/Study/node/compress-img/src-img";
const DIS_PATH = "/Users/jimajingwen107/Documents/Study/node/compress-img/dis-img";

var root = path.join(SRC_PATH);
readDirSync(root);

function readDirSync(path) {
 var dirList = fs.readdirSync(path);

 dirList.forEach(function(ele){
  var info = fs.statSync(path+ "/" + ele);
  if (info.isDirectory()){
   // console.log("Directory:" + ele);
   readDirSync(path+ "/" + ele);
   var disDirPath = path.replace(SRC_PATH,DIS_PATH);
   makeDir(disDirPath, ele);
  }
  else {
   // console.log("file name:" + path+ "/" + ele);
   tinyImg(path+ "/" + ele);
  }
  debugger;
 }); 
}

function makeDir(dirPath, dirName) {
 fs.mkdirSync(dirPath+ "/" + dirName) ;
}

function tinyImg(filePath) {
 var source = tinify.fromFile(filePath);
 var disFilePath = filePath.replace(SRC_PATH,DIS_PATH);
 source.toFile(disFilePath);
}