import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&family=Oswald:wght@200;300&family=Poppins:wght@400;600&family=Ranchers&family=Roboto+Condensed:ital@1&family=Tapestry&display=swap" rel="stylesheet" />

                    <title>ig.news</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            )

    }
}