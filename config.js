'use strict';
const dotenv = require('dotenv')
const asset = require('assert');
const { assert } = require('console');

dotenv.config()

const {PORT, HOST, HOST_URL, EMAIL_SERVER, PASSWORD} = process.env;

assert(PORT, 'POST is required');
assert(HOST, 'Host is required');

module.exports = {
    port: PORT,
    host: HOST,
    host_url: HOST_URL,
    email_server: EMAIL_SERVER,
    password: PASSWORD
}
