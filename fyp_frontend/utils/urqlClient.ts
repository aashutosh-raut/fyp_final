import { dedupExchange } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { cacheExchange } from "@urql/exchange-graphcache";
import { devtoolsExchange } from "@urql/devtools";
import type { SSRExchange } from "next-urql";
import { NextPageContext } from "next";
import { getToken } from "./auth";
import { GetProductDetailDocument } from "../generated/graphql";
import type { ClientOptions } from "urql";

const url = "http://localhost:9000/graphql";

export const UrqlClient = (
  ssrExchange: SSRExchange,
  ctx?: NextPageContext,
): ClientOptions => ({
  url,
  fetchOptions: () => ({
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  }),
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange({
      keys: {
        ProductCount: () => null,
      },
      updates: {
        Mutation: {
          createProductReview(result, args, cache, _info) {
            // @ts-expect-error
            const productId = args.data.product.connect.id;
            cache.updateQuery(
              {
                query: GetProductDetailDocument,
                variables: { productId },
              },
              (data) => {
                // @ts-expect-error
                data.product.productReviews.push(result.createProductReview);
                return data;
              },
            );
          },
        },
      },
    }),
    multipartFetchExchange,
  ],
});
