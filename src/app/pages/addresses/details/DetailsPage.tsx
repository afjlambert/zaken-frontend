
import { RouteComponentProps } from "@reach/router"

import isValidUrlParamBAGId from "app/routing/utils/isValidUrlParamBAGId"
import DefaultLayout from "app/components/layouts/DefaultLayout/DefaultLayout"
import Row, { RowWithColumn } from "app/components/layouts/Grid/Row"
import Column from "app/components/layouts/Grid/Column"
import DetailHeader from "app/components/shared/DetailHeader/DetailHeader"
import PageHeading from "app/components/shared/PageHeading/PageHeading"
import ObjectDetails from "app/components/addresses/ObjectDetails/ObjectDetails"
import PermitOverview from "app/components/permits/PermitOverview/PermitOverview"
import MockWrapper from "app/components/shared/MockWrapper/MockWrapper"
import NotFoundPage from "app/pages/errors/NotFoundPage"

type Props = {
  bagId: string
}

const DetailPage: React.FC<RouteComponentProps<Props>> = ({ bagId }) => (
  isValidUrlParamBAGId(bagId) ?
    <DefaultLayout>
      <DetailHeader bagId={ bagId } />
      <RowWithColumn>
        <PageHeading />
      </RowWithColumn>
      <Row>
        <Column spanLarge={50}>
          <ObjectDetails bagId={ bagId } />
        </Column>
      </Row>
      <Row>
        <Column spanLarge={50}>
          <MockWrapper>
            <PermitOverview bagId={ bagId }></PermitOverview>
          </MockWrapper>
        </Column>
      </Row>
    </DefaultLayout> :
    <NotFoundPage />
)

export default DetailPage
