import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/global.scss';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
