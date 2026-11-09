const fs = require('fs'), path = require('path'), os = require('os')
const tokenFile = path.resolve(os.tmpdir(), 'anonymous_token')
try { if (!fs.existsSync(tokenFile)) fs.writeFileSync(tokenFile, '', 'utf-8') } catch (e) {}
require('./server').serveNcmApi({ checkVersion: false })
