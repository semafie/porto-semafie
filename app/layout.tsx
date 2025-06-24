import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restu Imam Safii | Backend, Frontend, DevOps Portfolio',
  description: 'Portofolio Restu Imam Safii - Backend Developer, Frontend Developer, DevOps, Linux Enthusiast. Berpengalaman dengan Laravel, Flutter, MySQL, Docker, CI/CD, Figma, dan teknologi modern lainnya.',
  keywords: [
    'Restu Imam Safii',
    'Portfolio',
    'Backend Developer',
    'Frontend Developer',
    'DevOps',
    'Linux',
    'Laravel',
    'Flutter',
    'MySQL',
    'Docker',
    'CI/CD',
    'Figma',
    'Indonesia',
    'Web Developer',
    'Mobile Developer',
    'React',
    'Tailwind',
    'Jember',
    'Upylon',
    'Transrafa',
    'Rescom',
  ],
  openGraph: {
    title: 'Restu Imam Safii | Backend, Frontend, DevOps Portfolio',
    description: 'Portofolio Restu Imam Safii - Backend Developer, Frontend Developer, DevOps, Linux Enthusiast. Berpengalaman dengan Laravel, Flutter, MySQL, Docker, CI/CD, Figma, dan teknologi modern lainnya.',
    url: 'https://semafie.com',
    siteName: 'Restu Imam Safii Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Restu Imam Safii Portfolio',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restu Imam Safii | Backend, Frontend, DevOps Portfolio',
    description: 'Portofolio Restu Imam Safii - Backend Developer, Frontend Developer, DevOps, Linux Enthusiast.',
    images: ['/og-image.png'],
    creator: '@semafie',
  },
  metadataBase: new URL('https://semafie.com'),
  alternates: {
    canonical: 'https://semafie.com',
  },
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
