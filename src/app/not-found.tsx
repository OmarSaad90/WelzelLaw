import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Key Step Legal',
  robots: { index: false, follow: false },
}

// Reuses the article page's existing not-found styling (.ap-not-found).
export default function NotFound() {
  return (
    <main className="ap-not-found">
      <p>Page not found.</p>
      <Link href="/insights">← Back to Insights</Link>
    </main>
  )
}
