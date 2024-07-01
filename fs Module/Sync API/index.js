import * as fs from "fs";

// fs.mkdirSync("c:\\nodejs\\courses\\Node", {recursive: true});

// fs.rmdirSync("c:\\nodejs\\fs");

// Get file information
const stats = fs.statSync("info.txt");
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);