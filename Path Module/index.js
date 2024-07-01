import path from "path";

// console.log(path.basename("c:\\nodejs\\index.js"));

// console.log(path.basename("c:\\basename\\node.js", ".js"));

// console.log(path.dirname("c:\\nodejs\\index.js"));
// console.log(path.extname("c:\\nodejs\\index.js"));


// console.log(path.join("c:","user","Sri","react",".."));

// console.log(path.join("c:","user","Sri","react","index.js"));

// console.log(
//   path.normalize("c:\\Users\\\\SriSakthi\\react\\\\features\\..")
// );


// console.log(path.parse("c:\\courses\\\\redux\\store\\features\\"));

// console.log(path.parse("c:\\User\\reactFiles\\react\\app.js").name);

console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).ext);