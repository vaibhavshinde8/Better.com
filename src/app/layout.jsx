
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0d572f]"> 
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
