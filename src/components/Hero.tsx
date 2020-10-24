import React, { FC, HTMLAttributes } from "react"
import names from "classnames"

export interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

const Hero: FC<HeroProps> = ({ className, ...otherProps }) => (
  <div className={names("pt-20", "bg-yellow-500", className)} {...otherProps}>
    <div className="flex flow-row justify-center">
      <div
        className={names(
          "border-2 border-black",
          "w-64",
          "bg-white",
          "flex items-center justify-center",
        )}
        style={{ height: "18rem" }}
      >
        <p>placeholder</p>
      </div>
      <div className="w-8 md:w-16 lg:w-24" />
      <div className="max-w-sm">
        <div className="text-3xl font-extrabold leading-tight">
          <h1>Learn to code,</h1>
          <h1>Make new friends,</h1>
          <h1>Drink coffee</h1>
        </div>
        <h2
          className={names(
            "text-2xl",
            "text-gray-700",
            "font-bold",
            "leading-tight",
            "mt-4",
          )}
        >
          Come hang out with us on{" "}
          <span className="opacity-25 line-through">
            Tuesdays and Thursdays in E7
          </span>{" "}
          The Internet
        </h2>
      </div>
    </div>
  </div>
)

export default Hero
