const queriesFolder = "mappingTemplates/queries";
const mutationsFolder = "mappingTemplates/mutations";

const resolvers = {
  "Query.getUser": {
    functions: [
      {
        dataSource: "TableUsersDatasource",
        code: `${queriesFolder}/getUser.ts`,
      },
    ],
  },
  "Query.listUsers": {
    functions: [
      {
        dataSource: "TableUsersDatasource",
        code: `${queriesFolder}/listUsers.ts`,
      },
    ],
  },
  "Mutation.createUser": {
    functions: [
      {
        dataSource: "TableUsersDatasource",
        code: `${mutationsFolder}/createUser.ts`,
      },
    ],
  },
  "Mutation.updateUser": {
    functions: [
      {
        dataSource: "TableUsersDatasource",
        code: `${mutationsFolder}/updateUser.ts`,
      },
    ],
  },
  "Mutation.addProject": {
    functions: [
      {
        dataSource: "TableProjectsDatasource",
        code: `${mutationsFolder}/addProject.ts`,
      },
    ],
  },
  "Mutation.updateProject": {
    functions: [
      {
        dataSource: "TableProjectsDatasource",
        code: `${mutationsFolder}/updateProject.ts`,
      },
    ],
  },
  "Query.getProject": {
    functions: [
      {
        dataSource: "TableProjectsDatasource",
        code: `${queriesFolder}/getProject.ts`,
      },
    ],
  },
  "Query.listProjects": {
    functions: [
      {
        dataSource: "TableProjectsDatasource",
        code: `${queriesFolder}/listProjects.ts`,
      },
    ],
  },
  // "Query.listProjectsBySub": {
  //   functions: [
  //     {
  //       dataSource: "TableProjectsDatasource",
  //       code: `${queriesFolder}/listProjectsBySub.ts`,
  //     },
  //   ],
  // },
  "Mutation.createInfrastructure": {
    functions: [
      {
        dataSource: "StepFunctionCreateInfrastructureDataSource",
        code: `${mutationsFolder}/createInfrastructure.ts`,
      },
    ],
  },
};
export default resolvers;
