// Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "/styles/fonts.sass";
import "/styles/global.sass";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider defaultTheme="light" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
