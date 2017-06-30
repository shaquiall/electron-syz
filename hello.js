var addon = require('./build/Release/hello');
//var addon = require('bindings')('hello.node');
console.log(addon.hello()); // 'world'



