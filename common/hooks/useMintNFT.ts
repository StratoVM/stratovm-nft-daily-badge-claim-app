import { useCallback, useEffect } from "react";
import { useAccount, useTransactionReceipt, useWriteContract } from "wagmi";

// Static
import { MINT_CONTRACT_ADDRESS } from "../static/app.static";
import { MINT_ABI } from "../static/mint.abi";

export const useMintNFT = (onSuccess?: () => void) => {
  const { address } = useAccount();

  const { data: transactionHash, writeContractAsync } = useWriteContract();
  const { data: transactionDetails } = useTransactionReceipt({
    hash: transactionHash,
  });

  useEffect(() => {
    if (transactionDetails) {
      if (transactionDetails.status === "success") {
        onSuccess?.();
      }
    }
  }, [transactionDetails, onSuccess]);

  const mintNFT = useCallback(() => {
    return writeContractAsync({
      account: address,
      address: MINT_CONTRACT_ADDRESS,
      abi: MINT_ABI,
      functionName: "mint",
    });
  }, [writeContractAsync, address]);

  return { mintNFT, transactionDetails, transactionHash };
};
