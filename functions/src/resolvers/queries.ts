export const queries_r = {
  hello: () => {
    return "Hello world with graphql";
  },
  greet(root: any, { name }: any, { message }: any) {
    return `Hello ${name} - Context: ${message}`;
  },
};
