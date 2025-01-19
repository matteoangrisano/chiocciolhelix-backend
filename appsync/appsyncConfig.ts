import resolvers from "./resolvers";
import dataSources from "./dataSources";

const appsyncConfig = {
  name: "${self:service}-${self:provider.stage}",
  authentication: {
    type: "AMAZON_COGNITO_USER_POOLS",
    config: {
      awsRegion: "${opt:region, self:custom.defaultRegion}",
      defaultAction: "ALLOW",
      userPoolId:
        "${cf:${self:service}-${self:provider.stage}-output.CognitoUserPoolIdCustomers}",
    },
  },
  logging: {
    loggingRoleArn:
      "${cf:${self:service}-${self:provider.stage}-output.AppSyncRole}",
    level: "ALL",
    excludeVerboseContent: false,
  },
  schema: ["schema/schema.graphql"],
  resolvers: resolvers,
  dataSources: dataSources,
  environment: {
    stepFunctionsCreateInfrastructureARN:
      "arn:aws:states:${self:provider.region}:${aws:accountId}:stateMachine:createInfrastructure-${self:service}-${self:provider.stage}",
  },
};

export default appsyncConfig;
