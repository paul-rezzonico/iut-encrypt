'use strict';

function sha1(str) {
  return require('crypto').createHash('sha1').update(str).digest('hex');
}

function compareSha1(str, hash) {
  return sha1(str) === hash;
}

export default {
  sha1,
  compareSha1
};
