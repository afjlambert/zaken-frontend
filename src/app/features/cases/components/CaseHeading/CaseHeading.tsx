import React from "react"
import styled from "styled-components"
import { Heading, Spinner, themeColor, themeSpacing } from "@amsterdam/asc-ui"

import { useCase } from "app/state/rest"
import CaseIdDisplay from "../CaseIdDisplay/CaseIdDisplay"
import FullAddressDisplay from "app/features/addresses/components/FullAddressDisplay/FullAddressDisplay"

type Props = {
  id: Components.Schemas.Case["id"]
}

const Wrap = styled.div`
  margin-bottom: ${ themeSpacing(12) };
`

const Div = styled.div`
  display: flex;
  margin-bottom: ${ themeSpacing(3) };
`
const Dt = styled.dt`
  color: ${ themeColor("tint", "level5") };
  min-width: 120px;
`

const CaseHeading: React.FC<Props> = ({ id }) => {

  const { data } = useCase(id)

  return (
    <Wrap>
      <Heading as="h3">Zaak</Heading>
      { data === undefined ?
        <Spinner /> :
        <dl>
          <Div>
            <Dt>Adres</Dt>
            <dd>
              <FullAddressDisplay
                streetName={ data.address.street_name }
                streetNumber={ data.address.number }
                suffix={ data.address.suffix_letter }
                etage={ data.address.suffix }
                postalCode={ data.address.postal_code }
                city={ "Amsterdam" }
              />
            </dd>
          </Div>
          <Div>
            <Dt>Zaak Id</Dt>
            <dd>
              <CaseIdDisplay id={ data?.identification } />
            </dd>
          </Div>
        </dl>
      }
    </Wrap>
  )
}
export default CaseHeading