import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import StyledFooter from "./footer";
import StyledHeader from "./header";
import T from "./typography";

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 64px 1fr 64px;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  header {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: end3;
  }
  nav {
    grid-column-start: 3;
    grid-column-end: end3;
    grid-row-start: 1;
    font-size: 1.5rem;
    font-weight: 500;
    place-items: center;
    span,
    a {
      place-self: center;
      place-items: center;
    }
    @media (max-width: 420px) {
      font-size: 1rem;
    }
  }
  footer {
    grid-column-start: 1;
    grid-column-end: end3;
    grid-row-start: 3;
    grid-row-end: end3;
    background-color: ${props => props.theme.footerColor};
  }
`;
const DocumentTitle = "Alyssa Cuda";
export default ({ children, title = DocumentTitle }) => (
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
        <span>{" · "}</span>
        <Link href="/contact">
          <T.a aria-label={"Link to the contacts page"} tabIndex={0}>
            Contact
          </T.a>
        </Link>
      </nav>
    </StyledHeader>
    <>{children}</>
    <StyledFooter role="contentinfo">
      {"All rights reserved: Alyssa Cuda 2019"}
    </StyledFooter>
  </Layout>
);
