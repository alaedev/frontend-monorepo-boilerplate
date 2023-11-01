import { Avatar, Grid, Stack, Typography } from '@mui/material'
import { ParseKeys } from 'i18next'
import Link from 'next/link'
import { ReactElement, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useMedia } from '@modules/Media/hooks/useMedia'
import { Breadcrumbs } from '@modules/Shared/components/Breadcrumbs/Breadcrumbs'
import { Header } from '@modules/Shared/components/Header'
import * as useWindowSize from '@modules/Shared/hooks/useWindowSize'
import { globalStore } from '@modules/Shared/store/globalStore'

import { CheckCenterMenu } from '../components/CentersMenu'
import { useInitials } from '../hooks/useInitials'

type DefaultLayoutProps = {
  children: ReactElement
  title: ParseKeys
  pageTitle?: ParseKeys
  headerRightContent?: ReactElement
}
export const DefaultLayout = ({ children, title, pageTitle, headerRightContent }: DefaultLayoutProps) => {
  const { t } = useTranslation(['common'])
  const size = useWindowSize.useWindowSize('container')

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
