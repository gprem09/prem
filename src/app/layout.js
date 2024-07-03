import "./globals.css"; 

export const metadata = {
  title: "Gnanam",
  description: "Personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="ntr-regular">{children}</body>
    </html>
  );
}
