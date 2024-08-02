"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Box, Button } from "@mui/material";

// Components
import { WalletConnect } from "../wallet";
import { TransactionDetails } from "./TransactionDetails";

// Hooks
import { useMintNFT } from "@/common/hooks/useMintNFT";

// Contracts
import { Transaction } from "@/common/contracts/app.contracts";
import { toast } from "react-toastify";

export const Mint = () => {
  const [mintTransaction, setMintTransaction] = useState<
    Transaction | undefined
  >();

  const { isConnected } = useAccount();
  const { mintNFT, transactionDetails, transactionHash } = useMintNFT();

  useEffect(() => {
    if (!transactionDetails && !transactionHash) {
      return setMintTransaction(undefined);
    }

    if (!transactionDetails && transactionHash) {
      return setMintTransaction({ hash: transactionHash, status: "pending" });
    }

    if (transactionDetails) {
      return setMintTransaction({
        hash: transactionDetails.transactionHash,
        status: transactionDetails.status,
      });
    }
  }, [transactionDetails, transactionHash]);

  const handleNFTMint = async () => {
    try {
      await mintNFT();
    } catch (error: any) {
      if (error?.cause?.reason) {
        toast.error(error.cause.reason);
        return;
      }

      toast.error("Need to wait for 24h for minting a new Badge!");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      justifyContent="center"
      minWidth={350}
    >
      <Button
        onClick={handleNFTMint}
        variant="contained"
        disabled={!isConnected}
        fullWidth
      >
        Mint NFT
      </Button>
      {!isConnected && <WalletConnect className="w-full" />}
      {mintTransaction && <TransactionDetails transaction={mintTransaction} />}
    </Box>
  );
};
