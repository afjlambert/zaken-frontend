import routesObject, { Routes } from "app/routing/routes"
import { RouteComponentProps } from "@reach/router"
import slashSandwich from "slash-sandwich"

// RouteParams for given K in Routes
type RouteParams<T extends Routes, K extends keyof T> =
  // ... value for K should be a Component:
  T[K]["Page"] extends React.ComponentType
    // Omit default RouteComponentProps, we're not interested in those. (E.g location, navigate, etc)
    ? Omit<React.ComponentProps<T[K]["Page"]>, keyof RouteComponentProps | "children">
    // Don't allow anything else than Components. As we cannot safely extract component-props on anything other than a Component
    : never

// Safely convert any object to a string, even null or undefined
const toString = (val: unknown): string => {
  switch (typeof val) {
    case "string": return val
    case "number": return String(val)
    case "boolean": return val ? "1" : "0"
    default: return ""
  }
}

/**
 * Example:
 * applyRouteParams('/foo/:id/', { id: 100 });       =>      "/foo/100/"
 */
const applyRouteParams = <T extends Routes, K extends keyof T>
  (url: string, params: RouteParams<T, K>): string =>
    Object
      .entries(params)
      .reduce(
        (url, [key, value]) => url.replace(`:${ key }`, toString(value)),
        url
      )

/**
 * Typesafe routes.
 * Usage: `to("/foo/:id/", { id: 100 })`
 */
export default <T extends Routes, K extends keyof T>
  (path: K, params?: RouteParams<T, K>) => {
    const str = path.toString()
    if (process.env.NODE_ENV === "development" && !(slashSandwich([str], { trailingSlash: true }) in routesObject)) console.warn(`${ str } is not an existing route`)
    return params !== undefined
      ? applyRouteParams(str, params)
      : str
  }
