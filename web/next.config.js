/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  // ホームディレクトリの lockfile をプロジェクトルートと誤認しないようにする
  turbopack: {
    root: process.cwd(),
  },
}

module.exports = nextConfig
