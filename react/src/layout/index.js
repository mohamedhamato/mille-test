import Header from './Header';
import Head from "next/head";
import React from "react";
const Layout = (props)=>{
    return(
        <>
            <Head>
                <title>Millennium</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
        <Header headerInfo={props.headerData}/>
        <main>
            {props.children}
        </main>
        </>
    )
};

export default Layout;