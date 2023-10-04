
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://www.wixapis.com/graphql",
  generates: {
    "lib/wix/generated/": {
      preset: 'client',
      config: {
        documentMode: 'string'
      },
      plugins: ["typescript"]
    }
  },
  documents: ["lib/wix/**/*.ts"]
};

export default config;
