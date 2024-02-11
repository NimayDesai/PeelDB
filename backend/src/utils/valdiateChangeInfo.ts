import { ChangeInfoInput } from "../resolvers/user";

export const validateChangeInfo = (options: ChangeInfoInput) => {
  if (options.username!.length <= 2 && options.username) {
    // Username is too short
    return {
      errors: [
        {
          field: "username",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (options.email!.length <= 2 && options.email) {
    // Email is too short
    return {
      errors: [
        {
          field: "email",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (!options.email?.includes("@") && options.email) {
    // Email is invalid
    return {
      errors: [
        {
          field: "email",
          message: "Email must include at sign",
        },
      ],
    };
  }
  if (options.password!.length <= 2 && options.password) {
    // Password is too short
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
    // Password and Confirm Password are not equal
    return {
      errors: [
        {
          field: "confirmPassword",
          message: "Passwords do not match",
        },
      ],
    };
  }

  if (options.username?.includes("@") && options.username) {
    // Username includes an at sign
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
