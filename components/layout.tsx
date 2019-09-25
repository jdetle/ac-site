import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import StyledFooter from "./footer";
import StyledHeader from "./header";
import T from "./typography";

const Layout = styled.div`
display: grid  
grid-template-rows: 3,

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  header {
    position: fixed;
    top: 0;
    height: 10%;
    width: 100%;
  }
  nav {
    font-size: 2rem;
    font-weight: 500;

    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }
  footer {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 10%;
    flex: 0 1 2rem;
  }
`;

export default ({ children, title = "Buzzwords Of IoT" }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <StyledHeader
      aria-label="Header containing links to Home, buzzwords, and about page"
      tabIndex={0}
    >
      <nav role="navigation">
        <Link href="/">
          <T.a aria-label={"Link to the home page"} tabIndex={0}>
            Home
          </T.a>
        </Link>
        <span>{" // "}</span>
        <Link href="/contact">
          <T.a aria-label={"Link to the contacts page"} tabIndex={0}>
            Contact
          </T.a>
        </Link>
      </nav>
    </StyledHeader>
    <div style={{ height: "100%" }}>{children}</div>
    <StyledFooter role="contentinfo">
      {"All rights reserved: Alyssa Cuda 2019"}
    </StyledFooter>
  </Layout>
);
