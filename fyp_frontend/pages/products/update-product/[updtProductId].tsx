import { useEffect, useState } from "react";
import {
  CategoryNameEnum,
  ProductConditionEnum,
  useCreateProductMutation,
  useGetProductDetailQuery,
  useUpdateProductMutation,
  useUploadPictureMutation,
} from "../../../generated/graphql";
import { getId, getToken } from "../../../utils/auth";
import { useRouter } from "next/router";
import Dropzone from "react-dropzone";
import TextField from "@mui/material/TextField";
import { Box, Button, InputAdornment, MenuItem, Switch } from "@mui/material";
var S = require("string");
import * as _ from "lodash";
import StringInput from "../../../components/inputComponents/StringInput";
import NumberInput from "../../../components/inputComponents/NumberInput";
import NavBar from "../../../components/NavBar";
import CategorySelect from "../../../components/selectComponents/CategorySelect";
import ConditionSelect from "../../../components/selectComponents/ConditionSelect";
import { toast } from "react-toastify";

interface QuerryVariables {
  updtProductId: string;
}

const INITIAL = { text: "", error: "" };

function UpdateProduct() {
  useEffect(() => {}, []);
  const router = useRouter();
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const { updtProductId } = router.query as unknown as QuerryVariables;
    setProductId(updtProductId);
  }, [router]);

  console.log("Product ID", productId);

  const [{ data, fetching, error }] = useGetProductDetailQuery({
    variables: { productId, userId: getId() },
  });

  console.log(data);

  const [, updateProduct] = useUpdateProductMutation();

  const [, uploadPicture] = useUploadPictureMutation();

  const productCategories = Object.keys(CategoryNameEnum) as CategoryNameEnum[];
  const productConditions = Object.keys(
    ProductConditionEnum
  ) as ProductConditionEnum[];

  const [condition, setCondition] = useState({
    text: "" as ProductConditionEnum,
    error: "",
  });
  const [productCategory, setProductCategory] = useState({
    text: "" as CategoryNameEnum,
    error: "",
  });

  const [name, setName] = useState(INITIAL);
  const [description, setDescription] = useState(INITIAL);
  const [collateralDescription, setCollateralDescription] = useState(INITIAL);
  const [rentingPrice, setRentingPrice] = useState({ no: 0, error: "" });
  const [isAvailable, setIsAvailable] = useState(true);
  const [productPicture, setProductPicture] = useState("");

  useEffect(() => {
    if (data?.product) {
      setName({ text: data.product.name, error: "" });
      setDescription({ text: data.product.description, error: "" });
      setCollateralDescription({
        text: data.product.collateralDescription,
        error: "",
      });
      setRentingPrice({ no: data.product.rentingPrice, error: "" });
      setIsAvailable(data.product.isAvailable);
      setProductPicture(data.product.productPicture);
      setCondition({
        text: data.product.condition as ProductConditionEnum,
        error: "",
      });
      setProductCategory({
        text: data.product.productCategoryName as CategoryNameEnum,
        error: "",
      });
    }
  }, [data?.product]);

  if (data?.product) {
    const handleDrop = async (files: File[]) => {
      const imgData = await uploadPicture({ file: files[0] });
      if (imgData.data) setProductPicture(imgData.data.postPicture);
    };

    const handleSubmit = async () => {
      const res = await updateProduct({
        name: name.text,
        description: description.text,
        collateralDescription: collateralDescription.text,
        rentingPrice: rentingPrice.no,
        condition: condition.text,
        productCategory: productCategory.text,
        isAvailable,
        userId: getId(),
        productId,
        productPicture,
      });
      if (res.data) {
        toast.success("Product Updated Successfully");
        router.push("/products/products-list");
      }
    };

    return (
      <div>
        <NavBar />
        {/* <h1>Hello</h1> */}
        <div className="md:flex md:flex-row">
          <div className="hidden md:flex md:justify-center md:items-center md:h-screen md:w-6/12">
            {productPicture == "" ? (
              <></>
            ) : (
              <img alt="not found" width={500} src={productPicture} />
            )}
          </div>

          <div className="flex flex-col justify-center items-center h-screen md:w-6/12">
            <h1 className="text-2xl my-7 mr-5">Update Product</h1>

            <div className="flex justify-center items-center">
              <div className="mr-5 mb-5">
                <StringInput
                  value={name}
                  setValue={setName}
                  label="Product Name"
                />
              </div>

              <div className="mb-5">
                <NumberInput
                  value={rentingPrice}
                  setValue={setRentingPrice}
                  label="Renting Price"
                  adorment="Nrs."
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="mr-5 mb-5">
                <CategorySelect
                  value={productCategory}
                  setValue={setProductCategory}
                />
              </div>

              <div className="mb-5">
                <ConditionSelect value={condition} setValue={setCondition} />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="mr-5 mb-7">
                <StringInput
                  value={description}
                  setValue={setDescription}
                  label="Description"
                  isMultiline={true}
                />
              </div>

              <div className="mb-7">
                <StringInput
                  value={collateralDescription}
                  setValue={setCollateralDescription}
                  label="Collateral Description"
                  isMultiline={true}
                />
              </div>
            </div>

            <h1 className="mr-5">
              Available
              <Switch
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
              />
            </h1>

            <div className="mr-5">
              <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      {...getRootProps()}
                      className="h-14 w-56 mb-4 border-dashed border-2 border-cyan-400"
                    >
                      <input {...getInputProps()} />
                      <p className="text-center">
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                if (!name.text) {
                  setName({ text: name.text, error: "Field is Empty" });
                }
                if (!description.text) {
                  setDescription({
                    text: description.text,
                    error: "Field is Empty",
                  });
                }
                if (!collateralDescription.text) {
                  setCollateralDescription({
                    text: collateralDescription.text,
                    error: "Field is Empty",
                  });
                }
                if (!collateralDescription.text) {
                  setCollateralDescription({
                    text: collateralDescription.text,
                    error: "Field is Empty",
                  });
                }
                if (!Boolean(rentingPrice.no)) {
                  setRentingPrice({
                    no: rentingPrice.no,
                    error: "Field is Empty",
                  });
                }

                if (
                  name.text &&
                  description.text &&
                  collateralDescription.text &&
                  Boolean(rentingPrice.no)
                ) {
                  handleSubmit();
                }
              }}
              className="h-12 w-44 my-5 mr-5"
            >
              Update Product
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
}

export default UpdateProduct;
