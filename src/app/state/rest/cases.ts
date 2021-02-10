import qs from "qs"

import type { Options } from "./"
import { makeGatewayUrl, useErrorHandler } from "./hooks/utils/utils"
import useApiRequest from "./hooks/useApiRequest"

export const useCases = (state_date?: string, options?: Options) => {
  const queryString = state_date !== undefined ? qs.stringify({ state_date }, { addQueryPrefix: true }) : ""
  const url = `${ makeGatewayUrl("cases") }${ queryString }`
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.PaginatedCaseList>({
    ...options,
    url,
    groupName: "cases",
    handleError,
    isProtected: true
  })
}

export const useMockCases = (options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest({
    ...options,
    url: makeGatewayUrl("cases", "generate-mock"),
    groupName: "cases",
    handleError,
    isProtected: true
  })
}

export const useCasesByBagId = (bagId: Components.Schemas.Address["bag_id"], openCases?: boolean, options?: Options) => {
  const handleError = useErrorHandler()
  const queryString = openCases === true ? qs.stringify({ open_cases: true }, { addQueryPrefix: true }) : ""
  return useApiRequest<Components.Schemas.PaginatedCaseList>({
    ...options,
    url: `${ makeGatewayUrl("addresses", bagId, "cases") }${ queryString }`,
    groupName: "cases",
    handleError,
    isProtected: true
  })
}