'use strict';
/* eslint-env node, mocha */

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');
const path = require('path');
describe('test/{{name}}.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/{{name}}-test',
      customEgg: path.join(__dirname, '../node_modules/nuxt-egg')
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect(function (res) {
        assert(/hello world/.test(res.text), true, "missing hello world");
      })
      .expect(200);
  });
});
