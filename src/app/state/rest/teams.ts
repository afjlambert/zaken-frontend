import type { Options } from "./"
import { useErrorHandler } from "./hooks/utils/errorHandler"
import { makeApiUrl } from "./hooks/utils/apiUrl"
import useApiRequest from "./hooks/useApiRequest"

export const useTeams = (options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.PaginatedCaseTeamList>({
    ...options,
    url: makeApiUrl("teams"),
    groupName: "teams",
    handleError,
    isProtected: true
  })
}

export const useReasons = (teamId?: Components.Schemas.CaseTeam["id"], options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.PaginatedCaseReasonList>({
    lazy: teamId === undefined,
    ...options,
    url: makeApiUrl("teams", teamId, "reasons"),
    groupName: "teams",
    handleError,
    isProtected: true
  })
}

// useSummonTypes for getting the available summonTypes for a specific team
export const useSummonTypes = (teamId?: Components.Schemas.CaseTeam["id"], options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.PaginatedSummonTypeList>({
    ...options,
    lazy: teamId === undefined,
    url: makeApiUrl("teams", teamId, "summon-types"),
    groupName: "cases",
    handleError,
    isProtected: true
  })
}

export const useDecisionTypes = (teamId?: Components.Schemas.CaseTeam["id"], options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.PaginatedDecisionTypeList>({
    ...options,
    lazy: teamId === undefined,
    url: makeApiUrl("teams", teamId, "decision-types"),
    groupName: "cases",
    handleError,
    isProtected: true
  })
}

export const useScheduleTypes = (teamId?: Components.Schemas.CaseTeam["id"], options?: Options) => {
  const handleError = useErrorHandler()
  return useApiRequest<Components.Schemas.TeamScheduleTypes>({
    ...options,
    lazy: teamId === undefined,
    url: makeApiUrl("teams", teamId, "schedule-types"),
    groupName: "cases",
    handleError,
    isProtected: true
  })
}
