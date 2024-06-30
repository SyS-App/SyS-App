/** @type {import('next').NextConfig} */

function getAuthorizedOrigins() {
    const { NEXT_PUBLIC_AUTHORIZED_URLS } = process.env;
    if (!NEXT_PUBLIC_AUTHORIZED_URLS) {
        throw new Error('Environment variables do not contain authorized URLs.');
    }
    return NEXT_PUBLIC_AUTHORIZED_URLS.split(',').map(url => url.trim());
}

const authorizedOrigins = getAuthorizedOrigins();

const cors = {
    origin: function (origin, callback) {
        if (!origin || authorizedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed."))
        }
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    optionsSuccessStatus: 204,
}

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: ""
            },
            // {
            //     protocol: "https",
            //     hostname: "",
            //     port: ""
            // }
        ]
    }
};

export { cors };
export default nextConfig;