import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-xl font-bold">My Portfolio</span>
            <div className="space-x-6">
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white text-center py-8">
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}