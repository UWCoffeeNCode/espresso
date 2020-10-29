import React, {
  FC,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react"
import names from "classnames"
import { validate as validateEmail } from "email-validator"

import { MoonLoader as Loading } from "react-spinners"

import { gql, useMutation } from "@apollo/client"
import { Signup, SignupInput, SignupVariables } from "src/schema"
import { useForm } from "react-hook-form"
import { resolveColor } from "src/utils/tailwind"

export interface SignupProps extends HTMLAttributes<HTMLDivElement> {}

const SignupSection: FC<SignupProps> = ({ className, ...otherProps }) => (
  <section className={names("px-12 py-16", className)} {...otherProps}>
    <div className={names("mx-auto", "max-w-3xl")}>
      <h4 className={names("text-xl font-semibold")}>
        Coffee N’ Code is a beginner-friendly club for people who want to learn
        to code.
      </h4>
      <p className="mt-2">
        We run workshops, host events, and strive to make coding fun for those
        who are just starting out.
      </p>
      <p className="text-gray-700 font-medium mt-1 ">
        Want to participate? Sign up for our email newsletter for upcoming
        events!
      </p>
      <SignupForm className="mt-4" />
    </div>
  </section>
)

export default SignupSection

interface SignupFormProps extends HTMLAttributes<HTMLFormElement> {}

const SIGNUP = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      user {
        id
        email
      }
    }
  }
`

interface SignupFormValues
  extends Pick<SignupInput, "email" | "firstName" | "lastName"> {}

const SignupForm: FC<SignupFormProps> = ({ className, ...otherProps }) => {
  const [signup, { data, loading, error }] = useMutation<
    Signup,
    SignupVariables
  >(SIGNUP)

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignupFormValues>({
    mode: "all",
  })

  const onSubmit = handleSubmit(({ firstName, lastName, email }) => {
    signup({
      variables: {
        input: {
          firstName,
          lastName,
          email,
          subscribe: true,
        },
      },
    })
  })

  return (
    <form
      className={names("flex flex-col items-stretch", className)}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <div className="flex">
        <SignupFormInput
          ref={register({ required: true, minLength: 2 })}
          className={names("flex-1 m-1")}
          name="firstName"
          placeholder="Jon"
          label="First Name"
        />
        <SignupFormInput
          ref={register({ required: true, minLength: 2 })}
          className={names("flex-1 m-1")}
          name="lastName"
          placeholder="Snow"
          label="Last Name"
        />
      </div>
      <div className="flex flex-col">
        <SignupFormInput
          ref={register({ validate: validateEmail })}
          className={names("flex-1 m-1")}
          name="email"
          type="email"
          placeholder="jon.snow@example.com"
          label="Email"
        />
        <button
          className={names(
            "bg-indigo-600",
            "hover:opacity-75 disabled:opacity-50",
            "text-indigo-100 font-semibold",
            "px-4 py-2 m-1",
            "cursor-pointer disabled:cursor-not-allowed",
            "transition duration-200 ease-in-out",
            "flex flex-col items-center",
          )}
          type="submit"
          disabled={!isValid}
        >
          {loading ? <Loading size={19} /> : "Sign Up"}
        </button>
      </div>
      {error && (
        <div className="bg-red-300 p-3 m-1 mt-4">
          <p className="text-red-800 text-sm">{error.message}</p>
        </div>
      )}
      {!!data?.signup?.user && (
        <div
          className={names(
            "bg-brand-500",
            "flex flex-row items-center",
            "p-3 m-1 mt-4",
          )}
        >
          <p className="text-sm font-medium">
            Awesome! We'll let you know when we've got updates for you.
          </p>
          <p className="text-xl ml-2">📮</p>
        </div>
      )}
    </form>
  )
}

interface SignupFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
}

const SignupFormInput = forwardRef<HTMLInputElement, SignupFormInputProps>(
  ({ className, label, children, ...otherProps }, ref) => (
    <label className={names("flex flex-col items-stretch", className)}>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <input
        ref={ref}
        className={names(
          "bg-gray-200 text-gray-900 placeholder-gray-500",
          "px-4 py-2",
        )}
        {...otherProps}
      >
        {children}
      </input>
    </label>
  ),
)
