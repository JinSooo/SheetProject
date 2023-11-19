// import 'antd/dist/reset.css'
import type { Metadata } from 'next'
import '../lib/css/globals.css'
import StyledComponentsRegistry from '@/components/common/AntdRegistry'

export const metadata: Metadata = {
  title: 'Sheet Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
