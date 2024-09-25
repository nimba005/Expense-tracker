const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/expense-tracker' : '',
  assetPrefix: isProd ? '/expense-tracker/' : '',
};

export default nextConfig;