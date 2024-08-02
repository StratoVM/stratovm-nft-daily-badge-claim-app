import { http, createConfig } from "wagmi";
import { Chain } from "wagmi/chains";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";
import { createWeb3Modal } from "@web3modal/wagmi/react";

// Static
import { WALLET_CONNECT_PROJECT_ID } from "../static/wagmi.static";
import { EXPLORER_URL } from "../static/app.static";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

const metadata = {
  name: "StratoVM",
  description: "StratoVM - Daily Badge NFT Claim",
  url: "TODO", // origin must match your domain & subdomain
  icons: ["TODO"],
};

export const stratovmTestnet: Chain = {
  id: 93747,
  name: "StratoVM Sepolia Testnet",
  nativeCurrency: { name: "StratoVM", symbol: "SVM", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.stratovm.io/"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: EXPLORER_URL,
      apiUrl: "",
    },
  },
  testnet: true,
};

export const config = createConfig({
  chains: [stratovmTestnet],
  connectors: [
    injected(),
    walletConnect({ projectId: WALLET_CONNECT_PROJECT_ID, metadata }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  transports: {
    [stratovmTestnet.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId: WALLET_CONNECT_PROJECT_ID,
});
