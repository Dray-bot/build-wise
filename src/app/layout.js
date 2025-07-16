// layout.js
import './globals.css'
import Navbar from '../components/Navbar'
// app/layout.js
import 'leaflet/dist/leaflet.css'


export const metadata = {
  title: 'Buildwise | We Build Your Vision',
  description: 'Professional construction services for modern businesses and homes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
