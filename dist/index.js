
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./testpackage.cjs.production.min.js')
} else {
  module.exports = require('./testpackage.cjs.development.js')
}
