import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
remotePatterns:[
 {
  protocol: "https",
  hostname: "cdn.dribbble.com",
}
]
 },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
