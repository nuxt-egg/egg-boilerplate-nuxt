'ues strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  exclude: [
    'test/fixtures',
    'boilerplate',
    'dist',
  ],
  devdep: [
    'autod',
    'eslint',
    'egg-ci',
    'egg-init',
    'npminstall'
  ],
  keep: [
  ],
  semver: [
  ],
  registry: 'http://registry.npm.taobao.org',
};
