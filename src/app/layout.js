import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
