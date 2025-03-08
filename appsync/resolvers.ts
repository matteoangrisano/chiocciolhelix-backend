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
  "Mutation.productAdd": {
    functions: [
      {
        dataSource: "TableProductsDatasource",
        code: `${mutationsFolder}/productAdd.ts`,
      },
    ],
  },
};
export default resolvers;
