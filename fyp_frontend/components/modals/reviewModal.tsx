import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import StringInput from "../inputComponents/StringInput";

interface ReviewModalProps {
  comment: { text: string; error: string };
  label: string;
  rating: number;
  setRating: (newValue: number) => void;
  setValue: (props: { text: string; error: string }) => void;
  handleSubmit: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  comment,
  label,
  setValue,
  rating,
  setRating,
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
      <Button
        style={{
          backgroundColor: "white",
          color: "darkblue",
          // fontWeight: "bold",
        }}
        variant="outlined"
        className={label == "User" ? "w-40" : "w-40"}
        onClick={handleClickOpen}
      >
        Review {label}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review {label}</DialogTitle>
        <DialogContent>
          <div className="mb-3">
            <DialogContentText>
              Please Review the product with a review comment and rating.
            </DialogContentText>
          </div>

          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(_, newValue) => {
              setRating(newValue || 5);
            }}
          />

          <StringInput
            value={comment}
            label="Review"
            setValue={setValue}
            isMultiline={true}
            isModal={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              if (!comment.text)
                setValue({ text: comment.text, error: "Field is Empty" });
              if (comment.text) {
                handleSubmit();
                handleClose();
                router.reload();
              }
            }}
          >
            Review
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReviewModal;
