var setup = require('./setup');
var config = require('../../config');
global._ = require('underscore');
require('../fixtures/solutions');

global[config.exportVarName] = require('../../src/' + config.entryFileName);
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
setup();
