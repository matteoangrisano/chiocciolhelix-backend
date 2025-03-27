import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { orderId, status } = ctx.arguments;
  const updatedAt = util.time.nowISO8601();

  return ddb.update({
    key: { id: orderId },
    update: {
      status: status,
      updatedAt: updatedAt,
    },
  });
}

export function response(ctx) {
  return ctx.result;
}
