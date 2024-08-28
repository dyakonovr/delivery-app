import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://shift-backend.onrender.com/graphql", // URL или путь до схемы GraphQL
  documents: "./src/**/*.graphql", // Путь до GraphQL документов (queries, mutations и т.д.)
  generates: {
    "./src/": {
      preset: "near-operation-file", // Генерация файлов рядом с GraphQL документами
      presetConfig: {
        extension: ".gql.generated.ts", // Расширение для сгенерированных файлов
        baseTypesPath: "./shared/graphql/types.gql.generated.ts" // Относительный путь к файлу с базовыми типами
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withComponent: false, // Если не нужны React компоненты
        withHooks: true, // Если нужны React hooks
        withHOC: false, // Если не нужны HOC
        withMutationFn: true // Если нужно генерировать функции мутаций
      }
    },
    "./src/shared/graphql/types.gql.generated.ts": {
      plugins: ["typescript"]
    }
  },
  watch: true
};

export default config;
