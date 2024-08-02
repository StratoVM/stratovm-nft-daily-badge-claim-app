import { ReactNode } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CampaignDialog = ({ isOpen, onClose }: Props) => {
  const closeDialog = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          StratoVM Campaign
          <IconButton size="small" onClick={closeDialog}>
            <IconX />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          To gain access to the faucet please join our{" "}
          <Link href="https://discord.gg/stratovm" target="_blank">
            Discord
          </Link>{" "}
          and get verified.
        </Box>
      </DialogContent>
    </Dialog>
  );
};
