"use client";

import { Box, Link, styled } from "@mui/material";

// Components
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-4">
      <Box display="flex" gap={2}>
        <FooterLink
          href="https://docs.stratovm.io/protocol/terms-of-use"
          target="_blank"
        >
          Terms of Use
        </FooterLink>
        <FooterLink href="https://docs.stratovm.io/" target="_blank">
          Docs
        </FooterLink>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <FooterLink
          href="https://medium.com/@StratoVM_"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <Image
            src="medium.svg"
            alt="Medium icon"
            className="text-white"
            width={24}
            height={24}
          />
        </FooterLink>
        <FooterLink
          href="https://twitter.com/StratoVM_"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <Image
            src="x.svg"
            alt="X icon"
            className="text-white"
            width={24}
            height={24}
          />
        </FooterLink>
        <FooterLink
          href="https://discord.com/invite/StratoVM"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <Image
            src="discord.svg"
            alt="Discord icon"
            className="text-white"
            width={24}
            height={24}
          />
        </FooterLink>
      </Box>
    </footer>
  );
};

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
