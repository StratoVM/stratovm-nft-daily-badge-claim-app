"use client";

import { useEffect, useState } from "react";
import { hotjar } from "react-hotjar";
import { Typography } from "@mui/material";

// Components
import { Mint } from "@/components/mint";
import { NFTImage } from "@/components/nft-image";
import { CampaignDialog } from "@/components/campaign-dialog";

// Utils
import { getLocalStorage, setLocalStorage } from "@/common/utils/storage.utils";

// Static
import {
  CAMPAIGN_DISCLAIMER_KEY,
  HOTJAR_ID,
  HOTJAR_SV,
} from "@/common/static/app.static";

export default function Home() {
  const [campaignDialogOpen, setCampaignDialogOpen] = useState(false);

  useEffect(() => {
    const seenDisclaimer = getLocalStorage(CAMPAIGN_DISCLAIMER_KEY);
    if (seenDisclaimer !== "true") {
      setCampaignDialogOpen(true);
    }
    hotjar.initialize({ id: HOTJAR_ID, sv: HOTJAR_SV });
  }, []);

  const closeCampaignDialog = () => {
    setLocalStorage(CAMPAIGN_DISCLAIMER_KEY, "true");
    setCampaignDialogOpen(false);
  };

  return (
    <main className="flex flex-col items-center gap-8 p-4 md:p-12">
      <Typography variant="h3" textAlign="center">
      StratoVM Daily Badge NFT Claim
      </Typography>
      <Mint />
      <NFTImage />
      <CampaignDialog
        isOpen={campaignDialogOpen}
        onClose={closeCampaignDialog}
      />
    </main>
  );
}
