#!/usr/bin/env node

const workshopper = require('workshopper-adventure'),
  path = require('path');

function fpath(f) {
  return path.join(__dirname, f);
}

const shop = workshopper({
  name: 'demo-workshopper',
  title: 'Demo Workshopper',
  subtitle: 'Learn how to create a workshopper lesson',
  appDir: __dirname,
  exerciseDir: fpath('./exercises/'),
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass'),
});

require('./exercises/menu.json').forEach((name) => {
  shop.add(name);
});

module.exports = shop;
