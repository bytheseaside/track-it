import React, { PropsWithChildren } from 'react';

import { Metadata } from 'next';

import CustomDrawer from './CustomDrawer';
import ShouldTakeBreak from './ShouldTakeBreak';
import CustomThemeProvider from '../theme';

export const metadata: Metadata = {
  title: 'Track it',
  description: 'Track the progress of your tasks',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: '/icons/favicon.png',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="theme-color" content="#5C7D79" />
      </head>
      <body>
        <CustomThemeProvider>
          <CustomDrawer>
            {children}
            <ShouldTakeBreak />
          </CustomDrawer>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
