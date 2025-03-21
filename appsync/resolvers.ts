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
  "Mutation.productCreate": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${mutationsFolder}/productCreate.ts`,
      },
    ],
  },
};
export default resolvers;
