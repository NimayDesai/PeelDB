import { ChangeInfoInput } from "../resolvers/user";

export const validateChangeInfo = (options: ChangeInfoInput) => {
  if (options.username.length <= 2 && options.email) {
    return {
      errors: [
        {
          field: "username",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (!options.email.includes("@") && options.email) {
    return {
      errors: [
        {
          field: "email",
          message: "Email must include at sign",
        },
      ],
    };
  }
  if (options.password.length <= 2 && options.password) {
    return {
      errors: [
        {
          field: "password",
          message: "Length Must be greater than 2",
        },
      ],
    };
  }
  if (options.password !== options.confirmPassword && options.password) {
    return {
      errors: [
        {
          field: "confirmPassword",
          message: "Passwords do not match",
        },
      ],
    };
  }

  if (options.username.includes("@") && options.username) {
    return {
      errors: [
        {
          field: "username",
          message: "Username cannot include at sign",
        },
      ],
    };
  }
  return null;
};
