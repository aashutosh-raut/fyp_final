import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useGetRentRequestsQuery } from "../../generated/graphql";

interface RentRequestListProps {
  productId: string;
}

const RentRequestsListModal: React.FC<RentRequestListProps> = ({
  productId,
}) => {
  const [open, setOpen] = useState(false);
  const [{ data, fetching, error }] = useGetRentRequestsQuery({
    variables: { productId },
  });
  console.log("Request List", data);
  console.log("Request List Error", error);

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
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        className="h-12 w-44 mr-5"
      >
        Get Rent Requests
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Product Rent Requests</DialogTitle>
        <DialogContent>
          <div className="mb-3">
            <DialogContentText>
              {data?.rentRequests.map((value) => (
                <div className="mt-5">
                  <div className="flex flex-row items-center">
                    <Avatar
                      alt="Remy Sharp"
                      src={value.user.profilePictureUrl}
                      onDoubleClick={() => {
                        router.push(`/users/${value.user.id}`);
                      }}
                    />
                    <h1
                      className="ml-2"
                      onDoubleClick={() => {
                        router.push(`/users/${value.user.id}`);
                      }}
                    >
                      {value.user.username}
                    </h1>
                  </div>

                  <h1>Rent Period:{value.rentPeriod}</h1>
                  <h1>Rent Request Date:{value.createdAt}</h1>
                  <h1>Rent Request Created Date:{value.createdAt}</h1>
                </div>
              ))}
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          {/* <Button
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
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RentRequestsListModal;
