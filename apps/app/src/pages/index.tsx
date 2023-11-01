import { DefaultLayout } from '@modules/Shared/Layouts/DedaultLayout'
import { ReactElement } from 'react'

export default function Page() {
  return <div>Homepage</div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout title={'dashboard'}>{page}</DefaultLayout>
}
