import * as React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  useGetProductReportsQuery,
  useGetUsersQuery,
} from "../../generated/graphql";
import _ from "lodash";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";

export default function BasicExampleDataGrid() {
  const [{ data, fetching, error }] = useGetProductReportsQuery();
  console.log(data?.productReports[0].user.username);

  const columns: GridColDef[] = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   width: 220,
    // },
    // {
    //   field: "userId",
    //   headerName: "Reporter ID",
    //   width: 220,
    // },
    {
      field: "user",
      headerName: "User",
      width: 220,
      valueFormatter: ({ value }) => value.username,
    },
    {
      field: "product",
      headerName: "Product Name",
      width: 220,
      valueFormatter: ({ value }) => value.name,
    },

    // {
    //   field: "productId",
    //   headerName: "Product ID",
    //   width: 220,
    // },
    {
      field: "comment",
      headerName: "Report Comment",
      width: 400,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
    },
  ];

  const router = useRouter();

  return (
    <>
      <NavBar />
      <div
        style={{ height: 1000, width: "100%", backgroundColor: "#fffef5" }}
        className="p-5"
      >
        {Boolean(data?.productReports) ? (
          <DataGrid
            columns={columns}
            rows={data?.productReports}
            components={{
              Toolbar: GridToolbar,
            }}
            autoHeight
            onCellDoubleClick={
              (value) => router.push(`/products/${value.row.productId}`)
              // console.log(value.row.productId)
            }
          />
        ) : (
          <div>Loading</div>
        )}

        {/* <DataGrid {...data} /> */}
      </div>
    </>
  );
}
