import React, { useMemo } from "react"
import styled from "styled-components"
import Details from "../../../../shared/components/molecules/Details/Details"
import CheckmarkIcon from "./CheckmarkIcon"
import DateDisplay from "app/features/shared/components/atoms/DateDisplay/DateDisplay"

type Props = {
  id: number
  date: string
  state: string
  hasInvoice?: boolean
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const FineSummary: React.FC<Props> = ({ id, date, state, hasInvoice = false }) => {
  const values = useMemo(() => ({
    "Kenmerk": id,
    "Status": hasInvoice ? <Wrap>{ state }<CheckmarkIcon/></Wrap> : state,
    "Datum": <DateDisplay date={ date } />
  }), [ id, state, date, hasInvoice ])

  return <Details
    numInitialVisibleRows={3}
    values={values}
  />
}

export default FineSummary