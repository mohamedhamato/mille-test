import Document,{Head,Main,Html,NextScript} from "next/document";
import React from "react";
import favIcon from "../src/assets/imgs/fav.png";

export default class AppDocument extends Document{
    render() {
        return(
            <Html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="millennium simple test "/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined&ver=1.0.0" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
                    <link rel="icon" href={favIcon} />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
};
