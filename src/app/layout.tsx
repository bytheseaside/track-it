import { PropsWithChildren } from 'react';

import { Metadata } from 'next';

import CustomThemeProvider from '../theme';

export const metadata: Metadata = {
  title: 'Track it',
  description: 'Track the progress of your tasks',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#5C7D79',
  icons: '/icons/favicon.png',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      </head>
      <body>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
