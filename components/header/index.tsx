"use client";

// Components
import { LogoText } from "@/components/logo";
import { WalletConnect } from "@/components/wallet";

export const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-between gap-4 p-4 md:flex-row">
      <LogoText />
      <WalletConnect />
    </header>
  );
};
