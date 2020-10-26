import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

export interface CTAProps extends HTMLAttributes<HTMLDivElement> {}

const CTA: FC<CTAProps> = ({ className, ...otherProps }) => (
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
      {/* TODO: Use custom email backend (instead of Netlify Forms) */}
      <form
        className="flex flex-row mt-4"
        name="signup"
        method="POST"
        data-netlify="true"
      >
        <input
          className={names(
            "bg-indigo-600 text-indigo-100 placeholder-indigo-300",
            "px-4 py-2",
            "flex-1",
          )}
          type="email"
          placeholder="jon.snow@example.com"
        />
        <input
          className={names(
            "bg-gray-400 hover:opacity-75",
            "text-gray-800 font-semibold",
            "px-4 ml-2",
            "cursor-pointer",
          )}
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  </section>
)

export default CTA
