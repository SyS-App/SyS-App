
const urls = [
    "https://sysapp.org/",
]


export default async function sitemap() {
    return urls.map(s_url => {
        return {
            url: s_url,
            lastModified: new Date()
        }
    })
}