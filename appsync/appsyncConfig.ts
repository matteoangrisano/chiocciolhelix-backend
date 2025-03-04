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
        "${cf:${self:service}-${self:provider.stage}-output.CognitoUserPoolIdUsers}",
    },
  },
  additionalAuthentications: [
    {
      type: "AWS_IAM",
    },
    { type: "API_KEY" },
  ],
  logging: {
    loggingRoleArn:
      "${cf:${self:service}-${self:provider.stage}-output.RoleAppSync}",
    level: "ALL",
    excludeVerboseContent: false,
  },
  schema: ["schema/schema.graphql"],
  resolvers: resolvers,
  dataSources: dataSources,
  environment: {},
};

export default appsyncConfig;
