'use strict'; // eslint-disable-line
const egg = require('egg');
// const next = require('next');
const path = require('path');
const cpuNum = require('os').cpus().length;

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });

const options = {
  port: process.env.PORT || 6001,
  baseDir: path.join(__dirname, '../'),
};

if (
  /(local)|(test)|(daily)/.test(process.env.EGG_SERVER_ENV)
  || /(local)|(test)|(daily)/.test(process.env.envSign)
) {
  options.workers = 1;
} else {
  options.workers = Math.min(7, (cpuNum - 1 || 1));
}

egg.startCluster(options, () => {
  console.log('====================================');
  console.log('The service running on port 6001');
  console.log('====================================');
});

// app.prepare()
//   .then(() => {
//     egg.startCluster(options, () => {
//       console.log('====================================');
//       console.log('The service running on port 6001');
//       console.log('====================================');
//     });
//   });
