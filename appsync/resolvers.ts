const queriesFolder = "mappingTemplates/queries";
const mutationsFolder = "mappingTemplates/mutations";

const resolvers = {
  "Query.productList": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${queriesFolder}/productList.ts`,
      },
    ],
  },
  "Query.orderList": {
    functions: [
      {
        dataSource: "TableOrdersDatasource",
        code: `${queriesFolder}/orderList.ts`,
      },
    ],
  },
  "Mutation.orderCreate": {
    functions: [
      {
        dataSource: "TableOrdersDatasource",
        code: `${mutationsFolder}/orderCreate.ts`,
      },
    ],
  },
  "Mutation.orderUpdate": {
    functions: [
      {
        dataSource: "TableOrdersDatasource",
        code: `${mutationsFolder}/orderUpdate.ts`,
      },
    ],
  },
  "Mutation.productCreate": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${mutationsFolder}/productCreate.ts`,
      },
    ],
  },
  "Mutation.productUpdate": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${mutationsFolder}/productUpdate.ts`,
      },
    ],
  },
};
export default resolvers;
