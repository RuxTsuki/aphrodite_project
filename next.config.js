/** @type {import('next').NextConfig} */
const path = require("path");
const withPWAInit = require("next-pwa");

const withPWA = withPWAInit({
    dest: 'public',
    register: true,
    skipWaiting: true
})

const nextConfig = {
    reactStrictMode: true,
}

module.exports = withPWA(
    nextConfig
)
