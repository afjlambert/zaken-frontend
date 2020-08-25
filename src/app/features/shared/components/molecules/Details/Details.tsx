import React, { useCallback, useState } from "react"
import { Button, themeColor, themeSpacing } from "@datapunt/asc-ui"
import styled from "styled-components"

import SmallSkeleton from "app/features/shared/components/atoms/Skeleton/SmallSkeleton"
import Heading from "app/features/shared/components/atoms/Heading/Heading"

type Props = {
  numLoadingRows?: number
  numInitialVisibleRows?: number
  isLoading?: boolean
  title?: string
  values: Record<string, string|number|JSX.Element|undefined|null>
}

const StyledTable = styled.table`
  border-spacing:0;
  width: 100%;
  margin-bottom: ${ themeSpacing(10) };
`

const StyledTR = styled.tr`
  &:nth-of-type(odd) { background-color: ${ themeColor("tint", "level2") }; }
`

const StyledTD = styled.td`
  padding: ${ themeSpacing(3) } ${ themeSpacing(1) };    
  &:nth-child(1) { min-width: 300px; white-space: nowrap; padding-right: ${ themeSpacing(3) } } 
  &:nth-child(2) { width:100%; } 
`

const StyledButton = styled(Button)`
  margin: ${ themeSpacing(3) } ${ themeSpacing(1) };  
`

type LoadingRowsProps = {
  numRows: number
}
const LoadingRows: React.FC<LoadingRowsProps> = ({ numRows }) => <>
  { [...Array(numRows)].map((_, index) => (
    <StyledTR key={ index }>
      <StyledTD><SmallSkeleton /></StyledTD>
      <StyledTD><SmallSkeleton /></StyledTD>
    </StyledTR>
  )) }
</>

const Details: React.FC<Props> = ({  isLoading, numLoadingRows, numInitialVisibleRows = Number.MAX_VALUE, title, values }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapsed = useCallback(() => setIsCollapsed(!isCollapsed), [setIsCollapsed, isCollapsed])

  const valueEntries = Object.entries(values)

  const isCollapsible = valueEntries.length > numInitialVisibleRows

  const rows = isCollapsible && isCollapsed
    ? valueEntries.slice(0, numInitialVisibleRows)
    : valueEntries

  return (<>
    { title && <Heading>{ isLoading ? <SmallSkeleton height={10} /> : title}</Heading> }
    <StyledTable>
      <tbody>
      { isLoading
        ? <LoadingRows numRows={numLoadingRows ?? 5} />
        : <>
            { rows
              .map(([key, value]) => (
                <StyledTR key={key}>
                  <StyledTD>{ key }</StyledTD>
                  <StyledTD>{ value?.toString !== undefined && value?.toString() !== "" ? value.toString() : "-" }</StyledTD>
                </StyledTR>
              )) }
            { isCollapsible && isCollapsed && <tr><td><StyledButton variant="textButton" onClick={toggleCollapsed}> + Toon alle </StyledButton></td></tr> }
            { isCollapsible && !isCollapsed && <tr><td><StyledButton variant="textButton" onClick={toggleCollapsed}> - Toon minder </StyledButton></td></tr> }
          </>
        }
      </tbody>
    </StyledTable>
  </>)
}


export default Details
