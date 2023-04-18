import { ReviewsOutlined } from "@mui/icons-material";
import { Avatar, Button, Rating, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useCreateUserReviewMutation,
  useGetUserDetailQuery,
  useDeleteUserMutation,
  useGetUserRoleQuery,
} from "../../generated/graphql";
import { deleteId, deleteToken, getId } from "../../utils/auth";
import * as _ from "lodash";
import ReviewModal from "../../components/modals/reviewModal";
import NavBar from "../../components/NavBar";
import { toast } from "react-toastify";

const INITIAL = { text: "", error: "" };

const UserDetail = () => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState(INITIAL);
  const [userid, setUserId] = useState("");
  const [, createUserReview] = useCreateUserReviewMutation();
  const [, deleteUser] = useDeleteUserMutation();

  const router = useRouter();

  useEffect(() => {
    const { userid } = router.query as any;
    setUserId(userid);
  }, [router]);

  const [{ data, fetching, error }] = useGetUserDetailQuery({
    variables: { userid },
  });

  const [{ data: userRoleObj }] = useGetUserRoleQuery({
    variables: { id: getId() },
  });

  const userRole = userRoleObj?.user?.userRoleName;

  // const userRole = userRoleObj?.user?.userRoleName;

  // console.log("USER ROLE", userRoleObj);

  if (fetching) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;

  const handleUserReview = async () => {
    const res = await createUserReview({
      rating,
      comment: comment.text,
      reviewer: getId(),
      reviewee: userid,
    });
  };

  const handleDeleteUser = async () => {
    const res = await deleteUser({
      id: userid,
    });
    if (res.data && userRole == "USER") {
      deleteId();
      deleteToken();
    }
    if (res.data) {
      toast.success("User Deleted");
      router.push("/products/products-list");
    }
  };

  // console.log(
  //   "Has User already reviewed",
  //   _.some(data?.user?.userReviewsFor, ["reviewer.id", getId()])
  // );

  if (data) {
    return (
      <>
        <NavBar />
        <div
          style={{ backgroundColor: "#fffef5" }}
          className="flex flex-col items-center"
        >
          <div
            style={{ backgroundColor: "#FEFAE0" }}
            className="flex flex-col justify-around mt-7 items-center p-5 rounded-lg w-1/3"
          >
            <Avatar
              alt="Remy Sharp"
              src={data.user?.profilePictureUrl}
              sx={{ width: 112, height: 112 }}
            />
            <h1 className="font-semibold text-gray-600">
              User Name: {data.user?.username}
            </h1>

            <h1 className="text-sm text-gray-600">{data.user?.email}</h1>

            {data.user?.userRoleName == "USER" ? (
              <>
                <Rating
                  name="read-only"
                  value={data.aggregateUserReview._avg?.rating}
                  readOnly
                />
                <h1 className="ml-3 text-white">
                  {data.aggregateUserReview._avg?.rating?.toFixed(2)}
                </h1>
              </>
            ) : (
              <></>
            )}

            {Boolean(getId()) ? (
              <>
                {getId() == userid ? (
                  <>
                    {data.user?.userRoleName == "USER" ? (
                      <div className="mt-4">
                        <Button
                          style={{
                            backgroundColor: "#CCD5AE",
                            color: "black",
                            fontWeight: "bold",
                          }}
                          variant="outlined"
                          className="w-40"
                          onClick={() =>
                            router.push(`/users/update-user/${userid}`)
                          }
                        >
                          Update Profile
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div className="mt-4">
                      <Button
                        style={{
                          backgroundColor: "#CCD5AE",
                          color: "black",
                          fontWeight: "bold",
                        }}
                        variant="outlined"
                        className="w-40"
                        onClick={handleDeleteUser}
                      >
                        Delete Profile
                      </Button>
                    </div>

                    {data.user?.userRoleName == "USER" ? (
                      <div className="mt-4">
                        <Button
                          style={{
                            backgroundColor: "#CCD5AE",
                            color: "black",
                            fontWeight: "bold",
                          }}
                          variant="outlined"
                          className="w-40"
                          onClick={() => router.push("/products/post-product")}
                        >
                          Post Product
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    {_.some(data?.user?.userReviewsFor, [
                      "reviewer.id",
                      getId(),
                    ]) ? (
                      <></>
                    ) : (
                      <div className="mt-5">
                        <ReviewModal
                          comment={comment}
                          label="User"
                          rating={rating}
                          setValue={setComment}
                          setRating={setRating}
                          handleSubmit={handleUserReview}
                        />
                      </div>
                    )}

                    {userRole == "ADMIN" ? (
                      <div className="mt-4">
                        <Button
                          style={{
                            backgroundColor: "#CCD5AE",
                            color: "black",
                            fontWeight: "bold",
                          }}
                          variant="outlined"
                          className="w-40"
                          onClick={handleDeleteUser}
                        >
                          Delete Profile
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "darkblue",
                            fontWeight: "bold",
                          }}
                          variant="outlined"
                          className="w-40"
                          onClick={() => router.push(`/chat/${userid}`)}
                        >
                          Chat
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
            {data.user?.userRoleName == "ADMIN" ? (
              <></>
            ) : (
              <div className="mt-4">
                <Button
                  style={{
                    backgroundColor: "#CCD5AE",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  variant="outlined"
                  className="w-40"
                  onClick={() => router.push(`/users/user-products/${userid}`)}
                >
                  Products
                </Button>
              </div>
            )}
          </div>

          {data.user?.userRoleName == "ADMIN" ? (
            <></>
          ) : (
            <div className="flex flex-col mt-6 justify-center">
              <h1
                style={{
                  width: "80px",
                  borderBottom: "2.5px solid purple",
                  paddingBottom: "0.4rem",
                }}
                className="font-semibold text-xl "
              >
                Reviews
              </h1>

              <h1>
                {data.user?.userReviewsFor.map((review: any) => (
                  <div className=" p-4">
                    <div className="flex items-center " key={review.id}>
                      <Avatar
                        alt={review.reviewer.username}
                        src={review.reviewer.profilePictureUrl}
                      />
                      <h1 className="font-semibold px-3">
                        {review.reviewer.username}
                      </h1>
                      <Rating
                        name="Review Rating"
                        value={review.rating}
                        readOnly
                      />
                    </div>
                    <div>
                      <h1>{review.comment}</h1>
                    </div>
                  </div>
                ))}
              </h1>
            </div>
          )}
        </div>
      </>
    );
  }

  return <></>;
};

export default UserDetail;
