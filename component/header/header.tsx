import Head from "next/head";
import Nav from "../nav/nav";

const header = () => {
  return (
    <>
      <Head>
        <title>My next.js blog</title>
      </Head>
      <header>
        <Nav />
      </header>
    </>
  );
};

export default header;
