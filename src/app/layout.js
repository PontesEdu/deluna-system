import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400','500', "600"]
});

export const metadata = {
  title: "Deluna System",
  description: "Assistencia de Tecnologia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="assets/favicon.png" />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
