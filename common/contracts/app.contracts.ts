export type Transaction = {
  hash: `0x${string}`;
  status: "pending" | "success" | "reverted";
};
