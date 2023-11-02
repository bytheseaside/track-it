import React, { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track it app',
  description: 'Track your gym routine and progress',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: '/favicon.ico',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
