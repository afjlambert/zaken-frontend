import React, { useMemo } from "react"
import DateDisplay from "app/features/shared/components/atoms/DateDisplay/DateDisplay"
import DefinitionList from "app/features/shared/components/molecules/DefinitionList/DefinitionList"

type Props = {
  data: Components.Schemas.Fine
}

const statusMap = {
  "AANM": "Gefactureerd"
} as Record<string, string>

const FinesSearchResult: React.FC<Props> = ( data ) => {
  const fine = data.data
  const values = useMemo(() => ({
    "Kenmerk": fine.identificatienummer,
    "Status": statusMap[fine.invorderingstatus] !== undefined ? statusMap[fine.invorderingstatus] : "Onbekend",
    "Datum": fine.dagtekening ? <DateDisplay date={ fine.dagtekening } /> : "-"
  }),[fine])

  return (
    <DefinitionList
    numInitialVisibleRows={3}
    values={ values }
    headingSize="h3"
  />
  )
}
export default FinesSearchResult
