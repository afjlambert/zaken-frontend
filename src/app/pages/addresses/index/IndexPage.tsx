
import { RouteComponentProps } from "@reach/router"
import { Button } from "@amsterdam/asc-ui"

import isValidUrlParamBAGId from "app/routing/utils/isValidUrlParamBAGId"
import { RowWithColumn } from "app/components/layouts/Grid/Row"
import DefaultLayout from "app/components/layouts/DefaultLayout/DefaultLayout"
import AddressHeader from "app/components/addresses/AddressHeader/AddressHeader"
import AddressMenu from "app/components/addresses/AddressMenu/AddressMenu"
import PanoramaPreview from "app/components/addresses/Panorama/PanoramaPreview"
import ButtonLink from "app/components/shared/ButtonLink/ButtonLink"
import to from "app/routing/utils/to"
import CasesByBagId from "app/components/addresses/CasesByBagId/CasesByBagId"
import IsAuthorizedWrapper from "app/components/auth/IsAuthorizedWrapper/IsAuthorizedWrapper"
import NotFoundPage from "app/pages/errors/NotFoundPage"

type Props = {
  bagId: string
}

const IndexPage: React.FC<RouteComponentProps<Props>> = ({ bagId }) => (
  isValidUrlParamBAGId(bagId) ?
    <DefaultLayout>
      <RowWithColumn>
        <AddressHeader bagId={ bagId } headingSize="h1" isHeader={true} />
      </RowWithColumn>
      <RowWithColumn bottomSpacing={ 3 }>
        <PanoramaPreview bagId={ bagId } aspect={ 2.8 } fov={ 120 } />
      </RowWithColumn>
      <RowWithColumn>
        <AddressMenu bagId={ bagId } />
      </RowWithColumn>
      <RowWithColumn>
        <CasesByBagId
          bagId={ bagId }
          openCases={ true }
          title="Lopende zaken"
          emptyText="Op dit adres zijn er geen lopende zaken"
        />
      </RowWithColumn>
      <IsAuthorizedWrapper permissionName="add_case">
        <RowWithColumn>
          <ButtonLink to={ to("/adres/:bagId/zaken/nieuw", { bagId })}>
            <Button variant="primary" as="span">Nieuwe zaak aanmaken</Button>
          </ButtonLink>
        </RowWithColumn>
      </IsAuthorizedWrapper>
    </DefaultLayout> :
    <NotFoundPage />
)

export default IndexPage
