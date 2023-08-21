/** @type {import('next').NextConfig} */

const pwa = require('next-pwa')({
    dest: 'public',
    sw: ""
})

const nextConfig = {
    ...pwa
}

module.exports = nextConfig
