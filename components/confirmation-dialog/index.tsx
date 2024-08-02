import { ReactNode } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { IconX } from "@tabler/icons-react";

type SettingsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: ReactNode | string;
};

export const ConfirmationDialog = ({
  isOpen,
  onConfirm,
  onClose,
  title = "Are you sure?",
  description,
}: SettingsDialogProps) => {
  const confirm = () => {
    onConfirm();
    onClose();
  };

  const closeDialog = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {title}
          <IconButton size="small" onClick={closeDialog}>
            <IconX />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {description && <Box>{description}</Box>}
        <Box
          display="flex"
          gap={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button onClick={closeDialog} sx={{ flex: 1 }} color="warning">
            Cancel
          </Button>
          <Button onClick={confirm} sx={{ flex: 1 }}>
            Confirm
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
