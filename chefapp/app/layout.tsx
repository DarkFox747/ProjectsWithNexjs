import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "App Cocina",
  description: "App papafritesca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
