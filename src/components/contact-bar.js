import React from "react";
import styled from "styled-components";

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

const Link = styled.a`
  cursor: pointer;
  font-style: italic;
  text-decoration: none;
  color: black;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

const ContactItem = ({ src, alt, value, href }) => (
  <span style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}>
    <Icon src={src} alt={alt} />
    <Link href={href}>{value}</Link>
  </span>
);

const ContactBar = () => (
  <Bar>
    {contactItems.map(item => (
      <ContactItem key={item.value} {...item} />
    ))}
  </Bar>
);

export default ContactBar;
