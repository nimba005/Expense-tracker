const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: '/expense-tracker',
  assetPrefix: '/expense-tracker/',
};

export default nextConfig;