import { useMemo } from "react";
import { Box, LinearProgress, Link, Typography } from "@mui/material";

// Contracts
import { Transaction } from "@/common/contracts/app.contracts";

// Static
import { EXPLORER_URL } from "@/common/static/app.static";

// Utils
import { shortenAddress } from "@/common/utils/web3.utils";

type TransactionDetailsProps = {
  transaction: Transaction;
};

export const TransactionDetails = ({
  transaction,
}: TransactionDetailsProps) => {
  const statusColor = useMemo(() => {
    if (transaction.status === "success") {
      return "success.main";
    }

    if (transaction.status === "reverted") {
      return "error";
    }

    return "primary";
  }, [transaction]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Box display="flex" gap={1}>
        <Typography>NFT Minting</Typography>
        <Typography color={statusColor}>
          {transaction.status === "success" ? "Success!" : transaction.status}
        </Typography>
      </Box>
      <Typography variant="caption" color="text.disabled">
        View on explorer -{" "}
        <Link
          href={`${EXPLORER_URL}/tx/${transaction.hash}`}
          target="_blank"
          color={statusColor}
        >
          {shortenAddress(transaction.hash)}
        </Link>
      </Typography>
      {transaction.status === "pending" && (
        <Box width="100%">
          <LinearProgress color="success" />
        </Box>
      )}
      {transaction.status === "success" && (
        <Typography variant="subtitle1">
          You have minted 1 StratoVM Test NFT
        </Typography>
      )}
    </Box>
  );
};
