require('dotenv').config()
const ftp  = require('basic-ftp')
const path = require('path')

async function deploy() {
  const client = new ftp.Client()
  client.ftp.verbose = false

  try {
    await client.access({
      host:     process.env.FTP_HOST_TRUSTAI,
      user:     process.env.FTP_USER_TRUSTAI,
      password: process.env.FTP_PASS_TRUSTAI,
      port:     21,
      secure:   false,
    })

    console.log('Connected to FTP...')
    await client.ensureDir('/trust-ai')
    await client.clearWorkingDir()
    await client.uploadFromDir('./out')
    console.log('Deployed trust-ai.com successfully!')

  } catch (e) {
    console.error('FTP error:', e.message)
  }

  client.close()
}

deploy()
