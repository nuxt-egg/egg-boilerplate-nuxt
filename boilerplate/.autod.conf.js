'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  devdep: [
    'egg-bin',
    'nuxt-egg',
    'autod',
    'eslint',
    'supertest'
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
  registry: 'http://registry.npm.taobao.org',
};
