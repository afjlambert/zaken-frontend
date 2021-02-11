import React from "react"
import styled from "styled-components"

import useGroupedCaseEvents from "./hooks/useGroupedCaseEvents"
import TimelineEvents from "./TimelineEvents"
import { Spinner, themeSpacing } from "@amsterdam/asc-ui"

type Props = {
  caseId: Components.Schemas.CaseEvent["id"]
}

const Div = styled.div`
  >div[role="button"] {
    position: relative;
    margin-bottom: ${ themeSpacing(6) };

    &:last-child {
      // hide the thin line in the last timelinecontainer
      >div:nth-child(2) {
        >div:first-child {
          &:after {
            display: none;
          }
        }
      }
    }

    button {
      outline: none;
    }
  }
`

const TimelineContainer: React.FC<Props> = ({ caseId }) => {

  const timelineEvents = useGroupedCaseEvents(caseId)

  return (
    <>
      <Div>
        { timelineEvents === undefined ?
            <Spinner /> :
            <TimelineEvents items={ timelineEvents } />
        }
      </Div>
      { timelineEvents?.length === 0 &&
        <p>Geen tijdlijn evenementen beschikbaar</p>
      }
    </>
  )
}

export default TimelineContainer
