"use client";

import { shortenAddress } from "@/common/utils/web3.utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

// Components
import { Button } from "@mui/material";

type WalletConnectProps = {
  className?: string;
};

export function WalletConnect({ className }: WalletConnectProps) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  return (
    <Button variant="contained" onClick={() => open()} className={className}>
      {address ? shortenAddress(address) : "CONNECT WALLET"}
    </Button>
  );
}
