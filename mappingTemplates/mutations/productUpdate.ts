import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { id } = ctx.arguments;
  const { price, availability } = ctx.arguments.input;

  const updatedFields: Record<string, any> = {};

  if (price !== undefined) {
    updatedFields.price = price;
  }

  if (availability !== undefined) {
    updatedFields.availability = availability;
  }

  // Aggiorna sempre il timestamp
  updatedFields.updatedAt = util.time.nowISO8601();

  return ddb.update({
    key: { id },
    update: updatedFields,
  });
}

export function response(ctx) {
  return ctx.result;
}
