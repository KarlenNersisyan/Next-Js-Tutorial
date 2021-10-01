// import "../styles/main.scss";
import React from "react";
import NextNprogress from "nextjs-progressbar";
import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />

      <Component {...pageProps} />

      <NextNProgress options={{ easing: "ease", speed: 500 }} />

      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
}

NextNProgress.propTypes = {
  color: PropTypes.string,
  startPosition: PropTypes.number,
  stopDelayMs: PropTypes.number,
  options: PropTypes.object,
};
