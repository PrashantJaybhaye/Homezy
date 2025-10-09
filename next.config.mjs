/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        unoptimized: true,
        domains: [
            'media.graphassets.com',
            'lh3.googleusercontent.com',
            'api.dicebear.com' // For avatar generation in testimonials
        ]
    }
};

export default nextConfig;
