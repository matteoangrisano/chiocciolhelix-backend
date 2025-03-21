import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { customerEmail, items, totalPrice, status } = ctx.arguments.input;
  const id = util.autoId();
  const createdAt = util.time.nowISO8601();

  const item = {
    id,
    customerEmail,
    items,
    totalPrice,
    status: status || "PENDING", // Se non viene specificato, imposta lo stato come PENDING
    createdAt,
    updatedAt: createdAt,
  };

  return ddb.put({ key: { id }, item });
}

export function response(ctx) {
  return ctx.result;
}
