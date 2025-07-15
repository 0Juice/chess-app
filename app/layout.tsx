import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";

export const metadata: Metadata = {
  	title: "Chesshub",
	description:
		"Play chess online against powerful AI opponents, challenge friends, and compete with players worldwide. Chesshub is the ultimate platform for chess enthusiasts — offering casual and competitive gameplay anytime, anywhere. Join the global chess community today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem={ true }
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
  );
}
