import * as React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../../generated/graphql";
import _ from "lodash";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
export default function BasicExampleDataGrid() {
  const [{ data, fetching, error }] = useGetUsersQuery();

  const dataRows = data?.users.map((user) => {
    const { _count: counts } = user;
    const parsed = _.omit(user, "_count");
    return { ...parsed, ...counts };
  });

  const router = useRouter();

  const columns: GridColDef[] = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   width: 220,
    // },
    {
      field: "username",
      headerName: "User Name",
      width: 150,
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   width: 200,
    // },
    {
      field: "createdAt",
      headerName: "Create At",
      width: 230,
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      width: 230,
    },
    {
      field: "products",
      headerName: "Products",
    },
    {
      field: "productReport",
      headerName: "Product Reported",
      width: 160,
    },
    {
      field: "productReviews",
      headerName: "Product Reviews",
      width: 125,
    },
    {
      field: "rentRequest",
      headerName: "Rent Requests",
      width: 125,
    },
    {
      field: "userReviewsBy",
      headerName: "User Reviews By",
      width: 150,
    },
    // {
    //   field: "userReviewsFor",
    //   headerName: "User Reviews For",
    //   width: 150,
    // },
  ];

  return (
    <>
      <NavBar />
      <div
        style={{ height: 1000, width: "100%", backgroundColor: "#fffef5" }}
        className="p-5"
      >
        {Boolean(data?.users) ? (
          <DataGrid
            columns={columns}
            rows={dataRows}
            components={{
              Toolbar: GridToolbar,
            }}
            autoHeight
            onCellDoubleClick={(value) => router.push(`/users/${value.id}`)}
          />
        ) : (
          <div>Loading</div>
        )}

        {/* <DataGrid {...data} /> */}
      </div>
    </>
  );
}
