import Head from "next/head";
import '../styles/root/globals.scss'
function MyApp({ Component , pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <title>Surge 2023</title>
                <meta
                    name="description"
                    content="Shiv Nadar IOE's annual Sports Fest"
                />
                <link rel="icon" href="/Images/Favicon.png" />
            </Head>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
}

export default MyApp;