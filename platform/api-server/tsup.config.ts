import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: {
    resolve: false,
  },
  external: [
    '@alertworth/core',
    '@alertworth/services',
    '@alertworth/adapters',
    '@aws-sdk/client-dynamodb',
    '@aws-sdk/lib-dynamodb',
    '@aws-sdk/credential-providers',
    '@aws-sdk/types',
  ],
});
