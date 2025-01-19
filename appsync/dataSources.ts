export const dataSources = {
  TableUsersDatasource: {
    type: "AMAZON_DYNAMODB",
    name: "TableUsersDatasource",
    description: "TableUsersDatasource",
    config: {
      tableName:
        "${cf:${self:service}-${self:provider.stage}-output.DynamoDBTableUsers}",
      serviceRoleArn:
        "${cf:${self:service}-${self:provider.stage}-output.AppSyncRole}",
    },
  },
  TableProjectsDatasource: {
    type: "AMAZON_DYNAMODB",
    name: "TableProjectsDatasource",
    description: "TableProjectsDatasource",
    config: {
      tableName:
        "${cf:${self:service}-${self:provider.stage}-output.DynamoDBTableProjects}",
      serviceRoleArn:
        "${cf:${self:service}-${self:provider.stage}-output.AppSyncRole}",
    },
  },
  StepFunctionCreateInfrastructureDataSource: {
    type: "HTTP",
    name: "StepFunctionsDataSource",
    description: "Data source per comunicare con AWS Step Functions",
    config: {
      endpoint: "https://states.${self:provider.region}.amazonaws.com",
      serviceRoleArn:
        "${cf:${self:service}-${self:provider.stage}-output.AppSyncRole}",
      authorizationConfig: {
        authorizationType: "AWS_IAM",
        awsIamConfig: {
          signingRegion: "${self:provider.region}",
          signingServiceName: "states",
        },
      },
    },
  },
};

export default dataSources;
