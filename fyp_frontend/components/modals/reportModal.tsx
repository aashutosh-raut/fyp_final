import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import StringInput from "../inputComponents/StringInput";

interface ReportModalProps {
  value: { text: string; error: string };
  label: string;
  setValue: (props: { text: string; error: string }) => void;
  handleSubmit: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({
  value,
  label,
  setValue,
  handleSubmit,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Report
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Report {label}</DialogTitle>
        <DialogContent>
          <div className="mb-3">
            <DialogContentText>
              Reporting the {label}, please specify cause of report. The report
              will be checked and moderated by the admin.
            </DialogContentText>
          </div>

          <StringInput
            value={value}
            label="Report"
            setValue={setValue}
            isMultiline={true}
            isModal={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button
            onClick={() => {
              if (!value.text)
                setValue({ text: value.text, error: "Field is Empty" });
              if (value.text) {
                handleSubmit();
                handleClose();
                router.reload();
              }
            }}
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReportModal;
