/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NYT_API_URL: process.env.NYT_API_URL,
        NYT_API_KEY: process.env.NYT_API_KEY,
    },
}

module.exports = nextConfig
