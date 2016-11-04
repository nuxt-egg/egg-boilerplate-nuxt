'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  devdep: [
    'egg-ci',
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg',
    'supertest',
    'intelli-espower-loader',
    'power-assert',
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
  registry: 'https://r.cnpmjs.org',
};

