export const dataSources = {
  TableUsersDatasource: {
    type: "AMAZON_DYNAMODB",
    name: "TableUsersDatasource",
    description: "TableUsersDatasource",
    config: {
      tableName:
        "${cf:${self:service}-${self:provider.stage}-output.TableUsers}",
      serviceRoleArn:
        "${cf:${self:service}-${self:provider.stage}-output.RoleAppSync}",
    },
  },
  TableProductsDatasource: {
    type: "AMAZON_DYNAMODB",
    name: "TableProductsDatasource",
    description: "TableProductsDatasource",
    config: {
      tableName:
        "${cf:${self:service}-${self:provider.stage}-output.TableProducts}",
      serviceRoleArn:
        "${cf:${self:service}-${self:provider.stage}-output.RoleAppSync}",
    },
  },
};

export default dataSources;
