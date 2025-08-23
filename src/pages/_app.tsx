import "@/styles/globals.css";
import { AppProps, Navbar, Toaster } from "@/lib/imports";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="p-4 bg-white">
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </main>
    </>
  );
}
