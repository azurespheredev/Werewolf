import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "@/contexts/StoreProvider";
import { Bounce, ToastContainer } from "react-toastify";

const barElLoro = localFont({
  src: "./fonts/Bar el Loro.otf",
  variable: "--font-bar-el-loro",
});

const reward = localFont({
  src: "./fonts/Reward.ttf",
  variable: "--font-reward",
});

const topSecret = localFont({
  src: "./fonts/Top Secret.ttf",
  variable: "--font-top-secret",
});

export const metadata: Metadata = {
  title: "Werewolf Game",
  description: "Online multiplayer Werewolf game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barElLoro.variable} ${reward.variable} ${topSecret.variable}`}>
      <body className={`${barElLoro.className} antialiased`}>
        <StoreProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
