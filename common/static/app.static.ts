export const MINT_CONTRACT_ADDRESS = (process.env
  .NEXT_PUBLIC_MINT_CONTRACT_ADDRESS ?? "") as `0x${string}`;

export const EXPLORER_URL =
  "https://explorer.stratovm.io/";

export const CAMPAIGN_DISCLAIMER_KEY = "campaign-disclaimer-seen";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const HOTJAR_ID = Number.parseInt(
  process.env.NEXT_PUBLIC_HOTJAR_ID ?? "0",
);
export const HOTJAR_SV = Number.parseInt(
  process.env.NEXT_PUBLIC_HOTJAR_SV ?? "0",
);
