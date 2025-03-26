import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { name, price, unitType, category, availability } = ctx.arguments.input;

  const id = util.autoId();
  const item = {
    id,
    name: name.toLowerCase(),
    price: price,
    unitType,
    category: category.toLowerCase(),
    availability: availability !== undefined ? availability : true,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  return ddb.put({ key: { id }, item });
}

export function response(ctx) {
  return ctx.result;
}
