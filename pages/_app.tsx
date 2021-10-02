// import "../styles/main.scss";
import React from "react";
import NextNprogress from "nextjs-progressbar";
import PropTypes from "prop-types";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="green"
        startPosition="0.3"
        stopDelayMs="200"
        height="5"
      />

      <Component {...pageProps} />

      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
}

NextNprogress.propTypes = {
  color: PropTypes.string,
  startPosition: PropTypes.string,
  stopDelayMs: PropTypes.string,
  options: PropTypes.object,
};
