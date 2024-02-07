import { ChangeInfoInput, RegisterInput } from "src/resolvers/user";

export const validateRegister = (options: RegisterInput | ChangeInfoInput) => {
  if (options.username.length <= 2) {
    return {
      errors: [
        {
          field: "username",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (!options.email.includes("@")) {
    return {
      errors: [
        {
          field: "email",
          message: "Email must include at sign",
        },
      ],
    };
  }
  if (options.password.length <= 2) {
    return {
      errors: [
        {
          field: "password",
          message: "Length Must be greater than 2",
        },
      ],
    };
  }
  if (options.password !== options.confirmPassword) {
    return {
      errors: [
        {
          field: "confirmPassword",
          message: "Passwords do not match",
        },
      ],
    };
  }

  if (
    options.username.includes("@") &&
  ) {
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
