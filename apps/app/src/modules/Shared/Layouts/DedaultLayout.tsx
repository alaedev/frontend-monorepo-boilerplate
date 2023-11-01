import { ParseKeys } from 'i18next'

import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import Head from 'next/head'

type DefaultLayoutProps = {
  children: ReactElement
  title: ParseKeys
  pageTitle?: ParseKeys
}
export const DefaultLayout = ({ children, title, pageTitle }: DefaultLayoutProps) => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <Head>
        {title && <title>{t(`${title}`)}</title>}
        <meta name="robots" content="noindex" />
      </Head>
      <h1>{pageTitle}</h1>
      {children}
    </>
  )
}
