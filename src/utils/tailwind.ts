// @ts-ignore
import resolveConfig from "tailwindcss/resolveConfig"

// @ts-ignore
import partialConfig from "../../tailwind.config"

export interface TailwindTheme {
  colors: Record<string, Color | ColorScale>
  screens: Record<string, string>
}

export interface TailwindConfig {
  theme: TailwindTheme
}

export const TAILWIND_CONFIG = resolveConfig(partialConfig) as TailwindConfig
export const TAILWIND_THEME = TAILWIND_CONFIG.theme

export const resolveThemeValue = <
  Section extends keyof TailwindTheme,
  Key extends keyof TailwindTheme[Section]
>(
  section: Section,
  key: Key
): TailwindTheme[Section][Key] => TAILWIND_THEME[section][key]

export const resolveColor = (
  name: string,
  scale?: keyof ColorScale
): string | undefined => {
  const color = resolveThemeValue("colors", name)
  if (!color) return undefined
  if (typeof color === "string") return color
  if (scale === undefined) return color["400"]
  return color[scale]
}

export type Color = string

export type ColorScale = {
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
}
