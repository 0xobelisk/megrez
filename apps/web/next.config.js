/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@repo/ui"],
  // 配置静态和动态页面的生成策略
  experimental: {
    // 移除 serverActions 配置，因为它现在是默认启用的
  }
};

module.exports = nextConfig;
