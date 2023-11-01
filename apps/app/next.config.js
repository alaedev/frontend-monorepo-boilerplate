// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = () => {
  // const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
  // const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  // const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
  // const isDevelopBranch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'develop'
  

  // const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL

  const env = {
    NEXT_PUBLIC_APP_URL: (() => {
      if (isDev) return 'Local App URL'
      if (isProd) return 'Prod App URL'
      if (isPreview && isDevelopBranch) return 'Dev App URL'
      return vercelUrl
    })(),
  }
  return {
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {
      '@mui/icons-material': {
        transform: '@mui/icons-material/{{member}}',
      },
    },
    env,
    transpilePackages: ['ui'],
    i18n: {
      localeDetection: true,
      defaultLocale: 'es',
      locales: ['en', 'es'],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
}
