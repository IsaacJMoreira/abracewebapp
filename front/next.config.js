/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'thumbor.forbes.com',
              
            },
            {
              protocol: 'https',
              hostname: 'm.vitoria.es.gov.br',
              
            },
          ],
        },
      
}

module.exports = nextConfig
