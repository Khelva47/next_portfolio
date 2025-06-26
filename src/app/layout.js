import "./globals.css";

export const metadata = {
  title: "My portfolio",
  description: "My NextJs portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
