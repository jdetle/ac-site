import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import T from "../components/typography";
const Title = "Alyssa Cuda";
const Explanation = "Motivated to make tech for everyone";

const LinkContainer = styled.div`
  background: ${props => props.theme.linkContainerColor};
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-rows: 40px repeat(3, 1fr) 40px;
  grid-gap: 0.5rem;
  div:hover {
    height: 100%;
  }
  div {
    transition: height 0.5s ease;
    height: 80%;
  }
`;
const ProfilePictureContainer = styled.div`
  background: teal;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: end3;
  grid-gap: 0.5rem;
`;
const ProfessionalLink = styled.div`
  align-self: center;
  background-color: pink;
  grid-row-start: 2;
  grid-row-end: 2;
`;
const CVLink = styled.div`
  align-self: center;
  grid-row-start: 3;
  grid-row-end: 3;
  background-color: orange;
`;
const BlogLink = styled.div`
  align-self: center;
  grid-row-start: 4;
  grid-row-end: 4;
  background-color: indigo;
`;
export default function Index() {
  return (
    <>
      <LinkContainer>
        <ProfessionalLink />
        <CVLink />
        <BlogLink />
      </LinkContainer>

      <ProfilePictureContainer></ProfilePictureContainer>
    </>
  );
}
