import {Nunito} from "next/font/google";
import "./globals.css";

const nunitoFont = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoFont.className}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
