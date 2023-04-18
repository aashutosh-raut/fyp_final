import { useRef, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Pagination,
  Typography,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CategoryNameEnum,
  ProductConditionEnum,
  SortOrder,
  useGetProductsQuery,
} from "../../generated/graphql";
import _ from "lodash";
import S from "string";
import SearchBar from "../../components/inputComponents/SearchBar";
import { PAGINATION_DEFAULT } from "../../utils/constants";
import NavBar from "../../components/NavBar";
import { getId } from "../../utils/auth";

type GetProductInputCategory = {
  productCategory: {
    is: {
      name: {
        in: CategoryNameEnum[];
      };
    };
  };
};
type GetProductInputCondition = {
  condition: {
    in: ProductConditionEnum[];
  };
};
type GetProductInputSearch = {
  OR: [
    { name: { search: string } },
    { description: { search: string } },
    { collateralDescription: { search: string } },
    { user: { is: { username: { search: string } } } }
  ];
};
type OrderByInput = {
  rentingPrice: SortOrder;
};
type ListUnavailableInput = {
  isAvailable: {
    equals: boolean;
  };
};

const Products = () => {
  const [getProductVariables, setGetProductVariables] = useState<
    | (GetProductInputCategory &
        GetProductInputCondition &
        GetProductInputSearch)
    | {}
  >({});
  const [orderByInputVariables, setOrderByInputVariables] =
    useState<OrderByInput>();
  const [listUnavailableInput, setListUnavailableInput] =
    useState<ListUnavailableInput | null>({
      isAvailable: {
        equals: true,
      },
    });
  const [categoryFilter, setCategoryFilter] = useState<CategoryNameEnum[]>([]);
  const [conditionFilter, setConditionFilter] = useState<
    ProductConditionEnum[]
  >([]);
  const [page, setPage] = useState(1);
  const productCategories = Object.keys(CategoryNameEnum) as CategoryNameEnum[];
  const productConditions = Object.keys(
    ProductConditionEnum
  ) as ProductConditionEnum[];
  const [search, setSearch] = useState("");
  const checkOrderByButton = (
    orderByInputVariables: OrderByInput | undefined
  ) => (orderByInputVariables ? { orderBy: orderByInputVariables } : {});
  const checkListUnavailableButton = (
    listUnavailableInput: ListUnavailableInput | null
  ) => (listUnavailableInput ? listUnavailableInput : {});
  const [{ data, fetching, error }] = useGetProductsQuery({
    variables: {
      where: {
        ...getProductVariables,
        ...checkListUnavailableButton(listUnavailableInput),
      },
      take: PAGINATION_DEFAULT,
      skip: (page - 1) * PAGINATION_DEFAULT,
      ...checkOrderByButton(orderByInputVariables),
    },
  });
  const checkCategoryFilter = (
    categoryFilter: CategoryNameEnum[]
  ): GetProductInputCategory | {} => {
    if (categoryFilter.length > 0) {
      return {
        productCategory: {
          is: {
            name: {
              in: [...categoryFilter],
            },
          },
        },
      };
    }

    return {};
  };
  const checkSearchQuery = (search: string): GetProductInputSearch | {} => {
    if (search.length > 0) {
      return {
        OR: [
          { name: { search } },
          { description: { search } },
          { collateralDescription: { search } },
          { user: { is: { username: { search } } } },
        ],
      };
    }

    return {};
  };
  const checkConditionFilter = (
    conditionFilter: ProductConditionEnum[]
  ): GetProductInputCondition | {} => {
    if (conditionFilter.length > 0) {
      return {
        condition: {
          in: [...conditionFilter],
        },
      };
    }

    return {};
  };
  const handleQueryVariableChange = () => {
    setPage(1);
    setGetProductVariables({
      ...checkCategoryFilter(categoryFilter),
      ...checkConditionFilter(conditionFilter),
      ...checkSearchQuery(search),
    });
  };
  const handleChangeCondition = (condition: ProductConditionEnum) => {
    if (conditionFilter.includes(condition)) {
      setConditionFilter([
        ...conditionFilter.filter((opt) => opt != condition),
      ]);
      return;
    }
    setConditionFilter([...conditionFilter, condition]);
  };
  const handleChangeCategory = (category: CategoryNameEnum) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter([...categoryFilter.filter((opt) => opt != category)]);
      return;
    }
    setCategoryFilter([...categoryFilter, category]);
  };
  const hanldePaginationChange = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const handleOrderByInputChange = (order: SortOrder) => {
    setOrderByInputVariables({
      rentingPrice: order,
    });
  };
  const handleListUnavailableInput = () => {
    setListUnavailableInput(null);
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        <div
          style={{ backgroundColor: "#fffef5", paddingTop: "2rem" }}
          className="basis-2/12 flex flex-col items-center"
        >
          <Accordion className="w-full mb-5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Product Condition's</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {productConditions.map((condition) => (
                  <FormControlLabel
                    key={condition}
                    control={<Checkbox />}
                    label={S(condition).humanize().s}
                    checked={conditionFilter.includes(
                      _.snakeCase(
                        condition
                      ).toUpperCase() as ProductConditionEnum
                    )}
                    onChange={() =>
                      handleChangeCondition(
                        _.snakeCase(
                          condition
                        ).toUpperCase() as ProductConditionEnum
                      )
                    }
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion className="w-full">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Product Categories</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {productCategories.map((category) => (
                  <FormControlLabel
                    key={category}
                    control={<Checkbox />}
                    label={S(category).humanize().s}
                    checked={categoryFilter.includes(
                      _.snakeCase(category).toUpperCase() as CategoryNameEnum
                    )}
                    onChange={() =>
                      handleChangeCategory(
                        _.snakeCase(category).toUpperCase() as CategoryNameEnum
                      )
                    }
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          <Button
            style={{
              backgroundColor: "#DBE4C6",
              color: "black",
              fontWeight: "semibold",
            }}
            variant="outlined"
            onClick={handleQueryVariableChange}
            className="h-12 w-44 mt-5"
          >
            Filter
          </Button>
          <Button
            style={{
              backgroundColor: "#DBE4C6",
              color: "black",
              fontWeight: "semibold",
            }}
            variant="outlined"
            onClick={() => handleOrderByInputChange(SortOrder.Asc)}
            className="h-12 w-44 mt-5"
          >
            Order By Price : ASC
          </Button>
          <Button
            style={{
              backgroundColor: "#DBE4C6",
              color: "black",
              fontWeight: "semibold",
            }}
            variant="outlined"
            onClick={() => handleOrderByInputChange(SortOrder.Desc)}
            className="h-12 w-44 mt-5"
          >
            Order By Price : DSC
          </Button>
          <Button
            style={{
              backgroundColor: "#DBE4C6",
              color: "black",
              fontWeight: "semibold",
            }}
            variant="outlined"
            onClick={() => handleListUnavailableInput()}
            className="h-12 w-44 mt-5"
          >
            List Unavailable
          </Button>
        </div>

        <div
          style={{
            backgroundColor: "#FEFAE0",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
          className="flex flex-col basis-10/12 "
        >
          <div className="self-center">
            <SearchBar
              value={search}
              setValue={setSearch}
              searchValue={handleQueryVariableChange}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {error && <div>Error</div>}

            {fetching && <div>Fetching</div>}

            {data &&
              data.products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.productPicture}
                      alt="not found"
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg text-gray-700">
                        <Link href={`${product.id}`}>
                          <a>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </Link>
                      </h3>
                      <p className="w-full mt-1 text-sm text-gray-500">
                        {S(product.productCategoryName).humanize().s}
                      </p>
                      <p className="w-full text-sm text-gray-500">
                        {S(product.condition).humanize().s}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Nrs. {product.rentingPrice}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {data && (
            <div className="self-center my-5">
              <Pagination
                count={Math.ceil(data?.aggregateProduct._count?._all! / 20)}
                page={page}
                className="w-96"
                onChange={(_, value) => hanldePaginationChange(value)}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Products;
