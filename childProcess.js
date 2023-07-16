let cp = require('child_process');
// cp.execFileSync("calc");
// console.log("let's run another file ",cp.execFileSync("node test.js"))
// let os = require('os');
// console.log(os.hostname());
let content = cp.execSync("node test.js");//will open another file test.js
console.log("test js content " + content);