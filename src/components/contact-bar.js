import React from "react";
import styled from "styled-components";

import { WithLink } from "./common";

import linkedin from "../icons/linkedin.png";
import email from "../icons/email.png";
import github from "../icons/github.png";

const contactItems = [
  {
    src: linkedin,
    alt: "LinkedIn logo",
    value: "@evanpeterson17",
    href: "https://www.linkedin.com/in/evanpeterson17/"
  },
  {
    src: email,
    alt: "Email icon",
    value: "evanpeterson17@gmail.com"
  },
  {
    src: github,
    alt: "Github logo",
    value: "@epeters3",
    href: "https://www.github.com/epeters3"
  }
];

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  width: ${p => p.theme.size.lg};
  height: ${p => p.theme.size.lg};
  margin-right: ${p => p.theme.size.sm};
`;

const CItem = styled.span`
  display: flex;
  align-items: center;
  margin: ${p => p.theme.size.sm};
`;

const ContactItem = ({ src, alt, value, href }) => (
  <CItem>
    {href ? (
      <WithLink href={href}>
        <Icon src={src} alt={alt} />
        <span>{value}</span>
      </WithLink>
    ) : (
      <>
        <Icon src={src} alt={alt} />
        <span>{value}</span>
      </>
    )}
  </CItem>
);

const ContactBar = () => (
  <Bar>
    {contactItems.map(item => (
      <ContactItem key={item.value} {...item} />
    ))}
  </Bar>
);

export default ContactBar;
