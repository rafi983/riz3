/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    emailJsServiceID: process.env.EMAIL_JS_SERVICE_ID,
    emailsTemplateID: process.env.EMAIL_JS_TEMPLATE_ID,
    emailjsPublicKey: process.env.EMAIL_JS_PUBLIC_KEY,
  },
};

export default nextConfig;
