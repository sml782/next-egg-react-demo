'use strict';

const next = require('next');
const { Controller } = require('egg');

const dev = process.env.NODE_ENV !== 'production';
const nextapp = next({ dev });
const handle = nextapp.getRequestHandler();

class ALLController extends Controller {
  async index() {
    console.log(handle, this.ctx.req, this.ctx.res);
    await handle(this.ctx.req, this.ctx.res);
    // this.ctx.respond = false;
  }
}

module.exports = ALLController;
