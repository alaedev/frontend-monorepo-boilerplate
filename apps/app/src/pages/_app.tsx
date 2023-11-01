import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { theme } from 'config-mui'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactElement, ReactNode, useState } from 'react'
import { I18nextProvider } from 'react-i18next'


import i18n from '@src/i18n/config'
import { RefreshTokenHandler } from '@modules/Auth/components/RefreshTokenHandler'



export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{
  session: Session
  dehydratedState: unknown
}> & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [interval, setInterval] = useState(0)

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            // staleTime: 5 * (60 * 1000),
            // cacheTime: 10 * (60 * 1000),
          },
        },
      }),
  )

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale={i18n.language}>
      <SessionProvider session={session} refetchInterval={interval} refetchOnWindowFocus={true}>
        <QueryClientProvider client={queryClient}>
          
              <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>
                  <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                  </StyledEngineProvider>
                </ThemeProvider>
              </I18nextProvider>    
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <RefreshTokenHandler setInterval={setInterval} />
      </SessionProvider>
    </LocalizationProvider>
  )
}
