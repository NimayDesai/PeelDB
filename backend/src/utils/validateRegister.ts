import { RegisterInput } from "src/resolvers/user";

export const validateRegister = (options: RegisterInput) => {
  if (options.username!.length <= 2) {
    if (!options.username) {
      // No username supplied
      return {
        errors: [
          {
            field: "username",
            message: "No username",
          },
        ],
      };
    }
    // Username too Short
    return {
      errors: [
        {
          field: "username",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (!options.email?.includes("@")) {
    if (!options.email) {
      // Email is Invalid
      return {
        errors: [
          {
            field: "email",
            message: "No email supplied",
          },
        ],
      };
    }
    return {
      errors: [
        {
          field: "email",
          message: "Email must include at sign",
        },
      ],
    };
  }
  if (options.email!.length <= 2) {
    // Email too Short
    return {
      errors: [
        {
          field: "email",
          message: "Length must be greater than 2",
        },
      ],
    };
  }
  if (options.password!.length <= 2) {
    // Password is too short
    if (!options.password) {
      // Email is Invalid
      return {
        errors: [
          {
            field: "password",
            message: "No password supplied",
          },
        ],
      };
    }
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
    // Password and confirm Password are not equal
    return {
      errors: [
        {
          field: "confirmPassword",
          message: "Passwords do not match",
        },
      ],
    };
  }

  if (options.username!.includes("@")) {
    // Usrname is invalid
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
