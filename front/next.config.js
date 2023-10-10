/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'thumbor.forbes.com',
              
            },
          ],
        },
      
}

module.exports = nextConfig
