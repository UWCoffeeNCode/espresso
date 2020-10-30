/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string | null;
}

export interface Signup_signup {
  __typename: "SignupPayload";
  user: Signup_signup_user;
}

export interface Signup {
  /**
   * Create a new user.
   */
  signup: Signup_signup | null;
}

export interface SignupVariables {
  input: SignupInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserCard_user
// ====================================================

export interface UserCard_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * A unique username that acts as a handle for the user.
   */
  username: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface SignupInput {
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  subscribe?: boolean | null;
  clientMutationId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
