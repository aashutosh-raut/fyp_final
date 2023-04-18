import { useState } from "react";
import {
  CategoryNameEnum,
  ProductConditionEnum,
  useCreateProductMutation,
  useUploadPictureMutation,
} from "../../generated/graphql";
import { getId, getToken } from "../../utils/auth";
import { useRouter } from "next/router";
import Dropzone from "react-dropzone";
import { Button, InputAdornment, MenuItem, Switch } from "@mui/material";
var S = require("string");
import * as _ from "lodash";
import StringInput from "../../components/inputComponents/StringInput";
import NumberInput from "../../components/inputComponents/NumberInput";
import NavBar from "../../components/NavBar";
import { toast } from "react-toastify";
import CategorySelect from "../../components/selectComponents/CategorySelect";
import ConditionSelect from "../../components/selectComponents/ConditionSelect";
import { ProtectedRoutes } from "../../components/ProtectedRoutes";

const INITIAL = { text: "", error: "" };

function CreateProduct() {
  const [name, setName] = useState(INITIAL);
  const [description, setDescription] = useState(INITIAL);
  const [collateralDescription, setCollateralDescription] = useState(INITIAL);
  const [rentingPrice, setRentingPrice] = useState({ no: 0, error: "" });
  const [isAvailable, setIsAvailable] = useState(true);
  const [productPicture, setProductPicture] = useState("");

  const router = useRouter();

  const [, createProduct] = useCreateProductMutation();

  const [, uploadPicture] = useUploadPictureMutation();

  const handleDrop = async (files: File[]) => {
    console.log("drop stated");
    const imgData = await uploadPicture({ file: files[0] });
    console.log(imgData);
    if (imgData.data) setProductPicture(imgData.data.postPicture);
  };

  const [condition, setCondition] = useState({
    text: "" as ProductConditionEnum,
    error: "",
  });
  const [productCategory, setProductCategory] = useState({
    text: "" as CategoryNameEnum,
    error: "",
  });

  // console.log(productCondition);

  const handleSubmit = async () => {
    const res = await createProduct({
      name: name.text,
      description: description.text,
      collateralDescription: collateralDescription.text,
      rentingPrice: rentingPrice.no,
      condition: condition.text,
      productCategory: productCategory.text,
      isAvailable,
      id: getId(),
      productPicture,
    });
    toast.success("Product Created");
    router.push("/products/products-list");
  };

  return (
    <ProtectedRoutes>
      <div>
        <NavBar />
        <div
          className="md:flex md:flex-row pt-16"
          style={{ backgroundColor: "#fffef5" }}
        >
          <div className="hidden md:flex md:justify-center md:items-center md:h-full md:w-6/12">
            {productPicture == "" ? (
              <></>
            ) : (
              <img alt="not found" width={500} src={productPicture} />
            )}
          </div>

          <div className="flex flex-col justify-center items-center h-full md:w-6/12">
            <h1 className="text-2xl my-7 mr-5">Post Product</h1>

            <div className="flex justify-center items-center">
              <StringInput
                value={name}
                setValue={setName}
                label="Product Name"
              />

              <NumberInput
                value={rentingPrice}
                setValue={setRentingPrice}
                label="Renting Price"
                adorment="Nrs."
              />
            </div>

            <div className="flex justify-center items-center">
              <CategorySelect
                value={productCategory}
                setValue={setProductCategory}
              />

              <ConditionSelect value={condition} setValue={setCondition} />
            </div>

            <div className="flex justify-center items-center mb-5">
              <StringInput
                value={description}
                setValue={setDescription}
                label="Description"
                isMultiline={true}
              />

              <StringInput
                value={collateralDescription}
                setValue={setCollateralDescription}
                label="Collateral Description"
                isMultiline={true}
              />
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
              style={{ backgroundColor: "#94AF9F", color: "white" }}
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
                if (!condition.text) {
                  setCondition({
                    text: condition.text as ProductConditionEnum,
                    error: "Field is Empty",
                  });
                }
                if (!productCategory.text) {
                  setProductCategory({
                    text: productCategory.text as CategoryNameEnum,
                    error: "Field is Empty",
                  });
                }
                if (!productPicture) {
                  toast.error("Please Upload a Product Picture");
                }

                if (
                  name.text &&
                  description.text &&
                  collateralDescription.text &&
                  Boolean(rentingPrice.no) &&
                  condition.text &&
                  productCategory.text &&
                  productPicture
                ) {
                  handleSubmit();
                }
              }}
              className="h-12 w-44 my-5 mr-5"
            >
              Create Product
            </Button>
          </div>
        </div>
      </div>
    </ProtectedRoutes>
  );
}

export default CreateProduct;
