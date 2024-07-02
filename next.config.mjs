/** @type {import('next').NextConfig} */

const getAuthorizedOrigins = () => {
    const origins = process.env.NEXT_PUBLIC_BASE_URL;
    if (!origins) {
        throw new Error('Environment variables do not contain authorized URLs.');
    }
    return origins;
};

const authorizedOrigins = getAuthorizedOrigins();

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                destination: authorizedOrigins,
                permanent: true,
            },
        ];
    },
};

export default nextConfig;