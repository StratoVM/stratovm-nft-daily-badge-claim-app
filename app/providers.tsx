"use client";

import { PropsWithChildren, useState } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";

// Config
import { config } from "@/common/config/wagmi.config";
import { muiTheme } from "@/common/config/mui.config";

export function Providers(props: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
