import type { AWS } from "@serverless/typescript";
import appsyncConfig from "appsync/appsyncConfig";

import hello from "@functions/hello";

const defaultStage = "dev";
const defaultRegion = "eu-west-1";

const serverlessConfiguration: AWS = {
  service: `chiocciolhelix`,
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-prune-plugin",
    "serverless-appsync-plugin",
    "serverless-python-requirements",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
    stage: "${opt:stage, self:custom.defaultStage}",
    region: "${opt:region, self:custom.defaultRegion}",
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: "*",
        Resource: "*",
      },
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    // logs: {
    //   restApi: {
    //     accessLogging: true,
    //     executionLogging: true,
    //     level: "INFO",
    //     fullExecutionData: true,
    //   },
    // },
    httpApi: { cors: true },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: { hello },
  package: {
    individually: true,
    exclude: ["node_modules/**"],
  },
  configValidationMode: "error",
  appSync: appsyncConfig,
  custom: {
    pythonRequirements: {
      dockerizePip: true,
    },
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node20",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    defaultStage: defaultStage,
    defaultRegion: defaultRegion,
  },
} as any;

module.exports = serverlessConfiguration;
