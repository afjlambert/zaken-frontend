import type { Options } from "./"
import { useErrorHandler } from "./hooks/utils/errorHandler"
import { makeApiUrl } from "./hooks/utils/apiUrl"
import useApiRequest from "./hooks/useApiRequest"
import { Schema } from "inspector"

export const useIsAuthorized = (options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<IsAuthorizedResponse>({
    ...options,
    url: makeApiUrl("is-authorized"),
    groupName: "auth",
    handleError,
    isProtected: true
  })
}

export const useMe = (options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.UserDetail>({
    ...options,
    url: makeApiUrl("authors", "me"),
    groupName: "auth",
    handleError,
    isProtected: true
  })
}

export const usePermissions = (options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.Permission[]>({
    ...options,
    url: makeApiUrl("permissions"),
    groupName: "auth",
    handleError,
    isProtected: true
  })
}