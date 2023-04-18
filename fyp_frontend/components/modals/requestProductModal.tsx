import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import NumberInput from "../inputComponents/NumberInput";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface RentRequestModalProps {
  rentPeriod: { no: number; error: string };
  setRentPeriod: (props: { no: number; error: string }) => void;
  requestDay: Date | null;
  setRequestDay: (newValue: Date | null) => void;
  handleSubmit: () => void;
}

const RentRequestModal: React.FC<RentRequestModalProps> = ({
  rentPeriod,
  setRentPeriod,
  handleSubmit,
  requestDay,
  setRequestDay,
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
        Request Rent
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Rent</DialogTitle>
        <DialogContent>
          <div className="mb-3">
            <DialogContentText>
              Please fill the rent period and the day of request.
            </DialogContentText>
          </div>

          <div className="mb-3">
            <NumberInput
              adorment="Days."
              label="Days of Rent"
              value={rentPeriod}
              setValue={setRentPeriod}
            />
          </div>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Day of Request Day"
              value={requestDay}
              onChange={(newValue) => {
                setRequestDay(newValue); //@ts-ignore
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            // onClick={() => {
            //   if (true) {
            //     handleSubmit();
            //     handleClose();
            //     router.reload();
            //   }
            // }}
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
          >
            Request
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RentRequestModal;
