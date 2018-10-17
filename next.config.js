'use strict';
// const fs = require('fs');
// const path = require('path');

// const outputFolder = path.join(__dirname, 'webpa');
// const folderStat = fs.existsSync(outputFolder);
// if (!folderStat) {
//   fs.mkdirSync(outputFolder);
// }

module.exports = {
  webpack: config => {
    // const data = JSON.stringify(config);
    // console.log('>>> writing:', 'webpa.json');
    // fs.writeFileSync(path.join(outputFolder, 'webpa.json'), data);
    // console.log('>>> writed over:', "webpa.json. Let's use it");
    // console.log(config);
    return config;
  },
};
