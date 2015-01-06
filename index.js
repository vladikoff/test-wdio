var selenium = require('selenium-standalone');
var webdriverio = require('webdriverio');

var server = selenium({}, []);

var opts = {
desiredCapabilities: {
  browserName: 'firefox'
}
};

// support $FIREFOX_BIN
if (process.env.FIREFOX_BIN) {
opts.desiredCapabilities.firefox_binary = process.env.FIREFOX_BIN;
}

setTimeout(function () {
webdriverio
  .remote(opts)
  .init()
  .url('http://google.com')
}, 3000);
