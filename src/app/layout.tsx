import { ResponseHandlerProvider } from "@/contexts/response_handler/response.handler.context"

export const metadata = {
  title: 'Best Sellers - Books',
  description: 'Created by James Amorim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ResponseHandlerProvider>
        <body style={{margin: 0}}>{children}</body>
      </ResponseHandlerProvider>
    </html>
  )
}
