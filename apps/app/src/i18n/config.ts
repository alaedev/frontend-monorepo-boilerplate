/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonES from '@public/locales/es/common.json'
import commonEN from '@public/locales/en/common.json'

export const defaultNS = 'common'
export const resources = {
  es: {
    common: commonES,
  },
  en: {
    common: commonEN,
  },
} as const

const i18n = createInstance({
  lng: 'es',
  fallbackLng: 'es',
  ns: ['common'],
  resources,
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: true,
  },
})
i18n.use(initReactI18next).init()

export default i18n
