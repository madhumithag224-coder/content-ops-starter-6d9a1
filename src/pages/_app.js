import '../css/main.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LQ1XGRHCQS"
                strategy="afterInteractive"
            />

            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-LQ1XGRHCQS');
                `}
            </Script>

            <Component {...pageProps} />
        </>
    );
}
