import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { id } = ctx.arguments;

  // Delete the product with the given id
  return ddb.remove({
    key: { id },
  });
}

export function response(ctx) {
  // Return the deleted item
  return ctx.result;
}
