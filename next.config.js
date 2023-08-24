/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: 'public',
    register: true,
    skipWaiting: true,
    workboxOptions: {
        include: ['**/*.{css,js,html,svg,png,ico,txt}']
    }
})

const nextConfig = {
    reactStrictMode: true,
}

module.exports = withPWA(
    nextConfig
)
