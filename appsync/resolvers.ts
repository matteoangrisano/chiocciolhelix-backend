const queriesFolder = "mappingTemplates/queries";
const mutationsFolder = "mappingTemplates/mutations";

const resolvers = {
  "Query.getProducts": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${queriesFolder}/getProducts.ts`,
      },
    ],
  },
  "Mutation.createProduct": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${mutationsFolder}/createProduct.ts`,
      },
    ],
  },
};
export default resolvers;
