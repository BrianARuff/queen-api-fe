import Head from "next/head";
import * as React from "react";
import Container from "@material-ui/core/Container";

const Layout = (props: { children: JSX.Element }) => {
  return (
    <Container>
      <Head>
        <title>Queen API Frontend</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <h1>Queen Songs</h1>
      {props?.children || <h4>No children components in Layout loaded.</h4>}
    </Container>
  );
};

export default Layout;
