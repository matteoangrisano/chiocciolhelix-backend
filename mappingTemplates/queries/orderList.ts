import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  const { customerEmail, status } = ctx.arguments;

  // Prepara il filtro di base
  const filter: Record<string, any> = {};

  // Aggiungi il filtro per customerEmail se specificato
  if (customerEmail) {
    filter.customerEmail = { eq: customerEmail };
  }

  // Aggiungi il filtro per status se specificato
  if (status) {
    filter.status = { eq: status };
  }

  // Se non ci sono filtri, esegui una scansione completa
  if (Object.keys(filter).length === 0) {
    return ddb.scan({});
  }

  // Altrimenti, esegui una scansione con filtro
  return ddb.scan({ filter });
}

export function response(ctx) {
  return ctx.result.items;
}
