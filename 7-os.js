const os = require("os");

const user = os.userInfo();
//userinfo
console.log(user);

//uptime
console.log(`System uptime is ${os.uptime} second`);

const currenOS = 