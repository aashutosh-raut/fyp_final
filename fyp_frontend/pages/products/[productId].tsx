import { Avatar, Button, Rating, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import {
  useCreateProductReportMutation,
  useCreateProductReviewMutation,
  useDeleteProductMutation,
  useGetProductDetailQuery,
  useCreateRentRequestMutation,
  useGetUserRoleQuery,
} from "../../generated/graphql";
import { getId } from "../../utils/auth";
import { toast } from "react-toastify";
import ReportModal from "../../components/modals/reportModal";
import ReviewModal from "../../components/modals/reviewModal";
import RentRequestModal from "../../components/modals/requestProductModal";
import RentRequestsListModal from "../../components/modals/rentRequestsListModal";
var S = require("string");

interface QuerryVariables {
  productId: string;
}

const INITIAL = { text: "", error: "" };

const ProductDetail = () => {
  const [rating, setRating] = useState(2);
  const [comment, setComment] = useState(INITIAL);
  const [reportComment, setReportComment] = useState(INITIAL);

  const [rentRequestDate, setRentRequestDate] = useState<Date | null>(null);
  const [rentPeriod, setRentPeriod] = useState({ no: 0, error: "" });

  const [, reviewProduct] = useCreateProductReviewMutation();
  const [, reportProduct] = useCreateProductReportMutation();
  const [, deleteProduct] = useDeleteProductMutation();
  const [, requestProduct] = useCreateRentRequestMutation();
  // const [{ data, fetching, error }] = useGetUserDetailQuery({
  //   variables: { userid: updtUserId },
  // });

  const router = useRouter();
  const { productId } = router.query as unknown as QuerryVariables;

  const [{ data, fetching, error }] = useGetProductDetailQuery({
    variables: { productId, userId: getId() },
  });

  const [{ data: userRoleObj }] = useGetUserRoleQuery({
    variables: { id: getId() },
  });

  const userRole = userRoleObj?.user?.userRoleName;

  if (data?.product?.personReview[0])
    console.log("Personal Review", data?.product.personReview[0].id);

  if (fetching) return <div>Loading...</div>;

  if (error) return <div>{error.toString()}</div>;

  const handleProductReview = async () => {
    const res = await reviewProduct({
      rating,
      comment: comment.text,
      productId: productId,
      userId: getId(),
    });
    if (res.data) {
      toast.success("Product Reviewed");
    }
    console.log({
      rating,
      comment: comment.text,
      productId,
      userId: getId(),
    });
    console.log("Product Reviewed Response", res);
  };

  const hanldeRequestProduct = async () => {
    const res = await requestProduct({
      userId: getId(),
      productId: productId,
      rentPeriod: rentPeriod.no,
      dayOfRequest: rentRequestDate,
    });
    if (res.data) {
      toast.success("Product Request Sent");
    }
  };

  const handleDeleteProduct = async () => {
    const res = await deleteProduct({
      id: productId,
    });
    if (res.data) {
      toast.success("Product Deleted");
      router.push("/products/products-list");
    }
  };

  const handleProductReport = async () => {
    await reportProduct({
      comment: reportComment.text,
      userId: getId(),
      productId: productId,
    });
    toast.info("Product Reported");
  };

  if (data) {
    return (
      <div style={{ backgroundColor: "#fffef5" }}>
        <NavBar />
        <div className="w-4/5 m-auto  ">
          <div
            style={{ height: "500px", marginTop: "2rem" }}
            className="flex flew-row "
          >
            <img
              src={data.product?.productPicture}
              alt={data.product?.name}
              className="h-full "
            />
            <div className="flex flex-col justify-around items-start w-2/3 pl-5">
              <h1 className="text-4xl font-semibold ">{data.product?.name}</h1>

              <h1 className="text-slate-500 -mt-3 ">
                {S(data.product?.condition).humanize().s},{" "}
                {S(data.product?.productCategoryName).humanize().s}
              </h1>

              <div className="flex ">
                <Rating
                  name="read-only"
                  value={data.aggregateProductReview._avg?.rating}
                  readOnly
                />
                <h1 className="ml-3">
                  {data.aggregateProductReview._avg?.rating?.toFixed(2)}
                </h1>
              </div>

              <div className="w-fit">
                <Link href={`/users/${data.product?.user.id}`}>
                  <a>
                    <div className="flex flex-row  items-center">
                      <h1 className="">
                        <span className="font-semibold"> By:</span>
                        &nbsp;{data.product?.user.username}
                      </h1>
                    </div>
                  </a>
                </Link>
              </div>

              <h1 className="text-xl font-semibold">Description</h1>
              <h1>{data.product?.description}</h1>
              <h1 className="text-xl font-semibold">Collateral Details</h1>
              <h1>{data.product?.collateralDescription}</h1>

              <h1 className="text-xl font-semibold">
                Rs. {data.product?.rentingPrice}/- day
              </h1>
              {Boolean(getId()) ? (
                <div>
                  {getId() == data?.product?.user.id || userRole == "ADMIN" ? (
                    <div className="flex mb-2 p-2">
                      {userRole == "USER" ? (
                        <div className="mr-5">
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() =>
                              router.push(
                                `/products/update-product/${productId}`
                              )
                            }
                            className="h-12 w-44 mr-5"
                          >
                            Update Product
                          </Button>
                        </div>
                      ) : (
                        <></>
                      )}

                      <div className="mr-5">
                        <RentRequestsListModal productId={productId} />
                      </div>

                      <Button
                        variant="outlined"
                        color="warning"
                        onClick={handleDeleteProduct}
                        className="h-12 w-44 mr-5"
                      >
                        Delete Product
                      </Button>
                    </div>
                  ) : (
                    <div className="flex">
                      <div className="mr-5">
                        {Boolean(data?.rentRequest?.id) ? (
                          <h3 className="text-green-500 mt-1 pr-4">
                            Rent Requested
                          </h3>
                        ) : (
                          <RentRequestModal
                            rentPeriod={rentPeriod}
                            setRentPeriod={setRentPeriod}
                            requestDay={rentRequestDate}
                            setRequestDay={setRentRequestDate}
                            handleSubmit={hanldeRequestProduct}
                          />
                        )}
                      </div>

                      <div className="mr-5">
                        {Boolean(data?.product?.personReview[0]) ? (
                          <h3 className="text-green-500 mt-1 pr-4">
                            Product Reviewed
                          </h3>
                        ) : (
                          <ReviewModal
                            comment={comment}
                            label="Product"
                            rating={rating}
                            setValue={setComment}
                            setRating={setRating}
                            handleSubmit={handleProductReview}
                          />
                        )}
                      </div>

                      {/* <div className="mb-2 p-2 h-12 w-44"> */}

                      {Boolean(data.product?.productReport[0]) ? (
                        <h3 className="text-red-500 mt-1 pr-4">
                          Product Reported
                        </h3>
                      ) : (
                        <ReportModal
                          label="Product"
                          value={reportComment}
                          setValue={setReportComment}
                          handleSubmit={handleProductReport}
                        />
                      )}

                      {/* </div> */}
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              {/* {getId() == data.product?.user.id ? ( */}
            </div>
          </div>

          <div className="flex flex-col mt-6 justify-center">
            <h1
              style={{
                width: "80px",
                borderBottom: "2.5px solid blue",
                paddingBottom: "0.4rem",
              }}
              className="font-semibold text-xl "
            >
              Reviews
            </h1>

            <h1>
              {data.product?.allReviews.map((review: any) => (
                <div className=" p-4">
                  <div className="flex items-center " key={review.id}>
                    <Avatar
                      alt={review.user.username}
                      src={review.user.profilePictureUrl}
                    />
                    <h1 className="font-semibold px-3">
                      {review.user.username}
                    </h1>
                    <Rating
                      name="Review Rating"
                      value={review.rating}
                      readOnly
                    />
                  </div>
                  <div>
                    <h1>{review.comment}</h1>
                    {/* {review.ownersReply ? <h1>True</h1> : <div></div>} */}
                  </div>
                </div>
              ))}
            </h1>
          </div>

          {/* <div className="bg-cyan-100">
          <h1>Product Review</h1>

          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(_, newValue) => {
              setRating(newValue || 5);
            }}
          />

          <TextField
            id="outlined-basic"
            label="Comment"
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Button
            variant="outlined"
            color="primary"
            onClick={handleCreateProductReview}
          >
            Create Product Review
          </Button>
        </div> */}
        </div>
      </div>
    );
  }
  return <></>;
};

export default ProductDetail;
