import Layout from "../components/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

                                                                                                                                      /*
                                                                                                                                      export async function getInitialProps(args) {
                                                                                                                                        const { Component, req } = args;
                                                                                                                                        let pageProps = {};
                                                                                                                                        if (Component.getInitialProps) {
                                                                                                                                          pageProps = { ...(await Component.getInitialProps(args)), ...pageProps };
                                                                                                                                        }
                                                                                                                                        console.log("here");
                                                                                                                                        if (req) {
                                                                                                                                          // server side only
                                                                                                                                          const { readdir } = require("fs");
                                                                                                                                          pageProps = { pages: (await readdir("./content/pages")).map((file) => file.replace(/\.md$/, "")), ...pageProps };
                                                                                                                                        }

                                                                                                                                        return pageProps;
                                                                                                                                      }
                                                                                                                                      */
