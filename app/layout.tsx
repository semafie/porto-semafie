import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restu Imam Safii | Backend Developer, Frontend Developer & DevOps Engineer Portfolio',
  description: 'Portfolio profesional Restu Imam Safii - Backend Developer, Frontend Developer, dan DevOps Engineer berpengalaman. Spesialisasi Laravel, Flutter, MySQL, Docker, CI/CD, dan Linux Server. Berpengalaman di Upylon, Transrafa, dan Rescom.',
  keywords: [
    'Restu Imam Safii',
    'Backend Developer Indonesia',
    'Frontend Developer Indonesia', 
    'DevOps Engineer Indonesia',
    'Laravel Developer',
    'Flutter Developer',
    'MySQL Database',
    'Docker Container',
    'CI/CD Pipeline',
    'Linux Server Administration',
    'Web Development Indonesia',
    'Mobile App Development',
    'React Developer',
    'Tailwind CSS',
    'Portfolio Developer',
    'Jember Developer',
    'Upylon',
    'Transrafa',
    'Rescom',
    'Full Stack Developer',
    'API Development',
    'Database Design',
    'Server Management',
    'Cloud Infrastructure',
    'Git Version Control',
    'Agile Development',
    'Software Engineer Indonesia'
  ],
  authors: [{ name: 'Restu Imam Safii' }],
  creator: 'Restu Imam Safii',
  publisher: 'Restu Imam Safii',
  category: 'Technology',
  classification: 'Portfolio',
  openGraph: {
    title: 'Restu Imam Safii | Backend Developer, Frontend Developer & DevOps Engineer Portfolio',
    description: 'Portfolio profesional Restu Imam Safii - Backend Developer, Frontend Developer, dan DevOps Engineer berpengalaman. Spesialisasi Laravel, Flutter, MySQL, Docker, CI/CD, dan Linux Server.',
    url: 'https://semafie.upylon.com',
    siteName: 'Restu Imam Safii Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Restu Imam Safii - Backend, Frontend & DevOps Engineer Portfolio',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restu Imam Safii | Backend Developer, Frontend Developer & DevOps Engineer Portfolio',
    description: 'Portfolio profesional Restu Imam Safii - Backend Developer, Frontend Developer, dan DevOps Engineer berpengalaman.',
    images: ['/og-image.png'],
    creator: '@semafie',
    site: '@semafie',
  },
  metadataBase: new URL('https://semafie.upylon.com'),
  alternates: {
    canonical: 'https://semafie.upylon.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  generator: 'Next.js',
  applicationName: 'Restu Imam Safii Portfolio',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Restu Imam Safii",
              "jobTitle": "Backend Developer, Frontend Developer, DevOps Engineer",
              "url": "https://semafie.upylon.com",
              "sameAs": [
                "https://github.com/semafie",
                "https://linkedin.com/in/restu-imam-safii"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Upylon"
                },
                {
                  "@type": "Organization", 
                  "name": "Transrafa"
                },
                {
                  "@type": "Organization",
                  "name": "Rescom"
                }
              ],
              "knowsAbout": [
                "Laravel",
                "Flutter", 
                "MySQL",
                "Docker",
                "CI/CD",
                "Linux Server",
                "React",
                "Tailwind CSS",
                "Backend Development",
                "Frontend Development",
                "DevOps"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jember",
                "addressCountry": "ID"
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Restu Imam Safii Portfolio",
              "url": "https://semafie.upylon.com",
              "description": "Portfolio profesional Restu Imam Safii - Backend Developer, Frontend Developer, dan DevOps Engineer",
              "author": {
                "@type": "Person",
                "name": "Restu Imam Safii"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
