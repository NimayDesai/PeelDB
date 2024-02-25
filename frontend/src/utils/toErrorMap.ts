import { FieldError } from "../gql/generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  // Create an error map object
  const errorMap: Record<string, string> = {};
  // For each error set the error map of the field equal to the message
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  // Return the errorMap
  return errorMap;
};
