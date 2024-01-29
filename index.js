'use strict';

function sha1(str) {
  return require('crypto').createHash('sha1').update(str).digest('hex');
}

exports.sha1 = Encrypt.sha1;
