import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { name, price, unitType } = ctx.arguments.input;
  const id = util.autoId();
  const item = {
    id,
    name,
    price,
    unitType,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  return ddb.put({ key: { id }, item });
}

export function response(ctx) {
  return ctx.result;
}
