import "./globals.css";
import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
