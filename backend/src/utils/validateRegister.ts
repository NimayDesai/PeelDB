import { RegisterInput } from "src/resolvers/user";

export const validateRegister = (options: RegisterInput) => {
  const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
  const regexNums = /[^0-9]/;

  if (options.username!.length <= 2) {
    // Username is too short
    if (!options.username) {
      // Check if there is a username
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
      // No email
      return {
        errors: [
          {
            field: "email",
            message: "No email supplied",
          },
        ],
      };
    }
    // Email is Invalid
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
      // No password supplied
      return {
        errors: [
          {
            field: "password",
            message: "No password supplied",
          },
        ],
      };
    }
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
    // Usrname is invalid (no at sign)
    return {
      errors: [
        {
          field: "username",
          message: "Username cannot include at sign",
        },
      ],
    };
  }
  if (!regex.test(options.password)) {
    // No sepcial character in password
    return {
      errors: [
        {
          field: "password",
          message: "Password must contain at least one special character",
        },
      ],
    };
  }
  if (!regexNums.test(options.password)) {
    // No numbers in password
    return {
      errors: [
        {
          field: "password",
          message: "Password must contain at least one number",
        },
      ],
    };
  }
  return null;
};
