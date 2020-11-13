import Head from 'next/head'
import React from "react";
import Layout from "../src/layout";
import AppData from '../data/'
import CoverSection from "../src/sections/Cover";
import FeatureSection from "../src/sections/Features";
export default function Home() {
  return (
    <>
        <Head>
            <title>Millennium Home</title>
        </Head>
        <Layout headerData ={AppData.headerData} >
            <CoverSection coverData={AppData.coverData}/>
            <FeatureSection featureData={AppData.featureData}/>
        </Layout>
    </>
  )
}
