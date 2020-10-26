import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

const Hero: FC<HeroProps> = ({ className, ...otherProps }) => (
  <section
    className={names("pt-10 md:pt-12 lg:pt-16", "bg-brand-500", className)}
    {...otherProps}
  >
    <div
      className={names(
        "flex flex-col md:flex-row",
        "md:items-end md:justify-center",
        "mx-12 sm:mx-20 md:mx-0",
      )}
    >
      <img
        className={names(
          "md:flex-1 self-center md:self-end",
          "max-w-sm lg:max-w-md xl:max-w-lg",
          "-mb-px",
        )}
        src={require("src/assets/hero-scene.svg")}
      />
      <div className="h-12 w-8 lg:w-16 xl:w-24" />
      <div className="mb-16 md:mb-12">
        <div className="text-4xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          <h1>
            Learn to code,
            <br />
            Make new friends,
            <br />
            And drink coffee
          </h1>
        </div>
        <h2
          className={names(
            "text-xl lg:text-2xl text-brand-800 font-bold leading-tight",
            "mt-4",
          )}
        >
          Come hang out with us on
          <br />
          <span className="opacity-50 line-through">
            Tuesdays and Thursdays in E7
          </span>
          <br />
          <span className="text-indigo-600 font-extrabold">The Internet</span>
        </h2>
      </div>
    </div>
  </section>
)

export default Hero
