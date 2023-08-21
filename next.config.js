/** @type {import('next').NextConfig} */

const pwa = require('next-pwa')({
    dest: 'public',
    register: true,
    sw: "/sw.js"
})

const nextConfig = {

}

module.exports = pwa({
    ...nextConfig
})
