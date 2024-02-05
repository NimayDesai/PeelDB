import { FieldError } from "../gql/generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  // Map through errors with a field and message
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
