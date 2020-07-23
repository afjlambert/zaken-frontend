import useApiRequest from "./hooks/useApiRequest"
import { getHeaders, makeGatewayUrl, useErrorHandler } from "./hooks/utils/utils"
import { APIListResponse } from "./types/ApiListResponse"
import { BAGAddressResponse } from "./types/BAGAddressResponse"

export type ApiGroup =
  | "cases"
  | "caseTypes"
  | "caseStates"
  | "dataPunt"

/**
 * Please configure your endpoints here:
 */
export const useCases = () => {
  const handleError = useErrorHandler()
  return useApiRequest<APIListResponse<API.Case>>({
    url: makeGatewayUrl("cases"),
    groupName: "cases",    // NOTE: "cases" and "cases/:id" share the same group config. Cache will be cleared for the whole group.
    handleError,
    getHeaders
  })
}

export const useCase = (id: API.Case["identification"]) => {
  const handleError = useErrorHandler()
  return useApiRequest<API.Case>({
    url: makeGatewayUrl("cases", id!),
    groupName: "cases",
    handleError,
    getHeaders
  })
}


export const useCaseTypes = () => {
  const handleError = useErrorHandler()
  return useApiRequest<APIListResponse<API.CaseType>>({
    url: makeGatewayUrl("case-types"),
    groupName: "caseTypes",
    handleError,
    getHeaders
  })
}

export const useBAG = (bagId: string) => {
  const handleError = useErrorHandler()
  return useApiRequest<BAGAddressResponse>({
    url: `https://api.data.amsterdam.nl/atlas/search/adres/?q=${ bagId }`,
    groupName: "caseStates",
    handleError
  })
}
