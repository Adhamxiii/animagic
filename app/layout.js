import { ThemeProvider } from "@/lib/ThemeContext";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Animagic",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${sora.className}`}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
